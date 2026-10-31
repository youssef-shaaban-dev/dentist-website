"use client";

import React from "react";

export function SplitTextScrub({
  text,
  className = "",
  wordClassName = "",
}: {
  text: string;
  className?: string;
  wordClassName?: string;
}) {
  if (!text) return null;
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden align-top pb-1 mr-[0.25em] rtl:mr-0 rtl:ml-[0.25em]"
        >
          <span
            className={`inline-block will-change-transform ${wordClassName}`}
            style={{ transform: "translateY(115%)", opacity: 0 }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

