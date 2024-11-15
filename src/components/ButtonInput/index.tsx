import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./style";

interface PropsInput {
    placeHolder: string,
    valueInput:string,
    handleFunctionInput: (value: string) => void,
    typeIcon ?: string,
    typeInput?:boolean
  }

export const InputButton = ({placeHolder, valueInput, handleFunctionInput, typeInput, typeIcon}: PropsInput) => {

    const [viewPassword, setViewPassword] = useState<boolean>(false);

    return (
        <View>
            <TextInput
            style={styles.inputButton}
            placeholder={placeHolder}
            value={valueInput}
            placeholderTextColor="#7B7B7B"
            onChangeText={handleFunctionInput}
            secureTextEntry={typeIcon === "password" ? viewPassword : typeInput}

            >
            </TextInput>
            <View style={styles.boxIcon}>
        {typeIcon === "person" && <Text>MOSTRAR</Text>}
        {typeIcon === "password" && (
          <TouchableOpacity onPress={() => setViewPassword(!viewPassword)}>
            {viewPassword ? (
             <Text>Mostrar</Text>
            ) : (
              <Text>Ocultar</Text>
            )}
          </TouchableOpacity>
        )}
      </View>
        </View>
    )
}