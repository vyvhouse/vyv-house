import type { PastEvent } from "@/types/event";

const VYV_CALENDAR_ID = "cal-hHz7R98dsv1Lf3z";
const API_BASE = "https://api2.luma.com";

type LumaCalendarItem = {
  api_id: string;
  event: {
    api_id: string;
    name: string;
    url: string;
    start_at: string;
    cover_url: string;
    geo_address_info?: {
      short_address?: string;
      city_state?: string;
      full_address?: string;
      localized?: {
        ko?: {
          short_address?: string;
          city_state?: string;
        };
      };
    };
  };
  hosts?: Array<{ name: string }>;
};

type LumaCalendarResponse = {
  entries: LumaCalendarItem[];
  has_more?: boolean;
  next_cursor?: string | null;
};

/**
 * Fetches past events for the vyv.house Luma calendar.
 *
 * Notes:
 * - Uses Luma's public api2.luma.com endpoint. No authentication is required
 *   and the calendar is on the free plan (no Luma Plus needed).
 * - Called from a Server Component, so CORS does not apply.
 * - Revalidates hourly so newly-ended events appear without a redeploy.
 * - Falls back to an empty list on any network/parse error so the page
 *   continues to render.
 */
export async function fetchPastEvents(limit = 12): Promise<PastEvent[]> {
  const url = `${API_BASE}/calendar/get-items?calendar_api_id=${VYV_CALENDAR_ID}&pagination_limit=${limit}&period=past`;

  try {
    const res = await fetch(url, {
      // Re-fetch at most once per hour; Luma calendar slots don't move that fast.
      next: { revalidate: 3600 },
      headers: {
        accept: "application/json",
      },
    });

    if (!res.ok) {
      console.warn(`[luma] past events fetch failed: ${res.status}`);
      return [];
    }

    const data = (await res.json()) as LumaCalendarResponse;

    return (data.entries ?? []).map((entry) => {
      const ev = entry.event;
      const geo = ev.geo_address_info;
      const location =
        geo?.localized?.ko?.short_address ??
        geo?.short_address ??
        geo?.localized?.ko?.city_state ??
        geo?.city_state ??
        "";

      return {
        id: ev.api_id,
        name: ev.name,
        url: ev.url,
        startAt: ev.start_at,
        coverUrl: ev.cover_url,
        location,
        hosts: (entry.hosts ?? []).map((h) => h.name),
      } satisfies PastEvent;
    });
  } catch (err) {
    console.warn("[luma] past events fetch threw:", err);
    return [];
  }
}
