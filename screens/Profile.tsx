import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, gStyles } from "../components/Styles";
import { useAuth } from "../context/AuthContext";
import { LogoutIcon } from "../components/Icons";


export default function Profile(): JSX.Element {

    const { userInfo, logout } = useAuth();
    console.log(userInfo);

    return(
        <View style={[styles.container, gStyles.margin, gStyles.marginTB]}>
            <Text style={[gStyles.h1, gStyles.black, gStyles.childMargin]}>PROFILE</Text>
            <View style={[styles.Dp, gStyles.marginTB, gStyles.childMargin]}><Text style={[gStyles.h1, gStyles.white]}>{(userInfo.user.username).substring(0, 1)}</Text></View>
            <Text style={[gStyles.h2]}>{userInfo.user.username}</Text>
            <Text style={[gStyles.h4, gStyles.childMargin]}>{userInfo.user.email}</Text>
            <TouchableOpacity style={[styles.barBtn, gStyles.marginTB]} onPress={logout}>
                <View style={{
                }}>
                    <LogoutIcon size={30} color="orange" />
                </View>
                <Text style={[gStyles.h3]}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
    },
    Dp: {
        alignItems: "center",
        justifyContent: 'center',
        height: 80,
        width: 80,
        backgroundColor: COLORS.orange,
        borderRadius: 40,
        color: "white",
    },
    barBtn: {
        flexDirection: "row",
        alignItems: 'center'
        // width: '100%',
    },
});