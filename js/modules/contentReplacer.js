let appCurrentContent = document.querySelector(`section.main`);

const contentReplacer = (newContent) => {
  appCurrentContent.parentNode.replaceChild(newContent, appCurrentContent);
  appCurrentContent = newContent;
};

export default contentReplacer;
