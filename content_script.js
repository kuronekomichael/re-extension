// Ctrl + r で特定の拡張機能を無効化->有効化する
document.addEventListener('keydown', function (event) {
  if (event.keyCode == 82 && event.ctrlKey) {
    chrome.extension.sendRequest({}, function (response) {
      location.reload(true);
    });
  }
});
