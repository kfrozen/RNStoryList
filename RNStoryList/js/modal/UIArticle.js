import {BaseUIModal} from '../modal/BaseUIModal'

export class UIArticle extends BaseUIModal{

  aReleaseDate(date){
    this.releaseDate = date;

    return this;
  }

  aImage(image){
    this.image = image;

    return this;
  }

}