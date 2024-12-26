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
} from 'react-native';
import {images, icons, colors, fontSizes} from '../constants';
import {WelcomeButton} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';

function Login(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View
        style={{
          height: 200,
          flexDirection: 'row',
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: fontSizes.s1,
            fontWeight: 'bold',
            width: '45%',
            marginLeft: '5%',
          }}>
          Already have an Account?
        </Text>
        <Image
          source={images.loginImage}
          style={{
            height: 200,
            width: '45%',
            marginRight: '5%',
          }}
        />
      </View>
      <View style={{
        marginTop: 50
      }}>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.s4,
            }}>
            Email
          </Text>
          <TextInput
            placeholder="example@gmail.com"
            placeholderTextColor={colors.placeHoder}
            style={{
              fontSize: fontSizes.s4,
              borderBottomColor: colors.placeHoder,
              borderBottomWidth: 2,
            }}></TextInput>
        </View>
        <View
          style={{
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              fontSize: fontSizes.s4,
            }}>
            Password
          </Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor={colors.placeHoder}
            style={{
              fontSize: fontSizes.s4,
              borderBottomColor: colors.placeHoder,
              borderBottomWidth: 2,
            }}></TextInput>
        </View>
      </View>
      <View
        style={{
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            alert('Login');
          }}
          style={{
            backgroundColor: colors.primary,
            width: 230,
            height: 45,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: fontSizes.s2,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            alert('register');
          }}
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              color: colors.primary,
              fontSize: fontSizes.s5,
              fontWeight: '500',
            }}>
            New user? Register now
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{
        marginTop: 50
      }}>
        <View
          style={{
            flexDirection: 'row',
            height: 30,
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              height: 1,
              backgroundColor: 'black',
              flex: 1,
            }}></View>
          <Text
            style={{
              marginHorizontal: 10,
              fontSize: fontSizes.s4
            }}>
            Use other methods
          </Text>
          <View
            style={{
              height: 1,
              backgroundColor: 'black',
              flex: 1,
            }}></View>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10
          }}>
          <View
            style={{
              backgroundColor: 'blue',
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              marginHorizontal: 5
            }}>
            <Icon name="facebook" size={25} color="white" />
          </View>
          <View
            style={{
              backgroundColor: 'red',
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              marginHorizontal: 5
            }}>
            <Icon name="google" size={25} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}
export default Login;