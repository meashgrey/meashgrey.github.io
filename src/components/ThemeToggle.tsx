import { createEffect, createSignal, Show } from "solid-js";

type Theme = "light" | "dark";

function initialTheme(): Theme {
  const saved = document.documentElement.dataset.theme;
  if (saved === "light" || saved === "dark") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = createSignal<Theme>(initialTheme());

  createEffect(() => {
    const next = theme();
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }
  });

  return (
    <button
      type="button"
      class="theme-toggle"
      aria-label={theme() === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme() === "dark" ? "Light theme" : "Dark theme"}
      onClick={() => setTheme(theme() === "dark" ? "light" : "dark")}
    >
      <Show
        when={theme() === "dark"}
        fallback={
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z" />
          </svg>
        }
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </Show>
    </button>
  );
}
