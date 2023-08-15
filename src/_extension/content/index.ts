import browser from "webextension-polyfill";

/**
 * this is a content
 */

const port = browser.runtime.connect({ name: "content-scripts" });
port.postMessage({ joke: "Knock knock" });
port.onMessage.addListener(function (msg) {
  if (msg.question === "Who's there?") port.postMessage({ answer: "Madame" });
  else if (msg.question === "Madame who?")
    port.postMessage({ answer: "Madame... Bovary" });
});
