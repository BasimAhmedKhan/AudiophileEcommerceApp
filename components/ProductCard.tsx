import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { gStyles } from "./Styles";

export default function ProductCard({ name, price, navigation, slug, category, img }: any): JSX.Element{
    return(
        <TouchableOpacity style={[styles.cardContainer, gStyles.bRadius, gStyles.childMargin]} onPress={() => navigation.navigate('Product', {
            slug: slug,
            category: category,
        })}>
            <Image style={[styles.productImage, gStyles.bRadius, gStyles.width100]} source={{uri: `https://audiophile-murex.vercel.app/${img}`}} />
            <View style={{
                justifyContent: 'space-between',
                padding: 6
            }}>
                <Text style={[gStyles.black, gStyles.h3]}> {name.substring(0, 3)}</Text>
                <Text style={[gStyles.black, gStyles.h3]}>{name.substring(4)}</Text>
                <Text style={[gStyles.orange, gStyles.h3, styles.price]}>$ {price}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    productImage:{
        height: 150,
    },
    cardContainer: {
        width: 165,  
        backgroundColor: '#f1f1f1',
    },
    price: {
        textAlign: 'right',
        fontWeight: 'bold'
    }
});