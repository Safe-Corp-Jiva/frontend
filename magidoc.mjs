// magidoc.mjs
import path from "path";

export default {
  introspection: {
    type: "url",
    url: "http://localhost:20002/graphql",
    headers: {
      "x-api-key": "da2-fakeApiId123456",
    },
    staticAssets: path.join(__dirname, "assets"),
    options: {
      siteRoot: "/docs",
    },
  },
  website: {
    template: "carbon-multi-page",
  },
};
