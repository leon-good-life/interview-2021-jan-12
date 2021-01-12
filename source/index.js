import { getSuggestions } from "./api";
// import theme from "./themes/textBeside";
import theme from "./themes/textInside";

const applyStyles = (element, styles) => {
  Object.entries(styles).forEach(([key, value]) => {
    element.style[key] = value;
  });
};

const createThumbnailImg = (suggestion) => {
  const thumbnailImgContainer = document.createElement("span");
  applyStyles(thumbnailImgContainer, theme.thumbnail.imgContainer);
  suggestion.thumbnail.forEach((thumbnailObj) => {
    const thumbnailImg = document.createElement("img");
    thumbnailImg.src = thumbnailObj.url;
    thumbnailImg.alt = suggestion.name;
    applyStyles(thumbnailImg, theme.thumbnail.img);
    thumbnailImgContainer.appendChild(thumbnailImg);
  });
  return thumbnailImgContainer;
};

const createThumbnailCaption = (suggestion) => {
  const thumbnailCaption = document.createElement("h3");
  thumbnailCaption.innerText = suggestion.name;
  applyStyles(thumbnailCaption, theme.thumbnail.caption);
  return thumbnailCaption;
};

const createThumbnail = (suggestion) => {
  const thumbnailCaption = createThumbnailCaption(suggestion);
  const thumbnailImg = createThumbnailImg(suggestion);

  // create thumbnail anchor
  const thumbnailAnchor = document.createElement("a");
  if (thumbnailImg) {
    thumbnailAnchor.appendChild(thumbnailImg);
  }
  thumbnailAnchor.appendChild(thumbnailCaption);
  thumbnailAnchor.href = suggestion.url;
  thumbnailAnchor.rel = "nofollow";
  applyStyles(thumbnailAnchor, theme.thumbnail.anchor);
  return thumbnailAnchor;
};

const responseToHtml = (suggestionsArr) => {
  const suggestionsContainer = document.getElementById("suggested-by-taboola");
  applyStyles(suggestionsContainer, theme.suggestionsContainer);
  suggestionsArr.map(createThumbnail).forEach((img) => {
    suggestionsContainer.appendChild(img);
  });
};

getSuggestions()
  .then(responseToHtml)
  .catch((error) => console.error(error));
