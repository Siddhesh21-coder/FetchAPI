import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity,ScrollView } from 'react-native'
import FiltButton from '../../components/filtButton'

const NewsFilter = () => {
  return (
    <View style={sytles.container}>
        <ScrollView horizontal={true} >
        <FiltButton txtdetail={'Election'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons}/>
        <FiltButton txtdetail={'War'} txtstyle={{color:'white', fontSize:20}}  ButtonStyle={sytles.buttons} />
        <FiltButton txtdetail={'India'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons} />
        <FiltButton txtdetail={'Sports'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons} />
        <FiltButton txtdetail={'Weather'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons} />
        <FiltButton txtdetail={'Covid'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons} />
        <FiltButton txtdetail={'Budget'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons} />
        <FiltButton txtdetail={'Movie'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons} />
        <FiltButton txtdetail={'Music'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons} />
        <FiltButton txtdetail={'Health'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons} />
        <FiltButton txtdetail={'Education'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons} />
        <FiltButton txtdetail={'Social Media'} txtstyle={{color:'white', fontSize:20}} ButtonStyle={sytles.buttons} />
        </ScrollView>
       
     
    </View>
  )
}
const sytles=StyleSheet.create({
    container: {
        justifyContent:'space-evenly',
        paddingLeft:10,
        paddingTop:10,
    },
    buttons: {
        paddingLeft: 10,
        paddingRight:10,

    }
})

export default NewsFilter