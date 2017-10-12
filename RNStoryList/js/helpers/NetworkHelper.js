export class NetworkHelper{
    constructor(){
        this.serverHost = "http://172.16.3.245:3000"; //This is a test host, replace it when needed.
    }

    static getDefault(){
        return new NetworkHelper();
    }

    getImageUrl(imagePath){
        return this.serverHost + imagePath;
    }

    getVideoListUrl(){
        return this.serverHost + "/videos";
    }
}