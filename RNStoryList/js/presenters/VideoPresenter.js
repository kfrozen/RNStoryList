import {UIVideo} from '../modal/UIVideo'
import {NetworkHelper} from '../helpers/NetworkHelper'

export class VideoPresenter{

  constructor(callback){
    this.callback = callback;
  }

  loadVideos(){
    
    fetch(NetworkHelper.getDefault().getVideoListUrl(), {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.callback(null, UIVideo.converter(responseJson));
    })
    .catch((error) => {
      this.callback(error, []);
    })
  }
}