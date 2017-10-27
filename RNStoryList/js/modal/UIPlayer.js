import {BaseUIModal} from '../modal/BaseUIModal'

export class UIPlayer extends BaseUIModal{
  constructor(id, name, jersey, position, info, link, sectionId){
    super(id, name, null);

    this.jersey = jersey;
    this.position = position;
    this.info = info;
    this.link = link;
    this.sectionId = sectionId;
  }
}