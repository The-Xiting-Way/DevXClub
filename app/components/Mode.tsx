"use client";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaMoon, FaSun } from "react-icons/fa";

export function Mode() {
  const [mode, setMode] = useState("dark");
  const { setTheme } = useTheme();
  return (
    <div>
      {mode === "light" ? (
        <Button
          onClick={() => {
            setTheme("dark");
            setMode("dark");
          }}
          variant="link"
        >
          <FaMoon className="w-8 h-8 text-black" />
        </Button>
      ) : (
        <Button
          onClick={() => {
            setTheme("light");
            setMode("light");
          }}
          variant="link"
        >
          <FaSun className="w-8 h-8 text-black dark:text-white" />
        </Button>
      )}

      {/* <button>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("system")}>System</button> */}
    </div>
  );
}
