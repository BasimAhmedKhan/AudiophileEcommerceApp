import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {gStyles} from '../components/Styles';
import {useAuth} from '../context/AuthContext';

export default function Cart(): JSX.Element {
  const {increaseQuantity, decreaseQuantity, removeItems, cart, getTotal} =
    useAuth();
  return (
    <ScrollView>
      <View style={[styles.margin, gStyles.marginTB]}>
        <View
          style={[
            gStyles.childMargin,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text style={[gStyles.h2]}>Cart</Text>
          <TouchableOpacity onPress={removeItems}>
            <Text style={[gStyles.h4, {textDecorationLine: 'underline'}]}>
              Remove all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  margin: {
    marginHorizontal: 50,
  },
  cartImage: {
    height: 20,
    width: 20,
  },
});
