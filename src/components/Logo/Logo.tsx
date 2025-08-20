import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './LogoStyle';

export function Logo() {
  return (
    <View>
        <Text style={styles.title}>ULTRA PASSWORD GEN</Text>
        <Image
            style={styles.img}
            source={require("../../../assets/padlock.png")}
        />
    </View>
  );
}