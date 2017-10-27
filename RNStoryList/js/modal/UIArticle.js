import {BaseUIModal} from '../modal/BaseUIModal'

export class UIArticle extends BaseUIModal{
  constructor(id, name, image, releaseDate, desc){
    super(id, name, desc);

    this.image = image;

    this.releaseDate = releaseDate;
  }

}