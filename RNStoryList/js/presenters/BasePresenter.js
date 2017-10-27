import {BaseUIConverter} from '../converters/BaseUIConverter'

export class BasePresenter{
    static loadData(url, converter, callback){
        if(converter && !(converter instanceof BaseUIConverter)){
            callback(new Error("The converter has to be instance of BaseUIConverter if there was one."), []);

            return;
        }

        fetch(url, {
            method: 'GET',
          })
          .then((response) => response.json())
          .then((responseJson) => {
              if(converter){
                  callback(null, converter.convert(responseJson));
              }
              else{
                  callback(null, responseJson);
              }
          })
          .catch((error) => {
              callback(error, []);
          })
    }
}