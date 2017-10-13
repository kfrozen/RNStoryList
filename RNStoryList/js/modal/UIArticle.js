import {BaseUIModal} from '../modal/BaseUIModal'

export class UIArticle extends BaseUIModal{
  constructor(id, title, image, selected, desc){
    super(id, title, desc);

    this.image = image;
    this.selected = selected;
  }

}