import { UIPlayer } from '../modal/UIPlayer'
import { NetworkHelper } from '../helpers/NetworkHelper'
import { BaseUIConverter } from '../converters/BaseUIConverter'
import { BasePresenter } from './BasePresenter'

export class PlayerPresenter {

    constructor(callback) {
        this.callback = callback;
        this.converter = new BaseUIConverter((item) => {
            let info = item.age + "岁  |  " + item.nationality;

            return new UIPlayer(item._id, item.name, item.jersey, item.position, info, item.link, item._section);
        });
        this.callbackWrapper = (err, response) => {
            if (err) {
                this.callback(err, []);
            }
            else {
                var goalkeepers = [];
                var defenders = [];
                var midfielders = [];
                var forwards = [];

                for (let i = 0; i < response.length; i++) {
                    let player = response[i];

                    if (player.sectionId == 1) {
                        goalkeepers.push(player);
                    }
                    else if (player.sectionId == 2) {
                        defenders.push(player);
                    }
                    else if (player.sectionId == 3) {
                        midfielders.push(player);
                    }
                    else if (player.sectionId == 4) {
                        forwards.push(player);
                    }
                }

                for(let index in goalkeepers){
                    goalkeepers[index].setIndex(parseInt(index) + 1);
                }

                for(let index in defenders){
                    defenders[index].setIndex(parseInt(index) + 1);
                }

                for(let index in midfielders){
                    midfielders[index].setIndex(parseInt(index) + 1);
                }

                for(let index in forwards){
                    forwards[index].setIndex(parseInt(index) + 1);
                }

                var section = [
                    {
                        key: "门将",
                        data: goalkeepers
                    },
                    {
                        key: "后卫",
                        data: defenders
                    },
                    {
                        key: "中场",
                        data: midfielders
                    },
                    {
                        key: "前锋",
                        data: forwards
                    }
                ];

                this.callback(null, section);
            }
        }
    }

    loadPlayers() {
        BasePresenter.loadData(NetworkHelper.getDefault().getPlayerListUrl(), this.converter, this.callbackWrapper);
    }
}