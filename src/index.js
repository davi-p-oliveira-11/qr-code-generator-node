import prompt from "prompt";

import mainPrompt from "./prompts/prompt-main.js";

async function main() {
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) console.log("escolheu o qr code");
    if (choose.select == 2) console.log("escolheu o password");
  });

  prompt.start();
}

main();
