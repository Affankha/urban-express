// components/elements/Preloader.js

"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // hide preloader after 1 second
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader" style={{ position: "fixed", inset: 0, zIndex: 9999, backgroundColor: "#fff" }}>
      <div className="preloader__image" />
    </div>
  );
}
