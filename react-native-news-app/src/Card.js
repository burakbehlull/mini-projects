import { Text, View } from 'react-native'
import Styles from './Card.style'

function Card({item}){
    return(
        <View style={Styles.Container}>
            <Text> {item.title} </Text>
        </View>
    )
}

export default Card