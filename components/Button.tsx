import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {COLORS} from './Styles';

export default function Btn({
  text,
  link,
  navigation,
  slug,
  category,
  size,
  onPress,
}: any): JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.button, size ? styles.heightL : styles.heightS]}
      onPress={() => {
        if (link)
          navigation.navigate(link, {
            slug: slug,
            category: category,
          });
        if (typeof onPress === "function") {
            onPress();
        }
      }}>
      <Text style={styles.white}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  white: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
  },
  heightS: {
    height: 30,
    width: 120,
  },
  heightL: {
    height: 40,
    width: 130,
  },
});
