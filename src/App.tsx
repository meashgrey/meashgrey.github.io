import { For } from "solid-js";
import ThemeToggle from "./components/ThemeToggle";
import { site, type SiteLink } from "./data/site";

function LinkItem(props: { link: SiteLink }) {
  const external = () => /^https?:\/\//.test(props.link.href);
  return (
    <a
      href={props.link.href}
      target={external() ? "_blank" : undefined}
      rel={external() ? "noreferrer" : undefined}
    >
      {props.link.label}
    </a>
  );
}

export default function App() {
  return (
    <main class="page">
      <ThemeToggle />

      <header class="intro">
        <h1>{site.name}</h1>
        <p class="lede">{site.lede}</p>
        <nav class="links" aria-label="Elsewhere">
          <For each={site.links}>{(link) => <LinkItem link={link} />}</For>
        </nav>
      </header>
    </main>
  );
}
