import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './TextFieldStyle';

interface TextFieldProps{
  generatedPassword: string
}

export function TextField({ generatedPassword }: TextFieldProps) {
  return (
    <TextInput
      style = { styles.input }
      value={generatedPassword}
    >
    
    </TextInput>
  );
}