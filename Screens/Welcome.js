import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import {images, icons, colors, fontSizes} from '../constants';
import {WelcomeButton} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome';
function Welcome(props) {
  const [accountTypes, setAccountTypes] = useState([
    {
      name: 'Influencer',
      isSelected: true,
    },
    {
      name: 'Business',
      isSelected: false,
    },
    {
      name: 'Individual',
      isSelected: false,
    }
  ])
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="white-content"
      />
      <ImageBackground
        source={images.backgroundWelcom}
        resizeMode="cover"
        style={{
          flex: 100,
        }}>
        <View
          style={{
            flex: 10,
          }}>
          <View
            style={{
              height: 50,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Image
              source={icons.icon_fire}
              style={{
                width: 40,
                height: 40,
                marginStart: 10,
                marginEnd: 5,
              }}
            />
            <Text
              style={{
                fontSize: fontSizes.s5,
                color: 'white',
                fontWeight: '500',
              }}>
              Eat together
            </Text>
            <View style={{flex: 1}}></View>
            <Icon
              name={'question-circle'}
              style={{
                color: 'white',
                fontSize: fontSizes.s4,
                marginEnd: 10,
              }}
            />
            {/* <Image
              source={icons.icon_ask}
              style={{
                width: 20,
                height: 20,
                tintColor: 'white',
                marginEnd: 10,
              }}
            /> */}
          </View>
        </View>
        <View
          style={{
            flex: 35,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: fontSizes.s3,
              color: 'white',
              fontWeight: '300',
            }}>
            Welcome to
          </Text>
          <Text
            style={{
              fontSize: fontSizes.s1,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Eat together!
          </Text>
          <Text
            style={{
              fontSize: fontSizes.s3,
              color: 'white',
              fontWeight: '',
            }}>
            Please select your account type{' '}
          </Text>
        </View>
        <View
          style={{
            flex: 35,
          }}>
          {accountTypes.map(accountType => (
            <WelcomeButton
              onPress={() => {
                let newAccountTypes = accountTypes.map(eachAccountTypes => {
                  return {
                    ...eachAccountTypes,
                    isSelected: eachAccountTypes.name == accountType.name,
                  };
                });
                setAccountTypes(newAccountTypes);
              }}
              title={accountType.name}
              isSelected={accountType.isSelected}
            />
          ))}
        </View>
        <View
          style={{
            flex: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              alert('Login')
            }}
            style={{
              borderColor: 'white',
              borderWidth: 1,
              height: 40,
              borderRadius: 10,
              marginHorizontal: 20,
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.primary,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontWeight: '500',
                textShadowColor: 'black',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 2,
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: fontSizes.s5,
              color: 'white',
              fontWeight: '600',
              alignSelf: 'center',
              textShadowColor: 'black',
              textShadowOffset: {width: 1, height: 1},
              textShadowRadius: 3,
            }}>
            Want to register new Account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              alert('Register')
            }}
          >
            <Text
              style={{
                fontSize: fontSizes.s5,
                color: 'white',
                fontWeight: '600',
                alignSelf: 'center',
                textDecorationLine: 'underline',
                textShadowColor: 'black',
                textShadowOffset: {width: 1, height: 1},
                textShadowRadius: 3,
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
export default Welcome;
