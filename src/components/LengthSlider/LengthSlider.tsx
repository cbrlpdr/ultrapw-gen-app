import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './LengthSliderStyle';

interface LengthSliderProps{
    setPasswordLength: (sliderValue: number) => void;
}

export function LengthSlider({setPasswordLength}: LengthSliderProps) {
    const [sliderValue, setSliderValue] = useState(8);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>PASSWORD LENGTH</Text>
            <Slider
                style={styles.slider}
                minimumValue={6}
                maximumValue={25}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(value) => setSliderValue(Math.round(value))}
                value={sliderValue}
                onSlidingComplete={() => setPasswordLength(sliderValue)}
            />
            <Text style={styles.text}>
                {sliderValue}
            </Text>
        </View>
    );
}