import React from 'react';
import { View } from 'react-native';

import { styles } from './ButtonMenuStyles';
import { AppButton } from '../AppButton/AppButton';

interface ButtonMenuProps{
    handleGeneratePassword?: () => void
}

export function ButtonMenu({handleGeneratePassword}: ButtonMenuProps) {
  return (
    <View style={styles.container}>
        <AppButton
            title="⚡GENERATE"
            handleGeneratePassword={handleGeneratePassword}
        />
        <AppButton title='📋 COPY'/>
    </View>
  );
}