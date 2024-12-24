import React, {Component} from "react";
import { 
    TouchableOpacity, 
    Text 
    } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from "../constants";
function WelcomeButton(props) {
  const {onPress, title, isSelected} = props
  return (
    <TouchableOpacity
        onPress={onPress}
      style={{
        borderColor: isSelected == true? colors.primary : "white",
        borderWidth: 1,
        height: 40,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected == true?'white':null,
      }}>
      {isSelected == true && <Icon
        name="check-circle"
        style={{
          color: colors.primary,
          position: 'absolute',
          left: 10,
          fontSize: 18,
        }}
      />}
      <Text
        style={{
          fontSize: 18,
          color: isSelected == true? colors.primary: 'white',
          fontWeight: '500',
          textShadowColor: isSelected == true? 'white': 'black',
          textShadowOffset: {width: 1, height: 1},
          textShadowRadius: 2
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
export default WelcomeButton