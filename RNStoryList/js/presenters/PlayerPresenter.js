import { UIPlayer } from '../modal/UIPlayer'
import { NetworkHelper } from '../helpers/NetworkHelper'
import { BaseUIConverter } from '../converters/BaseUIConverter'
import { BasePresenter } from './BasePresenter'

export class PlayerPresenter {

    constructor(callback) {
        this.callback = callback;
        this.converter = new BaseUIConverter((item) => {
            let info = item.age + "岁  |  " 
                        + item.height + "  |  " 
                        + item.weight + "  |  " 
                        + item.nationality;

            return new UIPlayer(item._id, item.name, item.jersey, item.position, info, item.link, item.image, item._section);
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

                let gkIndex = 1;
                let dfIndex = 1;
                let midIndex = 1;
                let fwIndex = 1;

                for (let i = 0; i < response.length; i++) {
                    let player = response[i];

                    if (player.sectionId == 1) {
                        player.setIndex(gkIndex);

                        gkIndex++;

                        goalkeepers.push(player);
                    }
                    else if (player.sectionId == 2) {
                        player.setIndex(dfIndex);
                        
                        dfIndex++;

                        defenders.push(player);
                    }
                    else if (player.sectionId == 3) {
                        player.setIndex(midIndex);

                        midIndex++;

                        midfielders.push(player);
                    }
                    else if (player.sectionId == 4) {
                        player.setIndex(fwIndex);

                        fwIndex++;

                        forwards.push(player);
                    }
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