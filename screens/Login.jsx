import { useRef, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import { gStyles, COLORS } from "../components/Styles";
import TextInputValidaion from "../components/TextInputValidation";
import { useAuth } from "../context/AuthContext";

export default function Login({ navigation }) {
    
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [validation, setValidation] = useState(false);

    function onSubmit() {
        const email = emailRef.current?.getValue();
        const password = passwordRef.current?.getValue();
        login(email, password);
    }

    return (
        <View style={[styles.container]}>
            <View>
                <View style={[styles.LogoContainer]}>
                    <Text style={[gStyles.white, gStyles.h1, styles.LoginTitle]}>Login</Text>
                </View>
                <ScrollView style={[styles.formContainer]}>
                    <View style={[gStyles.marginTB, styles.margin]}>
                        <View style={gStyles.childMargin}>
                            <Text style={[gStyles.black, gStyles.h3, gStyles.childMargin]}>Email</Text>
                            <TextInputValidaion
                                regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
                                placeholder={" johnDoe@gmail.com"}
                                errorMessage="Please provide a valid email!"
                                setValidation={setValidation}
                                ref={emailRef}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={gStyles.childMargin}>
                            <Text style={[gStyles.black, gStyles.h3, gStyles.childMargin]}>Password</Text>
                            <TextInputValidaion
                                regex={/.*/}
                                placeholder={" ********"}
                                errorMessage="You're password must contain 1 uppercase letter, 1 number and atleast 6 length"
                                setValidation={setValidation}
                                ref={passwordRef}
                                secureTextEntry
                            />
                        </View>
                        <TouchableOpacity style={[gStyles.button, gStyles.bRadius, gStyles.childMargin, gStyles.width100]} onPress={onSubmit}>
                            <Text style={[gStyles.white, gStyles.textCenter, gStyles.h3]}>Login</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[gStyles.h4, gStyles.black]}>Don't have any account?<Text style={gStyles.orange} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text></Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    formContainer: {
        height: '80%',
        backgroundColor: COLORS.white,
        borderRadius: 15,
        borderTopLeftRadius: 100,
    },
    LogoContainer: {
        height: '20%',
    },
    LoginTitle: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 50
    },
    margin: {
        marginHorizontal: 50,
    },
});