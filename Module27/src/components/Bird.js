import React from 'react';
import { View } from 'react-native';

const Bird = ({ birdLeft, birdBottom }) => {
    const birdWidth = 50;
    const birdHeight = 60;

    return (
        <View style={{
            position: 'absolute',
            backgroundColor: 'blue',
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - (birdWidth / 2),
            bottom: birdBottom - (birdHeight / 2), // Corrected from 'right' to 'bottom'
        }}>
        </View>
    );
};

export default Bird;
