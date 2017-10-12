import {BaseUIModal} from '../modal/BaseUIModal'

export class UIArticle extends BaseUIModal{
  constructor(id, title, image, selected){
    super(id, title);

    this.image = image;
    this.selected = selected;
  }

}