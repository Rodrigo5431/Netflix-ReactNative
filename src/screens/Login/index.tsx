import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { InputButton } from "../../components/ButtonInput";
import { HeaderLogin } from "../../components/HeaderLogin";
import { styles } from "./style";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (value: string) => {
    setEmail(value);
  };
  const handlePassword = (value: string) => {
    setPassword(value);
  };
  return (
    <View style={styles.container}>
      <HeaderLogin />

      <View style={styles.inputBox}>
        <InputButton
          valueInput={email}
          placeHolder="Email ou número de telefone"
          handleFunctionInput={(value) => setEmail(value)}
        />

        <InputButton
          valueInput={password}
          placeHolder="Senha"
          handleFunctionInput={(value) => setPassword(value)}
          typeIcon="password"
          typeInput={true}
        />
      </View>
      <View style={styles.botao}>
        <TouchableOpacity style={styles.entrar}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.acessCode}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 20,
            fontSize: 20,
          }}
        >
          OU
        </Text>
        <View style={styles.codeArea}>
          <TouchableOpacity style={styles.codeButton}>
            <Text style={{textAlign:"center", fontSize:18, color: "#fff", fontWeight:'600'}}>Usar um código de acesso</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.forgotPass}>
        <Text style={{textAlign:'center', color:'#AFAFAF', marginTop:50}}>Esqueceu a senha?</Text>
        <Text style={{textAlign:'center', color:'#AFAFAF', marginTop:30}}>O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um rôbo. Saiba mais.</Text>
      </View>
    </View>
  );
};
