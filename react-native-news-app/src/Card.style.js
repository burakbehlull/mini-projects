import { StyleSheet, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    Container:{
        marginTop: 10,
        backgroundColor: 'blue',
        borderRadius: 25,
    },
    CardTexts: {
        alignItems: 'center',
        padding: 8,
    },
    CardImage:{
        height: Dimensions.get('window').height / 4,
        borderRadius: 5,
    }, 
})