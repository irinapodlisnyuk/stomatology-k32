"use client";

import React, { useSyncExternalStore } from "react";

const subscribeEmpty = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
 const isClient = useSyncExternalStore(
    subscribeEmpty,
    getClientSnapshot,
    getServerSnapshot
  );

  return (
    <div
      style={{
        opacity: isClient ? 1 : 0,
        transform: isClient ? "translateY(0)" : "translateY(15px)",
        transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}