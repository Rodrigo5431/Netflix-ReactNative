import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./style";

interface PropsInput {
    placeHolder: string,
    valueInput:string,
    handleFunctionInput: (value: string) => void;
  }

export const InputButton = ({placeHolder, valueInput, handleFunctionInput}: PropsInput) => {

    const [viewPassword, setViewPassword] = useState<boolean>(false);

    return (
        <View>
            <TextInput
            style={styles.inputButton}
            placeholder={placeHolder}
            value={valueInput}
            placeholderTextColor="#7B7B7B"
            onChangeText={handleFunctionInput}
            >
            </TextInput>
        </View>
    )
}