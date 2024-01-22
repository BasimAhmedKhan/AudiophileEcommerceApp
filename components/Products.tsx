import { useState } from "react";
import Btn from "./Button";
import { gStyles } from "./Styles";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Toast from 'react-native-toast-message';
import { useAuth } from "../context/AuthContext";

type ProductsProps = {
    id: number
    name: string
    price: number
    desc: string
    cart: boolean
    src: any
    link: string
    navigation: Object
    slug: string
    category: string
};

export default function Products({ id, name, price, desc, cart, src, link, navigation, slug, category }: ProductsProps): JSX.Element {

    const {addProduct, increaseQuantity, decreaseQuantity, getItemQuantity} = useAuth();

    const counter = getItemQuantity(id);

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Product Added to Cart Successfully',
        });
      }

    return (
        <View style={[gStyles.margin, gStyles.marginTB, gStyles.center]}>
            <Image style={[styles.productImage, gStyles.bRadius, gStyles.childMargin]} source={{
                uri: `https://audiophile-murex.vercel.app/${src}`,
            }} />
            <Text style={[gStyles.newProduct, styles.textCenter, gStyles.childMargin, gStyles.orange]}>NEW PRODUCT</Text>
            <Text style={[gStyles.h1, gStyles.black, styles.textCenter, gStyles.childMargin, styles.title]}>{name}</Text>
            <Text style={[gStyles.para, gStyles.greyOnWhite, styles.textCenter, gStyles.childMargin]}>{desc}</Text>
            {cart ? <Text style={[gStyles.h3, gStyles.black, styles.textCenter, gStyles.childMargin]} >$ {price}</Text> : null}
            <View style={[gStyles.flex, gStyles.margin]}>
                {cart ?
                    <View style={[gStyles.flex, styles.marginRight]}>
                        <TouchableOpacity style={[styles.counter, gStyles.center]} onPress={() => decreaseQuantity(id)}>
                            <Text style={[gStyles.black]}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.counter, gStyles.center]}>
                            <Text style={[gStyles.black, gStyles.h3]}>{counter}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.counter, gStyles.center]} onPress={() => increaseQuantity(id)}>
                            <Text style={[gStyles.black]}>+</Text>
                        </TouchableOpacity>
                    </View> : null}
                <Btn text={cart ? "ADD PRODUCT" : "SEE PRODUCT"} onPress={() => {
                    addProduct(id, name, slug, price, counter);
                    showToast();
                }} navigation={navigation} link={link} slug={slug} category={category} size={true} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
    },
    productImage: {
        height: 350,
        width: 330
    },
    textCenter: {
        textAlign: 'center'
    },
    counter: {
        height: 40,
        width: 40,
        backgroundColor: '#f1f1f1',
    },
    marginRight: {
        marginRight: 30,
    },
    title: {
        width: 205,
        flex: 1,
        flexWrap: 'nowrap',
    }
});