import { createPortal } from "react-dom";
import { useState,useMemo } from "react";
export default function Modal({ children }) {
  const [mounted, setMounted] = useState(false);

  useMemo(() => setMounted(true), []);

  return mounted ? createPortal(<>{children}</>, document.getElementById("my_projects")) : null;
}