import {
    ImageBackground,
    StyleSheet,
    Text,
    View, Dimensions,
    ScrollView,
    ActivityIndicator,
    FlatList
} from "react-native";
import { gStyles, COLORS } from "../components/Styles";
import ProductCard from "../components/ProductCard";
import Btn from "../components/Button";
import { useState, useEffect } from "react";

type Product = {
    id: number;
    name: string;
    price: number;
    image: {
        mobile: string;
    }
    slug: string;
    category: string;
};

export default function Home({ navigation }: any): JSX.Element {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Product[]>([]);

    const getData = async () => {
        try {
            const response = await fetch('https://audiophile-murex.vercel.app/api/products',);
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

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={require('../assets/home/mobile/image-hero.jpg')} resizeMode="cover" style={styles.Imagecontainer}>
                <View style={[gStyles.center, gStyles.margin]}>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.newProduct, gStyles.grey]}>NEW PRODUCT</Text>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.h1]}>XX99 MARK II</Text>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.h1]}>HEADPHONES</Text>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.grey, gStyles.para]}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Text>
                    <Btn text="SEE PRODCUT" navigation={navigation} link="Product" slug={"xx99-mark-two-headphones"} category={'headphones'} />
                </View>
            </ImageBackground>
            <View style={styles.productsContainer}>
                <Text style={[gStyles.h2, gStyles.margin, gStyles.black, gStyles.marginTB]}>POPULAR</Text>
                <View style={[gStyles.margin, styles.cardContainer]}>
                    {isLoading ?
                        <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }], marginVertical: 300 }} color={COLORS.orange} /> :
                        <FlatList 
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <ProductCard 
                            name={item.name}
                            price={item.price}
                            slug={item.slug}
                            category={item.category}
                            img={item.image.mobile}
                            />}
                        />
                    }
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