import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { gStyles } from "../components/Styles";
import Products from "../components/Products";

export default function Product({ navigation }: any): JSX.Element {
    return (
        <ScrollView style={[gStyles.bgWhite, styles.productContainer]}>
            <Products 
            id={0}
            name="XX99 MARK I" 
            price={2999}
            cart={true} 
            src={require("../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg")} 
            desc="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move." 
            navigation={navigation}
            link="Cart" />
            <View style={[gStyles.margin]}>
                <Text style={[gStyles.h2, gStyles.black, gStyles.childMargin]}>FEATURES</Text>
                <Text style={[gStyles.para, gStyles.greyOnWhite, styles.textLeft, gStyles.childMargin]}>These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.</Text>
                <Text style={[gStyles.para, gStyles.greyOnWhite, styles.textLeft]}>More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</Text>
            </View>
            <View style={[gStyles.margin, gStyles.marginTB]}>
                <Text style={[gStyles.h2, gStyles.black, gStyles.childMargin]}>IN THE BOX</Text>
                <View style={[gStyles.flex, gStyles.childMargin]}>
                    <Text style={[gStyles.orange, gStyles.h3]}>1x  </Text>
                    <Text style={[gStyles.h4, gStyles.greyOnWhite]}>Headphone Unit</Text>
                </View>
                <View style={[gStyles.flex, gStyles.childMargin]}>
                    <Text style={[gStyles.orange, gStyles.h3]}>1x  </Text>
                    <Text style={[gStyles.h4, gStyles.greyOnWhite]}>Headphone Unit</Text>
                </View>
                <View style={[gStyles.flex, gStyles.childMargin]}>
                    <Text style={[gStyles.orange, gStyles.h3]}>1x  </Text>
                    <Text style={[gStyles.h4, gStyles.greyOnWhite]}>Headphone Unit</Text>
                </View>
                <View style={[gStyles.flex, gStyles.childMargin]}>
                    <Text style={[gStyles.orange, gStyles.h3]}>1x  </Text>
                    <Text style={[gStyles.h4, gStyles.greyOnWhite]}>Headphone Unit</Text>
                </View>
            </View>
            <View style={[gStyles.margin, styles.gallery, gStyles.marginTB, gStyles.center]}>
                <Image resizeMode="cover" style={[gStyles.bRadius, gStyles.childMargin, gStyles.width100,
                styles.width25]} source={require('../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg')} />
                <Image resizeMode="contain" style={[gStyles.bRadius, gStyles.childMargin, gStyles.width100, styles.width25]} source={require('../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg')} />
                <Image resizeMode="contain" style={[gStyles.bRadius, gStyles.childMargin, gStyles.width100, styles.width50]} source={require('../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg')} />
            </View>
        </ScrollView>
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
    textLeft: {
        textAlign: 'justify'
    },
    gallery: {
        height: 750,
    },
    width25: {
        height: '25%'
    },
    width50: {
        height: '50%'
    }
});