import {UIArticle} from '../modal/UIArticle'
import {NetworkHelper} from '../helpers/NetworkHelper'
import {UIArticleConverter} from '../converters/UIArticleConverter'

export class ArticlePresenter{

  constructor(callback){
    this.callback = callback;
    this.converter = new UIArticleConverter((item) => {
      return new UIArticle(item.id, item.title, item.image, item.selected, item.desc); 
    });
  }

  loadArticles(){
    
    fetch(NetworkHelper.getDefault().getArticleListUrl(), {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.callback(null, this.converter.convert(responseJson));
    })
    .catch((error) => {
      this.callback(error, []);
    })
  }
}