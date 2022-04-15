import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import {Material} 

const TopNavigation = ({index},{setIndex}) => {
  return (
    <View>
        { index===0 ? (
            <TouchableOpacity>
                <Text>
                    
                </Text>
            </TouchableOpacity>
         ) : }
      <Text>TopNavigation</Text>
    </View>
  )
}

export default TopNavigation