export class NetworkHelper{
    constructor(){
        this.serverHost = "http://192.168.31.249:3000"; //This is a test host, replace it when needed.
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