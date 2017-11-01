import React, { Component } from 'react';
import {
  StyleSheet,
  SectionList,
  Text,
  View,
  Image,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import {RankPresenter} from '../presenters/RankPresenter';
import RankListItem from '../widget/RankListItem';
import RankListHeaderItem from '../widget/RankListHeaderItem';
import CommonLoadingIndicator from '../widget/CommonLoadingIndicator';
import CommonErrorView from '../widget/CommonErrorView';
import NavigationHelper from '../helpers/NavigationHelper';

export default class RankListComp extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            dataSource: []
        }
    }

    static navigationOptions = {
        title: '积分榜',
        headerStyle: {backgroundColor: 'black'},
        headerTitleStyle: {color: 'yellow'},
        headerLeft: null,
        tabBarIcon: ({focused, tintColor}) => (
          <Image
              source={require('../img/bottombar_icon_standings.png')}
              style={{width: 24, height: 24, tintColor: tintColor}}/>
        )
    };

    _onDataLoaded = (error, response) => {
        this.setState({isLoading: false, dataSource: response});
    }

    _onItemClicked = (item) => {
        //TODO navigate to team detail page
    }

    _renderHeaderItem = ({section}) => {
        return (
            <RankListHeaderItem bean={section.key}/>
        )
    }

    _renderItem = ({item}) => {
        return <RankListItem bean = {item} onItemClicked = {this._onItemClicked}/>
    }

    componentDidMount() {
        let rankPresenter = new RankPresenter(this._onDataLoaded);
    
        rankPresenter.loadRanks();
    }

    render() {
        let isShowLoading = this.state.isLoading;
        let sections = this.state.dataSource;

        if(isShowLoading){
            return (
              <CommonLoadingIndicator/>
            );
        }
        else if(sections.length == 0){
            return (
              <CommonErrorView errorMessage={'Oops! The rank is missing... Please come back later ^_^'}/>
            );
        }
        else{
            return (
              <ImageBackground source={require('../img/common_background.jpeg')} style={styles.container}>
                <SectionList
                    stickySectionHeadersEnabled = {true}
                    renderSectionHeader={this._renderHeaderItem}
                    renderItem={this._renderItem}
                    sections={sections}/>
              </ImageBackground>
          );
        }
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

