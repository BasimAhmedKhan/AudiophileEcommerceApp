import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { COLORS } from "./Styles";

export default function Btn({ text, link, navigation, slug, category, size }: any): JSX.Element {
    return (
        <TouchableOpacity style={[styles.button, size?styles.heightL:styles.heightS]} onPress={() => navigation.navigate(link, {
            slug: slug,
            category: category,
        })}
        >
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
        backgroundColor: COLORS.orange,
        justifyContent: 'center'
    },
    heightS: {
        height: 30,
        width: 120,
    },
    heightL: {
        height: 40,
        width: 130,
    }
});