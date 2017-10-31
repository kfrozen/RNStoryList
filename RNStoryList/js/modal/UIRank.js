import {BaseUIModal} from '../modal/BaseUIModal'

export class UIRank extends BaseUIModal{
    static sRANK_TYPE_HEADER = 'header';
    static sRANK_TYPE_NORMAL = "normal";

    constructor(rank, teamName){
        super(rank, teamName, null);

        this.type = UIRank.sRANK_TYPE_NORMAL;

        this.rank = rank;

        super.setIndex(rank);
    }

    rType(type){
        this.type = type;

        return this;
    }

    rGames(games){
        this.games = games;

        return this;
    }

    rWon(won){
        this.won = won;

        return this;
    }

    rTied(tied){
        this.tied = tied;

        return this;
    }

    rLost(lost){
        this.lost = lost;
        
        return this;
    }

    rGoalvsFumble(goal_fumble){
        this.goal_fumble = goal_fumble;

        return this;
    }

    rGoalDiff(goalDiff){
        this.goalDiff = goalDiff;

        return this;
    }

    rScores(scores){
        this.scores = scores;

        return this;
    }
}