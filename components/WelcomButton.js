import React, {Component} from "react";
import { 
    TouchableOpacity, 
    Text 
    } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
function WelcomeButton(props) {
  return (
    <TouchableOpacity
        onPress={props.onPress}
      style={{
        borderBlockColor: 'white',
        borderWidth: 1,
        height: 40,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Icon
        name="check-circle"
        style={{
          color: 'green',
          position: 'absolute',
          left: 10,
          fontSize: 18,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          color: '#ED6263',
          fontWeight: '500',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
export default WelcomeButton