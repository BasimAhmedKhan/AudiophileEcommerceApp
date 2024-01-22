import { TextInput, View, Text, type TextInputProps } from "react-native";
import { forwardRef, useImperativeHandle, useState } from "react";
import { COLORS, gStyles } from "./Styles";

type TextInputValidaionProps = {
    regex: RegExp;
    errorMessage: string;
    placeholder: string;
    setValidation: Function;
} & TextInputProps

const TextInputValidaion = forwardRef(({ regex, errorMessage, placeholder, setValidation, ...props }: TextInputValidaionProps, ref) => {

    const [text, setText] = useState("");
    const [validationMessage, setValidationMessage] = useState("");
    const validate = (input: string) => {
        const isValid = regex.test(input);
        setValidation(isValid);
        isValid ? setValidationMessage("") : setValidationMessage(errorMessage);
    };

    useImperativeHandle(ref, () => {
        return {
            getValue: () => {
                return text;
            },
        }
    })

    return (
        <View>
            <TextInput
                placeholderTextColor={COLORS.greyOnWhite}
                style={{backgroundColor: '#fafaf2'}}
                value={text}
                onChangeText={setText}
                onEndEditing={() => validate(text)}
                placeholder={placeholder}
                {...props}
            />
            <Text style={{color: 'red'}}>{validationMessage}</Text>
        </View>

    );
});

export default TextInputValidaion;

