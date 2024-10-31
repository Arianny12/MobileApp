import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 10
const ColorMixerScreen = () => {
    const [red,setRed] = useState(0)
    const [green,setGreen] = useState(0)
    const [blue,setBlue] = useState(0)
    
    const setColor = (color, change) => {
        // if (color === 'red'){
        //     setRed(red, setRed(red + change))
        // } else{
        //     return
        // }
        // instead of using this if statement, we are going to use a switch statement
        switch (color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return
            default:
                return
        }

    }

    return (
        <View>
        <Text Style={styles.title}>Mix-O-Matic</Text>
        <ColorCounter 
            color="Red" 
            onIncrease={() => setColor('red', COLOR_INCREMENT)} 
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}/>
        <ColorCounter 
            color="Green" 
            onIncrease={() =>setColor('green', COLOR_INCREMENT)} 
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}/>
        <ColorCounter 
            color="Blue" 
            onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}/>


        <View style={{
            height: 100, 
            width: '100%', 
            backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: '#006FFF'
    },
})

export default ColorMixerScreen