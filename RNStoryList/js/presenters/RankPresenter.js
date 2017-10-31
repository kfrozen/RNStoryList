import {UIRank} from '../modal/UIRank'
import {NetworkHelper} from '../helpers/NetworkHelper'
import {BaseUIConverter} from '../converters/BaseUIConverter'
import {BasePresenter} from './BasePresenter'

export class RankPresenter{

    constructor(callback){
        this.callback = callback;

        this.converter = new BaseUIConverter(function(item){
            let rank = (new UIRank(item._id, item.team)).rGames(item.total).rWon(item.won)
                        .rTied(item.tied).rLost(item.lost)
                        .rGoalvsFumble(item.goal + '/' + item.fumble).rScores(item.scores);

            return rank;
        });

        this.callbackWrapper = function(err, res){
            if (err) {
                console.log(err);

                this.callback(err, []);
            }
            else{
                let section = [
                    {
                        key: (new UIRank("排名", "球队名")).rType(UIRank.sRANK_TYPE_HEADER)
                        .rGames("场次").rWon("胜场").rTied("平场").rLost("负场")
                        .rGoalvsFumble("进球/失球").rScores("积分"),

                        data: res
                    }
                ];

                this.callback(null, section);
            }
        }
    }

    loadRanks(){
        BasePresenter.loadData(NetworkHelper.getDefault().getRanksUrl(), this.converter, this.callbackWrapper.bind(this));
    }
}