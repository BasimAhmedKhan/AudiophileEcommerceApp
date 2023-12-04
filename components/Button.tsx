import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { COLORS } from "./Styles";

export default function Btn({ text, link, navigation }: any): JSX.Element {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(link)}>
            <Text style={styles.white}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    white: {
        color: 'white',
        textAlign: 'center'
    },
    button: {
        height: 40,
        width: 130,
        backgroundColor: COLORS.orange,
        justifyContent: 'center'
    },
});