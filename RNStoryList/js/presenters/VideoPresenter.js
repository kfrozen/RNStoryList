

export class VideoPresenter{

  constructor(callback){
    this.callback = callback;
    this.urlHost = "http://172.16.3.245:3333"; //This is a test host, replace it when needed.
  }

  loadVideos(){
    let url = this.urlHost + '/videos';

    fetch(url, {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.callback(null, responseJson);
    })
    .catch((error) => {
      this.callback(error, []);
    })
  }
}