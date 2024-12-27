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
import {images, icons, colors, fontSizes} from '../constants';
import {WelcomeButton} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { isValidEmail,isValidPassword } from '../utilies/Validations';
function Login(props) {
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isValidationOK = ()=>
    email.length > 0 && password.length > 0
    && isValidEmail(email) == true
    && isValidPassword(password) == true
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
          Welcome Back!
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
        marginTop: 10
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
            onChangeText={(email)=>{
              setErrorEmail(
                isValidEmail(email) == true ? 
                  '' : 'Email not in correct format')
              setEmail(email)
            }}  
            placeholder="example@gmail.com"
            placeholderTextColor={colors.placeHoder}
            style={{
              fontSize: fontSizes.s4,
              borderBottomColor: colors.placeHoder,
              borderBottomWidth: 2,
            }}></TextInput>
          <Text style={{
            color: 'red',
            marginTop: 5,
            fontSize: fontSizes.s6,
          }}>
            {errorEmail}
          </Text>
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
            onChangeText={(password)=> {
              if(isValidPassword(password) == true){
                setErrorPassword('')
              }else{
                if (password.length < 6 || password.length > 15) {
                  setErrorPassword('Password must be 6 to 15 characters long.') ;
                }
                if (!/[@.#$!%*?&]/.test(password)) {
                  setErrorPassword ('Password must contain at least one special character (@.#$!%*?&).');
                }
                if (!/\d/.test(password)) {
                  setErrorPassword ('Password must contain at least one number.');
                }
                if (!/[a-z]/.test(password)) {
                  setErrorPassword ('Password must contain at least one lowercase letter.');
                }
                if (!/[A-Z]/.test(password)) {
                  setErrorPassword ('Password must contain at least one uppercase letter.');
                }
              }
              setPassword(password)
            }}
            secureTextEntry={true}
            placeholder="Enter your password"
            placeholderTextColor={colors.placeHoder}
            style={{
              fontSize: fontSizes.s4,
              borderBottomColor: colors.placeHoder,
              borderBottomWidth: 2,
            }}></TextInput>
          <Text style={{
            color: 'red',
            marginTop: 5,
            fontSize: fontSizes.s6,
          }}>
            {errorPassword}
          </Text>
        </View>
        
      </View>
      <View
        style={{
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          disabled = {isValidationOK() == false}
          onPress={() => {
            alert(`email = ${email}, password = ${password}`);
          }}
          style={{
            backgroundColor: isValidationOK() == false? colors.placeHoder : colors.primary,
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