const API_KEY = "f9040ab1b9c802857aa783c469d0e0ff7e7366e4";
const API_APP_TYPE = "desktop";
const API_COUNT = 10;
const API_SOURCE_ID = "214321562187";
const API_SOURCE_URL = "http://www.site.com/videos/214321562187.html";
const API_SOURCE_TYPE = "video";
const API_URL = `http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=${API_APP_TYPE}&app.apikey=${API_KEY}&count=${API_COUNT}&source.type=${API_SOURCE_TYPE}&source.id=${API_SOURCE_ID}&source.url=${API_SOURCE_URL}`;

const getSuggestions = () =>
  new Promise((resolve, reject) => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((responseObject) => responseObject.list)
      .then((suggestionsArr) => resolve(suggestionsArr))
      .catch((error) => reject(error));
  });

export { getSuggestions };
