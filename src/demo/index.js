import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text,ScrollView, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import FiltButton from '../../components/filtButton';
export default class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
      Filter :"election"
    };
  }
  
  
  
  async getMovies() {
    try {
    const {Filter}=this.state;
      const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${Filter}&api-key=G5FmAKLTr7Xqj07H5qf9GVqhbrL0WNeO&`);
      const json = await response.json();
      this.setState({ data: json.response.docs });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getMovies();
  }
  _onPressButton() {
    (async () => {
      await this.getMovies();
  })();
   
  }
  render() {
    const { data, isLoading,Filter } = this.state;
    let mult={};
    return (
    <View style={{ flex: 1, padding: 24 }}>
      <View style={{flexDirection:'row',paddingRight:10}}>
      <ScrollView horizontal={true} >
      <FiltButton txtdetail={'Election'} ButtonStyle={{paddingRight:10}} txtstyle={{color:'#F5F5F5',fontSize:20, fontFamily:'sans-serif'}} />
      <FiltButton txtdetail={'Sports'} ButtonStyle={{paddingRight:10}} txtstyle={{color:'#F5F5F5',fontSize:20, fontFamily:'sans-serif'}} />
      <FiltButton txtdetail={'Covid'} ButtonStyle={{paddingRight:10}} txtstyle={{color:'#F5F5F5',fontSize:20, fontFamily:'sans-serif'}} />
      <FiltButton txtdetail={'Finance'} ButtonStyle={{paddingRight:10}} txtstyle={{color:'#F5F5F5',fontSize:20, fontFamily:'sans-serif'}} />
      <FiltButton txtdetail={'Movie'} ButtonStyle={{paddingRight:10}} txtstyle={{color:'#F5F5F5',fontSize:20, fontFamily:'sans-serif'}} />
      <FiltButton txtdetail={'Astrology'} ButtonStyle={{paddingRight:10}} txtstyle={{color:'#F5F5F5',fontSize:20, fontFamily:'sans-serif'}} />
      <FiltButton txtdetail={'Crime'} ButtonStyle={{paddingRight:10}} txtstyle={{color:'#F5F5F5',fontSize:20, fontFamily:'sans-serif'}} />
      <FiltButton txtdetail={'Social Media'} ButtonStyle={{paddingRight:10}} txtstyle={{color:'#F5F5F5',fontSize:20, fontFamily:'sans-serif'}} />
      <FiltButton txtdetail={'War'} ButtonStyle={{paddingRight:10}} txtstyle={{color:'#F5F5F5',fontSize:20, fontFamily:'sans-serif'}} />
      <FiltButton txtdetail={'Agriculture'} ButtonStyle={{paddingRight:10}} txtstyle={{color:'#F5F5F5',fontSize:20, fontFamily:'sans-serif'}} />
      </ScrollView>
      </View>
      <View >
      <ScrollView >
      <Text>Abc</Text>
        {isLoading ? <ActivityIndicator/> : (
          data.map(nw => {
            return (
            
              <View key={ Math.random().toString(36).substr(2, 9) } >
                <TouchableOpacity
                 onPress={this._onPressButton}
                >
                  <View style={{flexDirection:'row',flex:1}}>
                  <View style={{flex:0.35,paddingTop:5,paddingBottom:5}}>
                  <Image style={{width:100,height:100, borderRadius:10}}source={{uri:`http://static01.nyt.com/${nw.multimedia[0].url}`}}/>
                  </View>
                  <View style={{flex:0.75,paddingTop:5,justifyContent:'center'}}>
                  <Text style={{color:'#F5F5F5',fontSize:17, fontFamily:'sans-serif'}}>{nw.headline.main}{"\n\n"}</Text>

                  </View>
                  </View>
                </TouchableOpacity>
                   
            </View>
            )
          })
        )}
      </ScrollView>
      </View>
      </View>
    );
  }
};