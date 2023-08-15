import browser from "webextension-polyfill";
/**
 * this is a background long connection
 */

browser.runtime.onConnect.addListener(function (port) {
  console.log(port);
  port.onMessage.addListener(function () {
    port.postMessage({ question: "Who's there?" });
  });
});
