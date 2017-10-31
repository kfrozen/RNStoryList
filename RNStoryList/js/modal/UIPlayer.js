import {BaseUIModal} from '../modal/BaseUIModal'

export class UIPlayer extends BaseUIModal{
  constructor(id, name){
    super(id, name, null);
  }

  pJersey(jersey){
    this.jersey = jersey;

    return this;
  }

  pPosition(position){
    this.position = position;

    return this;
  }

  pInfo(info){
    this.info = info;

    return this;
  }

  pLink(link){
    this.link = link;

    return this;
  }

  pImage(image){
    this.image = image;

    return this;
  }

  pSectionId(sectionId){
    this.sectionId = sectionId;

    return this;
  }

}