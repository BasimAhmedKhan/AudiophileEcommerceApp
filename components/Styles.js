import { StyleSheet } from "react-native";

const COLORS = {
    black: '#191919',
    white: 'white',
    grey: 'rgba(255,255,255,0.5)',
    greyOnWhite: 'rgba(0,0,0,0.5)',
    orange: 'hsl(22, 64%, 57%)'
};

const gStyles = StyleSheet.create({
    h1: {
        fontSize: 36,
        fontWeight: '500',
    },
    h2: {
        fontSize: 26,
        fontWeight: '500',
    },
    h3: {
        fontSize: 16,
        fontWeight: '400',
    },
    h4: {
        fontSize: 16,
    },
    margin: {
        marginHorizontal: 22,
    },
    childMargin: {
        marginBottom: 20,
    },
    button: {
        height: 35,
        width: 130,
        backgroundColor: COLORS.orange,
        justifyContent: 'center'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    width100: {
        width: '100%'
    },
    height100: {
        height: '100%'
    },
    grey: {
        color: COLORS.grey,
    },
    white: {
        color: 'white',
    },
    black: {
        color: COLORS.black,
    },
    orange: {
        color: COLORS.orange,
    },
    marginTB: {
        marginVertical: 30
    },
    bRadius: {
        borderRadius: 10,
    },
    bgWhite: {
        backgroundColor: 'white'
    },
    newProduct: {
        letterSpacing: 8,
        fontWeight: '500'
    },
    para: {
        lineHeight: 20
    },
    greyOnWhite: {
        color: COLORS.greyOnWhite,
    }, 
    flex: {
        flex: 1,
        flexDirection: 'row',
    },
    childPadding: {
        padding: 10,
    }
});

export { COLORS, gStyles };