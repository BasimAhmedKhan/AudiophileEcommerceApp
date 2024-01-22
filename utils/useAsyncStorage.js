import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(async () => {
        const savedValue = await AsyncStorage.getItem(key);
        if (savedValue) return JSON.parse(savedValue);

        if (typeof initialValue === "function") {
            return initialValue()
        } else {
            return initialValue;
        }
    });

    useEffect(() => {
        async () => {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
}
