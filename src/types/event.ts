export type CalendarEvent = {
  id: string;
  name: string;
  /** Luma short slug, e.g. "u0ijkpby" → https://luma.com/u0ijkpby */
  url: string;
  /** ISO datetime in UTC */
  startAt: string;
  coverUrl: string;
  /** Localized short address suitable for inline display */
  location: string;
  hosts: string[];
};
