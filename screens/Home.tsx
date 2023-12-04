import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, Dimensions,
    ScrollView
} from "react-native";
import { gStyles } from "../components/Styles";
import ProductCard from "../components/ProductCard";
import Btn from "../components/Button";

export default function Home({ navigation }: any): JSX.Element {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../assets/home/mobile/image-hero.jpg')} resizeMode="cover" style={styles.Imagecontainer}>
                <View style={[gStyles.center, gStyles.margin]}>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.newProduct, gStyles.grey]}>NEW PRODUCT</Text>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.h1]}>XX99 MARK II</Text>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.h1]}>HEADPHONES</Text>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.grey, gStyles.para]}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Text>
                    <Btn text="SEE PRODCUT" navigation={navigation} link="Product" />
                </View>
            </ImageBackground>
            <View style={styles.productsContainer}>
                <Text style={[gStyles.h2, gStyles.margin, gStyles.black, gStyles.marginTB]}>POPULAR</Text>
                <View style={[gStyles.margin, styles.cardContainer]}>
                    <ProductCard navigation={navigation} />
                    <ProductCard navigation={navigation} />
                    <ProductCard navigation={navigation} />
                    <ProductCard navigation={navigation} />
                    <ProductCard navigation={navigation} />
                    <ProductCard navigation={navigation} />
                    <ProductCard navigation={navigation} />
                    <ProductCard navigation={navigation} />
                </View>
            </View>
        </ScrollView>
    );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    Imagecontainer: {
        flex: 1,
        height: height - 100,
    },
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    white: {
        color: 'white',
        textAlign: 'center'
    },
    productsContainer: {
        backgroundColor: 'white'
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
});