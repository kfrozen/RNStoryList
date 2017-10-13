export class NetworkHelper{
    constructor(){
        //this.serverHost = "http://192.168.31.249:3000"; //This is a test host, replace it when needed.
        this.serverHost = "http://172.16.3.245:3000";
    }

    static getDefault(){
        return new NetworkHelper();
    }

    getImageUrl(imagePath){
        return this.serverHost + imagePath;
    }

    getArticleListUrl(){
        return this.serverHost + "/articles";
    }
}