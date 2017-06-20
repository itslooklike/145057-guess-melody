// let appCurrentContent = document.querySelector(`section.main`);

const changeView = (newContent) => {
  let appCurrentContent = document.querySelector(`section.main`);
  const element = newContent.element;
  appCurrentContent.parentNode.replaceChild(element, appCurrentContent);
  // appCurrentContent = element;
};

export default changeView;
