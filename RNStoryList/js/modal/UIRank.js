import {BaseUIModal} from '../modal/BaseUIModal'

export class UIRank extends BaseUIModal{
    constructor(rank, teamName){
        super(rank, teamName, null);

        this.rank = rank;
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

    rGoalDiff(goalDiff){
        this.goalDiff = goalDiff;

        return this;
    }

    rScores(scores){
        this.scores = scores;

        return this;
    }
}