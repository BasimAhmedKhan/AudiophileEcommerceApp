import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View, StyleSheet, FlatList } from "react-native";
import Products from "../components/Products";
import { gStyles } from "../components/Styles";

type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
};

export default function Headphones({ navigation }: any): JSX.Element {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Product[]>([]);

    const getData = async () => {
        try {
            const response = await fetch('https://audiophile-murex.vercel.app/api/products/headphones',);
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
        <ScrollView style={[gStyles.bgWhite, styles.productContainer]}>
            {isLoading ?
                <ActivityIndicator /> :
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>
                        <Products
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            cart={false}
                            src={require("../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg")}
                            desc={item.description}
                            navigation={navigation}
                            link="Cart"
                        />}
                />}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
    },
});