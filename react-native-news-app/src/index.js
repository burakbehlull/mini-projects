import { View, Text, ScrollView, FlatList } from "react-native";
import Styles from "./index.style";
import Card from "./Card";
import data from "../public/data.json"
function Main(){

    const renderItems = ({item})=> <Card item={item} />
    return(
        <ScrollView style={Styles.container}>
            <View>
                <Text>HELLO NEWS-APP</Text>
                
            </View>

            <FlatList
            data={data}
            renderItem={renderItems}></FlatList>
        </ScrollView>
    )
}

export default Main