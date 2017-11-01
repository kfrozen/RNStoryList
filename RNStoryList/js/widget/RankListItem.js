import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class RankListItem extends Component{
    constructor(props){
        super(props);

        this.rank = props.bean;
    }

    _onPress = () => {this.props.onItemClicked(this.rank)};

    render(){
        let containerStyle = ((this.rank.index & 1) != 0 ? [styles.container_base] : [styles.container_base, styles.container_strip_bg]);

        let teamNameCellStyle = [styles.container_base, styles.flex_team_name];
        let teamNameTextStyle = [styles.text_base, styles.text_team_name];
        let goalFumbleCellStyle = [styles.text_base, styles.flex_goal_fumble];
        let normalCellStyle = [styles.text_base, styles.flex_normal];
        let rankCellRedStyle = [styles.text_base, styles.text_rank_base, styles.text_rank_red, styles.flex_normal];
        let rankCellBlueStyle = [styles.text_base, styles.text_rank_base, styles.text_rank_blue, styles.flex_normal];
        let rankCellYellowStyle = [styles.text_base, styles.text_rank_base, styles.text_rank_yellow, styles.flex_normal];
        let rankCellWhiteStyle = [styles.text_base, styles.text_rank_base, styles.text_rank_white, styles.flex_normal];
        let rankCellGreenStyle = [styles.text_base, styles.text_rank_base, styles.text_rank_green, styles.flex_normal];

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
            <View style={containerStyle}>
                <Text style={rankCellStyle}>
                    {this.rank.rank}
                </Text>
                <TouchableOpacity style={teamNameCellStyle} activeOpacity={0.8} onPress={this._onPress}>
                    <Image style={styles.team_logo} source={{uri: this.rank.logo}}/>
                    <Text style={teamNameTextStyle}>{this.rank.name}</Text>
                </TouchableOpacity>
                <Text style={normalCellStyle}>
                    {this.rank.games}
                </Text>
                <Text style={normalCellStyle}>
                    {this.rank.won}
                </Text>
                <Text style={normalCellStyle}>
                    {this.rank.tied}
                </Text>
                <Text style={normalCellStyle}>
                    {this.rank.lost}
                </Text>
                <Text style={goalFumbleCellStyle}>
                    {this.rank.goal_fumble}
                </Text>
                <Text style={normalCellStyle}>
                    {this.rank.scores}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container_base: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    container_strip_bg:{
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    team_logo: {
        width: 32,
        height: 32
    },
    text_base: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white'
    },
    text_team_name: {
        textAlign: 'left',
        color: 'yellow',
        paddingLeft: 5
    },
    text_rank_base: {
        fontWeight: 'bold',
        textAlign: 'left',
        paddingLeft: 10
    },
    text_rank_red: {
        color: 'red',
    },
    text_rank_blue: {
        color: 'deepskyblue'
    },
    text_rank_yellow: {
        color: 'yellow'
    },
    text_rank_white: {
        color: 'white'
    },
    text_rank_green: {
        color: 'green'
    },
    flex_team_name: {
        justifyContent: 'flex-start',
        flex: 3
    },
    flex_goal_fumble: {
        flex: 2
    },
    flex_normal: {
        flex: 1
    }
});
