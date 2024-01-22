import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLocalStorage } from "../utils/useAsyncStorage";

const AuthContext = createContext({});

/**
 * @returns {{
 *  isLogin: boolean,
 *  userInfo: any,
 *  login: async (email: string, password: string) => void,
 *  logout: () => void,
 *  authAxios: import('axios').AxiosInstance,
 * addProduct: any,
 * increaseQuantity: any,
 * decreaseQuantity: any,
 * removeItems: any,
 * getItemQuantity: any,
 * cart: any,
 * getTotal: any,
 * grandTotal: any, 
 * }}
 */
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const axiosInstance = useRef();

    const [cart, setCart] = useState([]);

    function addProduct(id, name, slug, price, counter) {
        const productDetails = {
            id: id,
            name: name,
            image: slug,
            price: price,
            counter: counter + 1,
        }
        console.log('hfjhsfjhsfjh', typeof cart, Array.isArray(cart))
        const existingProductIndex = cart.findIndex((item) => item.id === id);
        if (existingProductIndex !== -1) increaseQuantity(id);
        else {
            console.log('hfjhsfjhsfjh 2')
            const newCart = [...cart, productDetails];
            console.log('cart 1')
            saveCart(newCart);
        }
    };

    function increaseQuantity(id) {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, counter: item.counter + 1 } : item
        );
            console.log('cart 2')
            saveCart(updatedCart);
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, counter: item.counter - 1 } : item
        );
        const updatedCart2 = updatedCart.filter((e) => e.counter > 0);
            console.log('cart 3')
            saveCart(updatedCart2);
    }

    function removeItems() {
            console.log('cart 4')
            saveCart([]);
    }

    function getItemQuantity(id) {
        return cart.find((e) => e.id === id)?.counter || 0;
    }

    function getTotal() {
        console.log(cart.reduce((p, e) => { p + (e.price * e.counter) }, 0));
        return cart.reduce((p, e) => {
            return (p + (e.price * e.counter));
        }, 0);
    }

    function grandTotal() {
        return (Math.round((getTotal()) * 0.2));
    }

    async function login(email, password) {
        try {
            setIsLoading(true);
            const res = await axios.post("http://192.168.43.8:3001/auth/login", {
                email,
                password,
            });
            console.log('res', res.data);
            if (res.data?.token) {
                console.log('setting isLogin true')
                setToken(res.data.token);
                setUserInfo(res.data);
                AsyncStorage.setItem('user', JSON.stringify(res.data));
                AsyncStorage.setItem('token', res.data.token);
                setIsLogin(true);
                setIsLoading(false);
            }
        } catch (e) {
            console.log('e', e);
        }
    }

    async function logout() {
        try {
            setToken("");
            AsyncStorage.setItem('token', "");
            setIsLogin(false);
        } catch (e) {
            console.log('e', e);
        }
    }

    function saveCart(newCart) {
        setCart(newCart);
        AsyncStorage.setItem('cart', JSON.stringify(newCart))
    }

    useEffect(() => {
        (async () => {
            try {
                const tokenFromAsync = await AsyncStorage.getItem('token');
                if (tokenFromAsync) {
                    setUserInfo(JSON.parse(await AsyncStorage.getItem('user')));
                    setToken(tokenFromAsync)
                    setIsLogin(true)
                }
            } catch (e) {
            }
        })();
    }, [])


    useEffect(() => {
        (async () => {
            try {
                let cartItems = await AsyncStorage.getItem('cart');
                if (cartItems) {
            console.log('cart 5', cartItems, JSON.parse(cartItems))
            setCart(JSON.parse(cartItems));
                }
            } catch (e) {
            }
        })();
    }, [])

    useEffect(() => {
        if (token) {
            console.log('token', token)
            axiosInstance.current = axios.create({
                headers: {
                    "Authorization": token,
                }
            });
        } else {
            console.log('no token')
            axiosInstance.current = axios.create();
        }
    }, [token])

    return (
        <AuthContext.Provider value={{
            isLogin,
            login,
            authAxios: axiosInstance.current,
            logout,
            isLoading,
            userInfo,
            addProduct,
            increaseQuantity,
            decreaseQuantity,
            removeItems,
            getItemQuantity,
            cart,
            getTotal,
            grandTotal
        }}>
            {children}
        </AuthContext.Provider>
    );
}
