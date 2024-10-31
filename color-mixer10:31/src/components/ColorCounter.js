import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ColorCounter = (props) => {
    const {color, onIncrease, onDecrease} = props
  return (
    <View>
      <Text>{color}</Text>
      <Button  title={`+ Increase ${color}`} onPress={()=>onDecrease()}/>
      <Button  title={`- Increase ${color}`} onPress={()=>onIncrease()}/>
    </View>
  )
}

export default ColorCounter

const styles = StyleSheet.create({})

