import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Header from '../../src/HomeScreen'
import NewsFilter from '../../src/Scroll'
import { StatusBar } from 'react-native'
import Demo from '../../src/demo'
const HomeScreen = () => {

  return (
    <View style={styles.container} >
        <Header />
     <Demo />
    </View>
  )
}
const styles =StyleSheet.create({
    container: {
        flex:1,
        marginTop: StatusBar.currentHeight,
        paddingTop: 5,
        backgroundColor:'black',

    }
})
export default HomeScreen