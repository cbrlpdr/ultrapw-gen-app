import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./Style";
import { Logo } from "../../components/Logo/Logo";
import { TextField } from "../../components/TextInput/TextField";
import { AppButton } from "../../components/AppButton/AppButton";
import { ButtonMenu } from "../../components/ButtonMenu/ButtonMenu";
import { generatePassword } from "../../services/generatePassword";
import * as Clipboard from 'expo-clipboard';
import { LengthSlider } from "../../components/LengthSlider/LengthSlider";

export const Home = () =>{
    const [passwordLength, setPasswordLength] = useState(8);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleGeneratePassword = () => {
        let newPassword = generatePassword(passwordLength)
        setGeneratedPassword(newPassword);
    }

    const handleCopyToClipboard = () => {
        Clipboard.setStringAsync(generatedPassword);
        console.log("copied")
    }
    return(
        <View style={styles.container}>
            <Logo/>
            <TextField
            generatedPassword={generatedPassword}
            />
            <ButtonMenu
            handleGeneratePassword = {handleGeneratePassword}
            handleCopyToClipboard={handleCopyToClipboard}
            />
            <LengthSlider 
            setPasswordLength = {setPasswordLength}
            />
            
        </View>
        
    );
}
