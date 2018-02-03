import template from './template';
import {
  EVT_NEWS_ARTICLE
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

    this.emitter.bind(EVT_NEWS_ARTICLE, this.receiveNews);
  }

  receiveNews(articleId) {
    console.log('news article to release', articleId, articleList[articleId]);
  }

};

export default NewsTab;
