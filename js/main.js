(function () {
  // порядок перекдючения страниц идет по порядку элементов в массиве
  const SCREENS = [
    {'name': `welcome`, 'template': 5},
    {'name': `level-artist`, 'template': 4},
    {'name': `level-genre`, 'template': 0},
    {'name': `result-success`, 'template': 3},
    {'name': `result-false`, 'template': 2}
  ];

  const templates = Array.from(document.querySelector(`#templates`).content.children);
  let appCurrentContent = document.querySelector(`section.main`);
  let currentScreen = 0;

  const changeContentWindow = (newContent) => {
    appCurrentContent.parentNode.replaceChild(newContent, appCurrentContent);
    appCurrentContent = newContent;
  };

  const appContentSwitcher = (screenIndex) => {
    changeContentWindow(templates[SCREENS[screenIndex].template]);
  };

  const changeAppWindow = (next = true) => {
    if (next) {
      if (currentScreen + 1 < SCREENS.length) {
        appContentSwitcher(++currentScreen);
      }
    } else if (currentScreen - 1 >= 0) {
      appContentSwitcher(--currentScreen);
    }
  };

  const appContentSwitcherHandler = (evt) => {
    if (evt.altKey) {
      switch (evt.keyCode) {
        case 39: changeAppWindow(); break;
        case 37: changeAppWindow(false); break;
      }
    }
  };

  document.addEventListener(`keydown`, appContentSwitcherHandler);

  appContentSwitcher(currentScreen);
})();