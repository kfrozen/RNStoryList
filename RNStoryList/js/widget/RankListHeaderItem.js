import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class RankListHeaderItem extends Component{
    constructor(props){
        super(props);

        this.rank = props.bean;
    }

    render(){
        let headerNormalCellStyle = [styles.text_base, styles.flex_normal];
        let headerRankCellStyle = [styles.text_base, styles.text_rank, styles.flex_normal];
        let headerTeamNameCellStyle = [styles.text_base, styles.text_team_name, styles.flex_team_name];
        let headerGoalFumbleCellStyle = [styles.text_base, styles.flex_goal_fumble];

        return (
            <View style={styles.container}>
                <Text style={headerRankCellStyle}>
                    {this.rank.rank}
                </Text>
                <Text style={headerTeamNameCellStyle}>
                    {this.rank.name}
                </Text>
                <Text style={headerNormalCellStyle}>
                    {this.rank.games}
                </Text>
                <Text style={headerNormalCellStyle}>
                    {this.rank.won}
                </Text>
                <Text style={headerNormalCellStyle}>
                    {this.rank.tied}
                </Text>
                <Text style={headerNormalCellStyle}>
                    {this.rank.lost}
                </Text>
                <Text style={headerGoalFumbleCellStyle}>
                    {this.rank.goal_fumble}
                </Text>
                <Text style={headerNormalCellStyle}>
                    {this.rank.scores}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    text_base: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: 'black'
    },
    text_team_name: {
        textAlign: 'left',
        paddingLeft: 5
    },
    text_rank: {
        textAlign: 'left',
        paddingLeft: 5
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
