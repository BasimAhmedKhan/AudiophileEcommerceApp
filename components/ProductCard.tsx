import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { gStyles } from "./Styles";

// type ProductCardProps = {
//     name: string;
//     price: number;
//     navigation: {
//         navigate: Function;
//     };
//     slug: string;
//     category: string;
//     img: string;
// }

export default function ProductCard({ name, price, navigation, slug, category, img }: any): JSX.Element{
    return(
        <TouchableOpacity style={[styles.cardContainer, gStyles.bRadius, gStyles.childMargin]} onPress={() => navigation.navigate('Product', {
            slug: slug,
            category: category,
        })}>
            <Image style={[styles.productImage, gStyles.bRadius, gStyles.width100]} source={{uri: `https://audiophile-murex.vercel.app/${img}`}} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <Text style={[gStyles.black, gStyles.h3]}>{name}</Text>
                <Text style={[gStyles.black, gStyles.h3]}>$ {price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    productImage:{
        height: 150,
    },
    cardContainer: {
        width: 160,
    },
});