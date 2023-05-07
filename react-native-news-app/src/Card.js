import { Text, View,Image } from 'react-native'
import Styles from './Card.style'

function Card({item}){
    return(
        <View>
            <View style={Styles.Container}>
                <View style={Styles.CardTexts}>
                    <Text style={{color: 'white', fontSize: 18}}> {item.title} </Text>
                    <Text style={{color: 'white', fontSize: 13}}> {item.description} </Text>
                    <Text style={{color: 'white', fontSize: 13, paddingTop: 10,}}> Yazar: {item.author} </Text>
                </View>
                <Image
                source={{uri: item.imgURL}}
                style={Styles.CardImage}
                >
                </Image>
            </View>
        </View>
    )
}

export default Card