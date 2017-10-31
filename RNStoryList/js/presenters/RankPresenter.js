import {UIRank} from '../modal/UIRank'
import {NetworkHelper} from '../helpers/NetworkHelper'
import {BaseUIConverter} from '../converters/BaseUIConverter'
import {BasePresenter} from './BasePresenter'

export class RankPresenter{
    constructor(callback){
        this.callback = callback;

        this.converter = new BaseUIConverter(function(item){
            let rank = (new UIRank(item._id, item.team)).rGames(item.total).rWon(item.won)
                        .rTied(item.tied).rLost(item.lost).rGoalDiff(item.goalDiff).rScores(item.scores);

            return rank;
        });
    }

    loadRanks(){
        BasePresenter.loadData(NetworkHelper.getDefault().getRanksUrl(), this.converter, this.callback);
    }
}