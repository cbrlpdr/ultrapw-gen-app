import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./Style";
import { Logo } from "../../components/Logo/Logo";
import { TextField } from "../../components/TextInput/TextField";
import { AppButton } from "../../components/AppButton/AppButton";
import { ButtonMenu } from "../../components/ButtonMenu/ButtonMenu";
import { generatePassword } from "../../services/generatePassword";

export const Home = () =>{
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleGeneratePassword = () => {
        let newPassword = generatePassword(12)
        setGeneratedPassword(newPassword);
    }
    return(
        <View style={styles.container}>
            <Logo/>
            <TextField
            generatedPassword={generatedPassword}
            />
            <ButtonMenu handleGeneratePassword = {handleGeneratePassword}/>
        </View>
        
    );
}
