export class UIArticleConverter{
    constructor(doConvert){
        this.doConvert = doConvert;
    };

    convert(source){
      if(source === null || source.lenght == 0)
      {
        return [];
      }
  
      let result = new Array();
  
      for(var index = 0; index < source.length; index++) {
        var item = source[index];
        result[index] = this.doConvert(item);
      }
  
      return result;
    }
}