import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

// User site (meashgrey.github.io) is served from the domain root, so base is "/".
// If this ever becomes a project site (e.g. /my-repo/), change base accordingly.
export default defineConfig({
  base: "/",
  plugins: [solid()],
});
