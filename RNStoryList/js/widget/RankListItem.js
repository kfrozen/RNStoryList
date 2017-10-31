import React, {PureComponent} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {UIRank} from '../modal/UIRank';

export default class RankListItem extends PureComponent{
    constructor(props){
        super(props);

        this.rank = props.bean;
    }

    _onPress = () => {this.props.onItemClicked(this.rank)};

    render(){
        let containerStyle = (this.rank.type == UIRank.sRANK_TYPE_HEADER) ? [styles.container_base, styles.container_header]
                            : ((this.rank.index & 1) != 0 ? [styles.container_base] 
                            : [styles.container_base, styles.container_strip_bg]);

        let headerNormalCellStyle = [styles.text_base, styles.text_header, styles.flex_normal];
        let headerTeamNameCellStyle = [styles.text_team_name, styles.text_header, styles.flex_team_name];
        let headerGoalFumbleCellStyle = [styles.text_base, styles.text_header, styles.flex_goal_fumble];

        let teamNameCellStyle = [styles.text_team_name, styles.text_normal, styles.flex_team_name];
        let goalFumbleCellStyle = [styles.text_base, styles.text_normal, styles.flex_goal_fumble];
        let normalCellStyle = [styles.text_base, styles.text_normal, styles.flex_normal];
        let rankCellRedStyle = [styles.text_rank_base, styles.text_rank_red, styles.flex_normal];
        let rankCellBlueStyle = [styles.text_rank_base, styles.text_rank_blue, styles.flex_normal];
        let rankCellYellowStyle = [styles.text_rank_base, styles.text_rank_yellow, styles.flex_normal];
        let rankCellWhiteStyle = [styles.text_rank_base, styles.text_rank_white, styles.flex_normal];
        let rankCellGreenStyle = [styles.text_rank_base, styles.text_rank_green, styles.flex_normal];

        let rankCellStyle = rankCellWhiteStyle;
        if(this.rank.index >= 1 && this.rank.index <= 3){
            rankCellStyle = rankCellRedStyle;
        }
        else if(this.rank.index == 4){
            rankCellStyle = rankCellBlueStyle;
        }
        else if(this.rank.index == 5 || this.rank.index == 6){
            rankCellStyle = rankCellYellowStyle;
        }
        else if(this.rank.index >= 16 && this.rank.index <= 18){
            rankCellStyle = rankCellGreenStyle;
        }

        return (
            <TouchableOpacity style={containerStyle} activeOpacity={0.8} onPress={this._onPress}>
                <Text style={(this.rank.type == UIRank.sRANK_TYPE_HEADER) ? headerNormalCellStyle : rankCellStyle}>
                    {this.rank.rank}
                </Text>
                <Text style={(this.rank.type == UIRank.sRANK_TYPE_HEADER) ? headerTeamNameCellStyle : teamNameCellStyle}>
                    {this.rank.name}
                </Text>
                <Text style={(this.rank.type == UIRank.sRANK_TYPE_HEADER) ? headerNormalCellStyle : normalCellStyle}>
                    {this.rank.games}
                </Text>
                <Text style={(this.rank.type == UIRank.sRANK_TYPE_HEADER) ? headerNormalCellStyle : normalCellStyle}>
                    {this.rank.won}
                </Text>
                <Text style={(this.rank.type == UIRank.sRANK_TYPE_HEADER) ? headerNormalCellStyle : normalCellStyle}>
                    {this.rank.tied}
                </Text>
                <Text style={(this.rank.type == UIRank.sRANK_TYPE_HEADER) ? headerNormalCellStyle : normalCellStyle}>
                    {this.rank.lost}
                </Text>
                <Text style={(this.rank.type == UIRank.sRANK_TYPE_HEADER) ? headerGoalFumbleCellStyle : goalFumbleCellStyle}>
                    {this.rank.goal_fumble}
                </Text>
                <Text style={(this.rank.type == UIRank.sRANK_TYPE_HEADER) ? headerNormalCellStyle : normalCellStyle}>
                    {this.rank.scores}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container_base: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container_strip_bg:{
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    container_header:{
        backgroundColor: 'yellow'
    },
    text_base: {
        textAlign: 'center',
        fontSize: 13,
    },
    text_header: {
        fontWeight: 'bold',
        color: 'black'
    },
    text_normal: {
        color: 'white'
    },
    text_team_name: {
        textAlign: 'left',
        fontSize: 13,
    },
    text_rank_base: {
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 5,
        fontSize: 13
    },
    text_rank_red: {
        color: 'red',
    },
    text_rank_blue: {
        color: 'deepskyblue',
        fontWeight: 'bold'
    },
    text_rank_yellow: {
        color: 'yellow',
        fontWeight: 'bold'
    },
    text_rank_white: {
        color: 'white',
        fontWeight: 'bold'
    },
    text_rank_green: {
        color: 'green',
        fontWeight: 'bold'
    },
    flex_team_name: {
        flex: 3
    },
    flex_goal_fumble: {
        flex: 2
    },
    flex_normal: {
        flex: 1
    }
});
