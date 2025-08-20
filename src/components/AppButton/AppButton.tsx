import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';

import { styles } from './AppButtonStyle';

interface AppButtonProps {
  title?: string;
  handleOnPress?: () => void;
}
export const AppButton = ({title, handleOnPress} :AppButtonProps) => {
  return (
    <View style={styles.container}>
        <Pressable
        onPress={handleOnPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
        
    </View>
  );
}