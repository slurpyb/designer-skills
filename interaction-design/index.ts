import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default async function (pi: ExtensionAPI) {
   
    pi.on("session_start", async (event, ctx) => {
        // event.reason - "startup" | "reload" | "new" | "resume" | "fork"
        // event.previousSessionFile - present for "new", "resume", and "fork"
        ctx.ui.notify(`Session: ${ctx.sessionManager.getSessionFile() ?? "ephemeral"}`, "info");
      });
// pi.on("resources_discover", async (event, _ctx) => {
//     // event.cwd - current working directory
//     // event.reason - "startup" | "reload"
//     return {
//       skillPaths: ["/skills"],
//       promptPaths: ["/commands"]
//     };
//   })
}

