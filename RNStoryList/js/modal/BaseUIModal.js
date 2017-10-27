export class BaseUIModal{
    constructor(id, name, desc){
      this.id = id;
      this.name = name;
      this.desc = desc;
      this.key = this.id;
    }
    
    setIndex(index){
      this.index = index;
    }
}