import {UIArticle} from '../modal/UIArticle'
import {NetworkHelper} from '../helpers/NetworkHelper'
import {BaseUIConverter} from '../converters/BaseUIConverter'
import {BasePresenter} from './BasePresenter'

export class ArticlePresenter{

  constructor(callback){
    this.callback = callback;
    this.converter = new BaseUIConverter((item) => {
      let article = (new UIArticle(item._id, item.title, item.content)).aImage(item.image).aReleaseDate(item.releaseDate);

      return article; 
    });
  }

  loadArticles(){
    BasePresenter.loadData(NetworkHelper.getDefault().getArticleListUrl(), this.converter, this.callback);
  }
}