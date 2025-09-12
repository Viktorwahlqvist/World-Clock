import { useEffect } from "react";

// Custom hook to change the background image dynamically.
// If a city/timezone has a background saved in public, it will be used.
// Otherwise a default background will be used.
export default function useBackground(
  background: string | undefined,
  defaultpic: boolean | undefined
): void {
  let fullpath;

  if (!background || defaultpic) {
    fullpath = `/background/homepage.jpg`;
  } else fullpath = `/background/${background.replace(/ /g, "_")}.webp`;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--background-country", `url("${fullpath}")`);
  }, [fullpath]);
}
