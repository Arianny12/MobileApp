import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ListScreen = () => {
    const chickens = [
        {name: 'Silky Johnson'},
        {name: 'Bilbo Baggins'},
        {name: 'Castor Troy'},
        {name: 'Pollux Troy'},
        {name: 'Sean Archer'},
        {name: 'Cameron Poe'},
        {name: 'Nikki Cage'},
      ]

  return (
    <View>
        <Text styles={styles.title}>ListScreen</Text>
        {/* this works but react native has an easier way */}
        {/* {chickens.map((chicken) => (
            <Text>{chicken.name}</Text>
        ))} */}
        
        <FlatList 
            horizontal
            data={chickens}
            renderItem={({item}) => {
                return <Text style={styles.itemStyle}>{item.name}</Text>
            }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    itemStyle:{
        fontSize: 24,
        marginVertical: 60,
        marginHorizontal: 10,
    },
    title:{
        fontSize: 60,
        color:'red',

    }
})

export default ListScreen
