
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
  if (!localStorage["ext_id"]) {
    console.error('extension id is empty. please set at option page');
    return;
  }
  var id = localStorage["ext_id"];
  chrome.management.setEnabled(id, false, function() {
    chrome.management.setEnabled(id, true, function () {
      sendResponse();
    });
  });
});
