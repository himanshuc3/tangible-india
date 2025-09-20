import { animate, createScope, createSpring, createDraggable } from "animejs";
import { useEffect, useRef, useState } from "react";
import IndiaFlag from "@/components/IndiaFlag";
import "./index.scss";

const HEADING = "TANGIBLE";

// TODO: Really need react scaffold extension for vscode
export default function Title() {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      // Scramble animation for each character
      const chars = Array.from(document.querySelectorAll(".title-character"));
      const finalChars = HEADING.split("");
      chars.forEach((el, idx) => {
        const scrambleDuration = 3000 + Math.random() * 400; // ms
        const scrambleInterval = 400;
        let elapsed = 0;

        const original = finalChars[idx];
        const scramble = () => {
          if (elapsed < scrambleDuration) {
            el.textContent = Math.floor(Math.random() * 10).toString();
            elapsed += scrambleInterval;
            setTimeout(scramble, Math.ceil(scrambleInterval * Math.random()));
          } else {
            el.textContent =
              Math.random() < 1 ? original : original.toLowerCase();
            // Optional: bounce effect after reveal
            // animate(el, {
            //   scale: [
            //     { to: 1.25, ease: "inOut(3)", duration: 200 },
            //     { to: 1, ease: createSpring({ stiffness: 300 }) },
            //   ],
            // });
          }
        };
        setTimeout(scramble, idx * 300); // stagger start
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current.revert();
  }, []);

  return (
    <div className="title-container flex gap-4" ref={root}>
      <h1 className="title font-semibold">
        {HEADING.split("").map((c, index) => (
          <p
            className="title-character text-semibold text-2xl text-card-foreground"
            key={index}
          ></p>
        ))}
      </h1>
      <IndiaFlag numOfColumns={8} staggeredDelay={20} billow={0.4} />
    </div>
  );
}
