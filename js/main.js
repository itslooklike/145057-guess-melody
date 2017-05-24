(function () {
  const templates = Array.from(document.querySelector(`#templates`).content.children);
  let appCurrentContent = document.querySelector(`section.main`);
  let currentScreen = 5;

  const showContentWindow = (item) => {
    appCurrentContent.parentNode.replaceChild(item, appCurrentContent);
    appCurrentContent = item;
  };

  showContentWindow(templates[currentScreen]);

  const appContentSwitcherHandler = (evt) => {
    if (evt.altKey) {
      switch (evt.keyCode) {
        case 39: showContentWindow(templates[++currentScreen]); break;
        case 37: showContentWindow(templates[--currentScreen]); break;
      }
    }
  };

  document.addEventListener(`keydown`, appContentSwitcherHandler);
})();
