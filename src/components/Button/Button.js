import { TouchableOpacity, View, Text } from "react-native"
import styles from "./estiloButto"

export default function Button(props){
    return(
        <View>
        <TouchableOpacity onPress={props.clicado} >
                <Text style = {styles.textButton}>{props.texto}</Text>
            </TouchableOpacity>
        </View>
    )
}