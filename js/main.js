(function () {
  const SCREENS = {
    'welcome': 5
  };

  const templates = Array.from(document.querySelector(`#templates`).content.children);
  let appCurrentContent = document.querySelector(`section.main`);
  let currentScreen = SCREENS.welcome;

  const changeContentWindow = (item) => {
    appCurrentContent.parentNode.replaceChild(item, appCurrentContent);
    appCurrentContent = item;
  };

  const showNextWindow = () => {
    if (currentScreen + 1 < templates.length) {
      changeContentWindow(templates[++currentScreen]);
    }
  };

  const showPrevWindow = () => {
    if (currentScreen - 1 >= 0) {
      changeContentWindow(templates[--currentScreen]);
    }
  };

  const appContentSwitcherHandler = (evt) => {
    if (evt.altKey) {
      switch (evt.keyCode) {
        case 39: showNextWindow(); break;
        case 37: showPrevWindow(); break;
      }
    }
  };

  document.addEventListener(`keydown`, appContentSwitcherHandler);

  changeContentWindow(templates[currentScreen]);
})();
