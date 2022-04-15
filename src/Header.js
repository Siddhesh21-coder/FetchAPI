import { View, Text } from 'react-native'
import React from 'react'

const Header1 = () => {
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

export default Header1