export class UIVideo{
  constructor(id, title, image, selected)
  {
    this.id = id;
    this.title = title;
    this.image = image;
    this.selected = selected;
  }

  static converter(source)
  {
    if(source === null || source.lenght == 0)
    {
      return [];
    }

    let result = new Array();

    for(var index = 0; index < source.length; index++) {
      var video = source[index];
      result[index] = new UIVideo(video.id, video.title, video.image, video.selected);
    }

    return result;
  }
}