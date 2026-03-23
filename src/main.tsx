import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Force light mode — remove any previously stored dark preference
if (typeof window !== "undefined") {
  localStorage.removeItem("mbarros-theme");
  document.documentElement.classList.remove("dark");
  document.documentElement.classList.add("light");
}

createRoot(document.getElementById("root")!).render(<App />);
