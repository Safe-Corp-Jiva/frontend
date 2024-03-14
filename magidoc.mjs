// magidoc.mjs
import path from "path";

var __dirname = path.dirname(new URL(import.meta.url).pathname);

export default {
  introspection: {
    type: "url",
    url: "http://localhost:20002/graphql",
    headers: {
      "x-api-key": "da2-fakeApiId123456",
    },
  },
  website: {
    template: "carbon-multi-page",
    staticAssets: path.join(__dirname, "assets"),
    options: {
      siteRoot: "/frontend",
    },
  },
};
