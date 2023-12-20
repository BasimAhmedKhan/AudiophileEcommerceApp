import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS, gStyles } from "./Styles";
import { HeadphoneIcon } from "./Icons";

export default function CategoryCard(): JSX.Element {
    return(
        <TouchableOpacity style={[styles.card, gStyles.margin, gStyles.bRadius, gStyles.center]}>
            <HeadphoneIcon size={50} color={COLORS.orange} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 100,
        width: 100,
        backgroundColor: COLORS.greyBg,
    }
});