import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity,StyleSheet } from 'react-native'

const FiltButton = ({ButtonStyle,ButtonFunction,txtstyle,txtdetail}) => {
  return (
      <>
      <TouchableOpacity style={[styles.container,ButtonStyle]} onpress={ButtonFunction}>
          <Text style={[styles.txt,txtstyle]}>{txtdetail} </Text>
      </TouchableOpacity>
      </>
  )
}
const styles= StyleSheet.create({
    container: {
            color: 'black',
            flexDirection:'row',

    }
})
export default FiltButton