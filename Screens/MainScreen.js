import React from 'react';
import { Text, View } from 'react-native';
import { sub2Number, tru2Number } from '../utilies/Calculation';
// Component function
function MainScreen(props) {
    
    return (
        <View style={{ backgroundColor: 'grey', flex: 1 }}>
            <Text style={{ color: 'white', fontSize: 18 }}>This is the MainScreen</Text>
            <Text>Sum 2 and 3 = {sub2Number(2,3)} </Text>
            <Text>hieu 10 - 5 = {tru2Number(10,5)} </Text>
        </View>
    );
}

export default MainScreen;
