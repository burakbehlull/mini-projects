import { View, Text, ScrollView } from "react-native";
import Styles from "./index.style";
function Main(){
    return(
        <ScrollView style={Styles.container}>
            <View>
                <Text>HELLO NEWS-APP</Text>
            </View>
        </ScrollView>
    )
}

export default Main