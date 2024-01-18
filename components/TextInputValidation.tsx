import { TextInput, View, Text } from "react-native";
import { useState } from "react";
import { COLORS, gStyles } from "./Styles";

type TextInputValidaionProps = {
    regex: RegExp;
    errorMessage: string;
    placeholder: string;
    setValidation: Function;
}


export default function TextInputValidaion({ regex, errorMessage, placeholder, setValidation }: TextInputValidaionProps): JSX.Element {

    const [text, setText] = useState("");
    const [validationMessage, setValidationMessage] = useState("");
    const validate = (input: string) => {
        const isValid = regex.test(input);
        setValidation(isValid);
        isValid ? setValidationMessage("") : setValidationMessage(errorMessage);
    };
    return (
        <View>
            <TextInput
                placeholderTextColor={COLORS.greyOnWhite}
                style={{backgroundColor: '#fafaf2'}}
                value={text}
                onChangeText={setText}
                onEndEditing={() => validate(text)}
                placeholder={placeholder}
            />
            <Text style={{color: 'red'}}>{validationMessage}</Text>
        </View>

    );
}

