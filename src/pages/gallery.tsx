import React, { useState } from "react";
import "./pages-css/gallery.css";


const importAll = (r: any) => r.keys().map(r);

const jcParkImgs = importAll(
  (require as any).context(
    "../assets/JC_PARK_25",
    false,
    /\.(png|jpe?g|JPG|JPEG)$/
  )
);

const zmanParkImgs = importAll(
  (require as any).context(
    "../assets/ZMAN_PARK_25",
    false,
    /\.(png|jpe?g|JPG|JPEG)$/
  )
);

export const Gallery: React.FC = () => {
  const events = [
    { title: "JC Park Event", photos: jcParkImgs },
    { title: "Zimmerman Park Event", photos: zmanParkImgs },
  ];

  const [openEvents, setOpenEvents] = useState<boolean[]>(
    events.map(() => true)
  );

  const toggleEvent = (index: number) => {
    const newOpen = [...openEvents];
    newOpen[index] = !newOpen[index];
    setOpenEvents(newOpen);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Past Events!</h1>
      <p className="event-instructions">Click on an image to download it!</p>

      {events.map((event, idx) => (
        <section key={idx} className="event-section">
          <h2
            className="event-title"
            onClick={() => toggleEvent(idx)}
            style={{ cursor: "pointer" }}
          >
            {event.title} {openEvents[idx] ? "▲" : "▼"}
          </h2>

          {openEvents[idx] && (
            <div className="masonry">
              {event.photos.map((img: string, index: number) => (
                <a key={index} href={img} download title="Click to download">
                  <img
                    src={img}
                    alt={`${event.title} ${index + 1}`}
                    loading="lazy"
                    className="masonry-img"
                  />
                </a>
              ))}
            </div>
          )}
        </section>
      ))}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
