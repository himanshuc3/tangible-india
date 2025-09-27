// import { animate, createScope, createSpring, createDraggable } from "animejs";
import { useEffect, useRef, useState } from "react";


import IndiaFlag from "@/components/IndiaFlag";
import "./index.scss";

const HEADING = "TANGIBLE";

// TODO: Really need react scaffold extension for vscode
export default function Title() {
  const root = useRef(null);
  const scope = useRef(null);
  const [isFlagVisible, setFlagVisible] = useState(false);
  const [flagFadeIn, setFlagFadeIn] = useState(false);
  const flagTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // scope.current = createScope({ root }).add((self) => {
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
              Math.random() < 0.5 ? original : original.toLowerCase();
              if(idx === chars.length - 3){
                // Delay the flag appearance by 2 seconds, then fade in
                  setFlagVisible(true);
                  setTimeout(() => setFlagFadeIn(true), 50); // trigger fade after mount
              }
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
    // });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => {
      // scope.current?.revert();
      if (flagTimeout.current) clearTimeout(flagTimeout.current);
    };
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
      
        {isFlagVisible && (
          <div
            className={`transition-opacity duration-500 ${flagFadeIn ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '0s' }}
          >
            <IndiaFlag numOfColumns={8} staggeredDelay={20} billow={0.4} />
          </div>
        )}
    </div>
  );
}
