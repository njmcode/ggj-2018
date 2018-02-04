import template from './template';
import {
  EVT_NEWS_ARTICLE,
  EVT_TAB_NOTIFY
} from 'data/events';
import articleList from 'data/news';
import styles from './news.css';

/**
 * Class representing a tab for News Articles in the app.
 * 
 * Responsible for rendering news articles in its tab DOM,
 * and responding to events fired by the game application.
 * 
 * Uses a shared Emitter instance passed into its init()
 */
class NewsTab {
  constructor() {
    this.template = template;
  }

  init(moduleId, el, emitter) {
    this.id = moduleId;
    this.emitter = emitter;
    this.el = el;
    this.articlePanel = el.querySelector(`.${styles.articleList}`);

    this.emitter.bind(EVT_NEWS_ARTICLE, this.receiveNews, this);
  }

  receiveNews(articleId) {
    if ( !articleList.hasOwnProperty(articleId) ) {
      return;
    }
    const article = articleList[articleId];

    const articleNode = document.createElement('article');
    articleNode.innerHTML = `
      <h1>${article.title}<span class="${styles.newMarker}"></span></h1>
      ${article.sections.map((section) => {
        return `<p>${section.content}</p>`;
      }).join('')}
    `;
    this.articlePanel.insertBefore(articleNode, this.articlePanel.firstChild);
    this.emitter.dispatch(EVT_TAB_NOTIFY, 'News');
  }

};

export default NewsTab;
