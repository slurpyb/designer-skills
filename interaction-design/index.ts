import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default async function (pi: ExtensionAPI) {
      
pi.on("resources_discover", async (event, _ctx) => {
    // event.cwd - current working directory
    // event.reason - "startup" | "reload"
    return {
      skillPaths: ["/skills"],
      promptPaths: ["/commands"]
    };
  })
}

