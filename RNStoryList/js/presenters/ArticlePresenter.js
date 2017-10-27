import {UIArticle} from '../modal/UIArticle'
import {NetworkHelper} from '../helpers/NetworkHelper'
import {BaseUIConverter} from '../converters/BaseUIConverter'
import {BasePresenter} from './BasePresenter'

export class ArticlePresenter{

  constructor(callback){
    this.callback = callback;
    this.converter = new BaseUIConverter((item) => {
      return new UIArticle(item._id, item.title, item.image, item.releaseDate, item.content); 
    });
  }

  loadArticles(){
    BasePresenter.loadData(NetworkHelper.getDefault().getArticleListUrl(), this.converter, this.callback);
  }
}