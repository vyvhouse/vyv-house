import Image from "next/image";

const frames = [
  { src: "/photos/house-session.webp", alt: "Builders gathered around the table at VYV House", label: "WORK SESSION" },
  { src: "/photos/house-dinner.webp", alt: "Residents sharing a late dinner at VYV House", label: "AFTER HOURS" },
  { src: "/photos/house-studio.webp", alt: "A quiet shared workspace at VYV House", label: "DEEP WORK" },
  { src: "/photos/house-fireplace.webp", alt: "Residents sitting together by the fireplace", label: "HOUSE RITUAL" },
];

export function HouseGallery() {
  return (
    <div className="house-gallery">
      {frames.map((frame, index) => (
        <figure key={frame.src} className="gallery-frame" style={{ "--frame-index": index } as React.CSSProperties}>
          <Image src={frame.src} alt={frame.alt} fill sizes="(max-width: 700px) 100vw, 62vw" priority={index === 0} />
          <figcaption>{frame.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}
