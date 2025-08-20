import React from 'react';
import { View } from 'react-native';

import { styles } from './ButtonMenuStyles';
import { AppButton } from '../AppButton/AppButton';

interface ButtonMenuProps{
    handleGeneratePassword?: () => void;
    handleCopyToClipboard?: () => void;
}

export function ButtonMenu({handleGeneratePassword, handleCopyToClipboard}: ButtonMenuProps) {
  return (
    <View style={styles.container}>
        <AppButton
            title="⚡GENERATE"
            handleOnPress={handleGeneratePassword}
        />
        <AppButton
            title='📋 COPY'
            handleOnPress={handleCopyToClipboard}    
        />
    </View>
  );
}