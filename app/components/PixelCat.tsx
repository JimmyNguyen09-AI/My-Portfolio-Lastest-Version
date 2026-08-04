"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CatSection = "home" | "about" | "projects" | "contact";

const sectionMessages: Record<CatSection, string> = {
  home: "Scanning the entrance — Jimmy builds AI with a sharp point of view.",
  about: "Profile scan complete — systems thinking, product polish, human touch.",
  projects: "Deployment zone detected — real products, shipped with intent.",
  contact: "Signal found — this is a good place to start a conversation.",
};

const celebrationMessages = [
  "Nice click. Mission progress: +100%.",
  "Excellent timing — surveillance report says you have good taste.",
  "Tiny celebration unlocked. Keep exploring.",
];

const sectionIds: CatSection[] = ["home", "about", "projects", "contact"];

export default function PixelCat() {
  const prefersReducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<CatSection>("home");
  const [celebration, setCelebration] = useState(false);
  const celebrationTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const updateSection = () => {
      const viewportCenter = window.innerHeight * 0.5;
      const current = sectionIds.find((id) => {
        const section = document.getElementById(id);
        if (!section) {
          return false;
        }

        const bounds = section.getBoundingClientRect();
        return bounds.top <= viewportCenter && bounds.bottom >= viewportCenter;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    updateSection();
    window.addEventListener("scroll", updateSection, { passive: true });
    window.addEventListener("resize", updateSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateSection);
      window.removeEventListener("resize", updateSection);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    return () => {
      if (celebrationTimerRef.current !== null) {
        window.clearTimeout(celebrationTimerRef.current);
      }
    };
  }, []);

  if (prefersReducedMotion) {
    return null;
  }

  const message = celebration
    ? celebrationMessages[sectionIds.indexOf(activeSection) % celebrationMessages.length]
    : sectionMessages[activeSection];

  const celebrate = () => {
    setCelebration(true);

    if (celebrationTimerRef.current !== null) {
      window.clearTimeout(celebrationTimerRef.current);
    }

    celebrationTimerRef.current = window.setTimeout(() => {
      setCelebration(false);
      celebrationTimerRef.current = null;
    }, 2800);
  };

  return (
    <motion.div
      aria-live="polite"
      className={`pixel-cat ${celebration ? "pixel-cat--celebrating" : ""}`}
      animate={{
        left: ["4vw", "4vw", "38vw", "38vw", "84vw", "84vw", "62vw", "8vw", "8vw", "4vw"],
        top: ["12vh", "12vh", "12vh", "78vh", "78vh", "22vh", "52vh", "52vh", "84vh", "12vh"],
        y: [0, -22, 0, -28, 0, -24, 0, -26, 0, -22],
      }}
      transition={{
        left: {
          duration: 26,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          times: [0, 0.07, 0.18, 0.3, 0.42, 0.56, 0.68, 0.8, 0.91, 1],
        },
        top: {
          duration: 26,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          times: [0, 0.07, 0.18, 0.3, 0.42, 0.56, 0.68, 0.8, 0.91, 1],
        },
        y: {
          duration: 26,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeOut",
          times: [0, 0.07, 0.18, 0.3, 0.42, 0.56, 0.68, 0.8, 0.91, 1],
        },
      }}
    >
      <div className="pixel-cat__message">{message}</div>

      <motion.button
        type="button"
        aria-label="Click the monitoring pixel cat"
        className="pixel-cat__button"
        onClick={celebrate}
        animate={{ scaleX: [1, 1, 1, 1, -1, -1, -1, 1, 1, 1] }}
        transition={{
          duration: 26,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          times: [0, 0.07, 0.18, 0.3, 0.42, 0.56, 0.68, 0.8, 0.91, 1],
        }}
      >
        <span className="pixel-cat__tail" />
        <span className="pixel-cat__body" />
        <span className="pixel-cat__head">
          <span className="pixel-cat__eye pixel-cat__eye--left" />
          <span className="pixel-cat__eye pixel-cat__eye--right" />
        </span>
        <span className="pixel-cat__logo" aria-hidden="true">
          <Image src="/logo-JN.png" alt="" width={36} height={36} />
        </span>
        <span className="pixel-cat__leg pixel-cat__leg--front-left" />
        <span className="pixel-cat__leg pixel-cat__leg--front-right" />
        <span className="pixel-cat__leg pixel-cat__leg--back-left" />
        <span className="pixel-cat__leg pixel-cat__leg--back-right" />
      </motion.button>
    </motion.div>
  );
}
