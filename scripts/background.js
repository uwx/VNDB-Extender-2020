let n = 0;
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(
  (e) => console.log(e, ++n)
);
