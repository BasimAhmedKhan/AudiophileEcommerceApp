import { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet, FlatList } from "react-native";
import Products from "../components/Products";
import { COLORS, gStyles } from "../components/Styles";

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: {
        mobile: string;
    }
    slug: string;
    category: string;
};

export default function Speakers({ navigation }: any): JSX.Element {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Product[]>([]);

    const getData = async () => {
        try {
            const response = await fetch('https://audiophile-murex.vercel.app/api/products/speakers',);
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
        <View style={[gStyles.bgWhite, styles.productContainer]}>
            {isLoading ?
                <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }], marginVertical: 300 }} color={COLORS.orange} /> :
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <Products
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            cart={false}
                            src={item.image.mobile}
                            desc={item.description}
                            navigation={navigation}
                            link="Product"
                            slug={item.slug}
                            category={item.category}
                        />}
                />}
        </View>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
    },
});