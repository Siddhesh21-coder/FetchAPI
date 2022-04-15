import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Text style={{fontSize: 25,color:'white',fontWeight:'bold',fontFamily: 'sans-serif'}}>S News</Text>
   
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
      <TouchableOpacity>
      <Image style={styles.icon} source={require('../../assets/image.jpeg')} />
      </TouchableOpacity>
      </View>
    </View>
  )
}


const styles =StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 20,
      flexDirection: 'row',
     
    },
    iconsContainer: {
      flexDirection: 'row',
    },
    logo:
    {
      width:100,
      height:50,
      resizeMode:'contain',
    },
    icon: {
      width: 40,
      height: 40,
    }
  })
export default Header