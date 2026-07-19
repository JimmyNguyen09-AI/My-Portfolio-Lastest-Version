"use client";

import { motion } from "framer-motion";

type AmbientMotionProps = {
  tone?: "light" | "dark";
  density?: "calm" | "rich";
};

const lightMarks = ["AI", "CV", "RAG", "UX"];
const darkMarks = ["LLM", "API", "GPU", "WEB"];

export default function AmbientMotion({ tone = "light", density = "calm" }: AmbientMotionProps) {
  const marks = tone === "dark" ? darkMarks : lightMarks;
  const isDark = tone === "dark";

  return (
    <div
      aria-hidden="true"
      className={`lux-motion-field ${isDark ? "lux-motion-field-dark" : ""} ${
        density === "rich" ? "lux-motion-field-rich" : ""
      }`}
    >
      <svg className="lux-wave lux-wave-one" viewBox="0 0 1200 420" preserveAspectRatio="none">
        <path d="M-80 210 C 120 80, 250 340, 450 210 S 790 80, 980 220 S 1220 310, 1320 170" />
        <path d="M-90 260 C 160 130, 280 390, 500 250 S 830 120, 1030 270 S 1230 350, 1340 230" />
      </svg>

      <svg className="lux-wave lux-wave-two" viewBox="0 0 1200 420" preserveAspectRatio="none">
        <path d="M-120 150 C 130 250, 250 20, 490 150 S 820 290, 1040 130 S 1240 40, 1340 190" />
      </svg>

      <motion.div
        className="lux-paper-plane lux-paper-plane-one"
        animate={{
          x: ["-12vw", "28vw", "68vw", "112vw"],
          y: ["18vh", "8vh", "20vh", "6vh"],
          rotate: [-12, 8, -6, 10],
          opacity: [0, 0.65, 0.55, 0],
        }}
        transition={{ duration: 19, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <span />
      </motion.div>

      {density === "rich" && (
        <motion.div
          className="lux-paper-plane lux-paper-plane-two"
          animate={{
            x: ["108vw", "76vw", "42vw", "-10vw"],
            y: ["58vh", "48vh", "62vh", "50vh"],
            rotate: [168, 186, 174, 190],
            opacity: [0, 0.42, 0.38, 0],
          }}
          transition={{
            delay: 5,
            duration: 24,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <span />
        </motion.div>
      )}

      <div className="lux-signal-rail lux-signal-rail-one">
        {marks.map((mark, index) => (
          <span key={`${mark}-${index}`}>{mark}</span>
        ))}
      </div>

      <div className="lux-signal-rail lux-signal-rail-two">
        {[...marks].reverse().map((mark, index) => (
          <span key={`${mark}-${index}`}>{mark}</span>
        ))}
      </div>

      <div className="lux-scan-line lux-scan-line-one" />
      {density === "rich" && <div className="lux-scan-line lux-scan-line-two" />}
    </div>
  );
}
