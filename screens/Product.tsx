import { Image, ScrollView, StyleSheet, Text, View, ActivityIndicator, FlatList } from "react-native";
import { gStyles, COLORS } from "../components/Styles";
import Products from "../components/Products";
import { useState, useEffect } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    features: string;
    includes: [
        {
            quantity: number;
            item: string;
        }
    ];
    image: {
        mobile: string;
    },
    gallery: {
        first: {mobile: string},
        second: {mobile: string},
        third: {mobile: string},
    },
};

export default function Product({ navigation, route }: any): JSX.Element {
    const { slug, category } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Product>({
        id: 0,
        name: "",
        price: 0,
        description: "",
        features: "",
        includes: [{
            quantity: 0,
            item: "",
        }],
        image: {
            mobile: "",
        },
        gallery: {
            first: {mobile: ""},
            second: {mobile: ""},
            third: {mobile: ""},
        },
    });

    const getData = async () => {
        try {
            const response = await fetch(`https://audiophile-murex.vercel.app/api/products/${category}/${slug}`,);
            const res = await response.json();
            setData(res);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);

    const includes = data.includes.map((e, i) => {
        return (
            <View key={i} style={[gStyles.flex, gStyles.childMargin]}>
                <Text style={[gStyles.orange, gStyles.h3]}>{e.quantity}x  </Text>
                <Text style={[gStyles.h4, gStyles.greyOnWhite]}>{e.item}</Text>
            </View>
        );
    });

    return (
        <ScrollView style={[gStyles.bgWhite, styles.productContainer]}>
            {isLoading ?
                <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }], marginVertical: 300 }} color={COLORS.orange} /> :
                <View>
                    <Products
                        id={data.id}
                        name={data.name}
                        price={data.price}
                        cart={true}
                        src={data.image.mobile}
                        desc={data.description}
                        navigation={navigation}
                        link="Cart"
                        slug=""
                        category="" />
                    <View style={[gStyles.margin]}>
                        <Text style={[gStyles.h2, gStyles.black, gStyles.childMargin]}>FEATURES</Text>
                        <Text style={[gStyles.para, gStyles.greyOnWhite, styles.textLeft, gStyles.childMargin]}>{data.features}</Text>
                    </View>
                    <View style={[gStyles.margin, gStyles.childMargin]}>
                        <Text style={[gStyles.h2, gStyles.black, gStyles.childMargin]}>IN THE BOX</Text>
                        {includes}
                    </View>
                    <View style={[gStyles.margin, styles.gallery, gStyles.marginTB, gStyles.center]}>
                        <Image resizeMode="cover" style={[gStyles.bRadius, gStyles.childMargin, gStyles.width100,
                        styles.width25]} source={{ uri: `https://audiophile-murex.vercel.app${data.gallery.first.mobile}`}} />
                        <Image resizeMode="contain" style={[gStyles.bRadius, gStyles.childMargin, gStyles.width100, styles.width25]} source={{ uri: `https://audiophile-murex.vercel.app${data.gallery.second.mobile}`}} />
                        <Image resizeMode="contain" style={[gStyles.bRadius, gStyles.childMargin, gStyles.width100, styles.width50]} source={{ uri: `https://audiophile-murex.vercel.app${data.gallery.third.mobile}`}} />
                    </View>
                </View>
            }
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