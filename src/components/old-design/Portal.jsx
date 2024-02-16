import { createPortal } from "react-dom";
import { useState,useMemo } from "react";
export default function Modal({ children,isOpen }) {
  const [mounted, setMounted] = useState(false);

  useMemo(() => setMounted(true), []);
  
  if(!isOpen) return null;
  return mounted ? createPortal(<>{children}</>, document.getElementById("modal")) : null;
}