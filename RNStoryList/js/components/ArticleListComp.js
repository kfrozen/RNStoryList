
import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  Image,
  ToastAndroid,
  ActivityIndicator,
  ImageBackground,
  View
} from 'react-native';
import BaseFlatList from '../widget/BaseFlatList';
import {ArticlePresenter} from '../presenters/ArticlePresenter';
import NavigationHelper from '../helpers/NavigationHelper';
import CommonLoadingIndicator from '../widget/CommonLoadingIndicator';
import CommonErrorView from '../widget/CommonErrorView';

export default class ArticleListComp extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  static navigationOptions = {
    title: '新闻',
    headerStyle: {backgroundColor: 'black'},
    headerTitleStyle: {color: 'yellow'},
    headerLeft: null,
    tabBarIcon: ({focused, tintColor}) => (
      <Image
          source={require('../img/bottombar_icon_articles.png')}
          style={{width: 24, height: 24, tintColor: tintColor}}/>
    )
  };

  _onDataLoaded = (error, response) => {
    this.setState({isLoading: false, dataSource: response});
  }

  _onItemClicked = (item) => {
    NavigationHelper.stackNavigation.navigate('ArticleDetail', {article: item});
  }

  componentDidMount() {
    let articlePresenter = new ArticlePresenter(this._onDataLoaded);

    articlePresenter.loadArticles();
  }

  render() {
    let isShowLoading = this.state.isLoading;
    let dataSource = this.state.dataSource;

    if(isShowLoading){
      return (
        <CommonLoadingIndicator/>
      );
    }
    else if(dataSource.length == 0){
      return (
        <CommonErrorView errorMessage='Oops! No video is available now...'/>
      );
    }
    else{
      return (
        <ImageBackground source={require('../img/common_background.jpeg')} style={styles.container}>
          <BaseFlatList
            data={dataSource}
            onItemClicked={this._onItemClicked}
          />
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