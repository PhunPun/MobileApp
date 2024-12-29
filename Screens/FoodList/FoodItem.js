import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Alert,
  TextInput,
  TurboModuleRegistry,
} from 'react-native';
import {images, icons, colors, fontSizes} from '../../constants';
import {WelcomeButton} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
    isValidEmail,
    isValidPassword,
    isValidConfirm,
    isValidUsername
} from '../../utilies/Validations';
function _getColorFromStatus(start){
    if(start.toUpperCase().trim() == "OPENING SOON"){
        return colors.warning
    }
    if(start.toUpperCase().trim() == "OUT OF STOCK"){
        return colors.alert
    }
    return colors.success
}
function FoodItem(props) {
    let {
        name, 
        status, 
        price, 
        url,
    } = props.food
    const {onPress} = props
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });
  return (
    <View
      style={{
        height: 140,
        paddingTop: 10,
        flexDirection: 'row',
        paddingStart: 10,
      }}>
      <Image
        style={{
          width: 80,
          height: 80,
          resizeMode: 'cover',
          borderRadius: 10,
          marginRight: 8,
          marginTop: 25,
        }}
        source={{
          uri: url, 
        }}
      />
      <View
        style={{
          flex: 1,
          marginRight: 10,
        }}>
        <Text
          style={{
            color: colors.text,
            fontSize: fontSizes.s4,
            fontWeight: 600,
          }}>
          {name}
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: colors.primary,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: colors.text,
              fontSize: fontSizes.s5,
              width: 50,
            }}>
            Status:
          </Text>
          <Text
            style={{
              color: _getColorFromStatus(status),
              fontSize: fontSizes.s5,
            }}>
            {status.toUpperCase()}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: colors.text,
              fontSize: fontSizes.s5,
              width: 50,
            }}>
            Price:
          </Text>
          <Text
            style={{
              color: colors.text,
              fontSize: fontSizes.s5,
            }}>
            {VND.format(price)}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'center',
          }}>
          {/* <TouchableOpacity
            style={{
              borderWidth: 0.2,
              borderColor: colors.text,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderTopLeftRadius: 10,
            }}>
            <Text
              style={{
                color: colors.text,
                fontSize: fontSizes.s4,
              }}>
              -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopWidth: 0.2,
              borderBottomWidth: 0.2,
              borderColor: colors.text,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <Text
              style={{
                color: colors.text,
                fontSize: fontSizes.s5,
              }}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.2,
              borderColor: colors.text,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderTopRightRadius: 10,
            }}>
            <Text
              style={{
                color: colors.text,
                fontSize: fontSizes.s4,
              }}>
              +
            </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            onPress = {onPress}
            style={{
              marginLeft: 20,
              borderWidth: 0.2,
              borderColor: colors.text,
              paddingHorizontal: 80,
              paddingVertical: 8,
              borderRadius: 5,
              alignSelf: 'center',
              backgroundColor: colors.placeHoder,
            }}>
            <Text>Add cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default FoodItem;
