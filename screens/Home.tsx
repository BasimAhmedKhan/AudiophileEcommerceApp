import {
    ImageBackground,
    StyleSheet,
    Text,
    View, Dimensions,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";
import { gStyles, COLORS } from "../components/Styles";
import ProductCard from "../components/ProductCard";
import Btn from "../components/Button";
import { useState, useEffect } from "react";
import { EarphoneIcon, HeadphoneIcon, SpeakerIcon } from "../components/Icons";

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

    const products = data.map((e) => {
        return (
            <ProductCard
                key={e.id}
                name={e.name}
                price={e.price}
                slug={e.slug}
                category={e.category}
                img={e.image.mobile}
                navigation={navigation}
            />
        );
    });

    return (
        <ScrollView style={styles.container}>
            {/* <ImageBackground source={require('../assets/home/mobile/image-hero.jpg')} resizeMode="contain" style={styles.Imagecontainer}>
                <View style={[gStyles.center, gStyles.margin]}>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.newProduct, gStyles.grey]}>NEW PRODUCT</Text>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.h1]}>XX99 MARK II</Text>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.h1]}>HEADPHONES</Text>
                    <Text style={[styles.white, gStyles.childMargin, gStyles.grey, gStyles.para]}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</Text>
                    <Btn text="SEE PRODCUT" navigation={navigation} link="Product" slug={"xx99-mark-two-headphones"} category={'headphones'} size={true} />
                </View>
            </ImageBackground> */}
            <View style={styles.productsContainer}>
                <ImageBackground source={require('../assets/home/mobile/image-speaker-zx7-pano.jpg')} resizeMode="cover" style={[gStyles.margin, styles.zx7Image, gStyles.marginTB]} imageStyle={[gStyles.bRadius]}>
                    <View style={[gStyles.center, gStyles.margin, styles.zx7Child]}>
                    <Text style={[gStyles.childMargin, gStyles.h3, gStyles.black]}>ZX7 SPEAKERS</Text>
                    <Btn text="SEE PRODCUT" navigation={navigation} link="Product" slug={"zx7-speakers"} category={'speakers'} size={false} />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.productsContainer}>
                <Text style={[gStyles.h2, gStyles.margin, gStyles.black, gStyles.childMargin]}>CATEGORY</Text>
                <View style={[styles.catCard, gStyles.margin]}>
                    <TouchableOpacity style={[styles.card, gStyles.bRadius, gStyles.center]} onPress={() => navigation.navigate("Headphones")}>
                        <HeadphoneIcon size={45} color={COLORS.orange} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, gStyles.bRadius, gStyles.center]} onPress={() => navigation.navigate("Speakers")}>
                        <SpeakerIcon size={45} color={COLORS.orange} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, gStyles.bRadius, gStyles.center]} onPress={() => navigation.navigate("Earphones")}>
                        <EarphoneIcon size={45} color={COLORS.orange} />
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.productsContainer}>
                <Text style={[gStyles.h2, gStyles.margin, gStyles.black, gStyles.marginTB]}>POPULAR</Text>
                <View style={[gStyles.margin, styles.cardContainer]}>
                    {isLoading ?
                        <View style={[gStyles.center]}>
                            <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }], marginVertical: 300 }} color={COLORS.orange} />
                        </View>
                        : products
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
        height: height - 201,
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
        flexWrap: 'wrap',
    },
    catCard: {
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        flex: 1,
        backgroundColor: COLORS.greyBg,
        marginHorizontal: '2%',
    },
    zx7Image: {
        height: 200
    },
    zx7Child: {
        alignItems: 'flex-start',
        textAlign: 'left'
    }
});