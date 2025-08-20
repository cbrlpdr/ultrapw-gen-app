import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';

import { styles } from './AppButtonStyle';

interface AppButtonProps {
  title?: string;
  handleGeneratePassword?: () => void;
}
export const AppButton = ({title, handleGeneratePassword} :AppButtonProps) => {
  return (
    <View style={styles.container}>
        <Pressable
        onPress={handleGeneratePassword}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
        
    </View>
  );
}