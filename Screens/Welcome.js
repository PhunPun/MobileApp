import React from 'react';
import { 
    Text, 
    View, 
    Image, 
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { images, icons} from '../constants';
function Welcome(props){
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
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
                }}
            >
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
                    fontSize: 15,
                    color: 'white',
                    fontWeight: '500'                  
                }}>
                Eat together
              </Text>
              <View style={{flex: 1}}></View>
              <Image
                source={icons.icon_ask}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'white',
                  marginEnd: 10,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 25,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
                <Text 
                    style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: '300'
                    }}
                >Welcome to</Text>
                <Text
                    style={{
                        fontSize: 25,
                        color: 'white',
                        fontWeight: 'bold'
                    }}
                >Eat together!</Text>
                <Text
                    style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: ''
                    }}
                >Please select your account type </Text>
            </View>
          <View
            style={{
              flex: 50,
              backgroundColor: 'green',
            }}>
                <TouchableOpacity style={{
                    borderBlockColor: 'white',
                    borderWidth: 1,
                    height: 40,
                    borderRadius: 10,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text
                        style={{
                            fontSize: 15,
                            color: 'white',
                            fontWeight: '800'
                        }}
                    >Influencer</Text>
                </TouchableOpacity>
            </View>
          <View
            style={{
              flex: 15,
              backgroundColor: 'grey',
            }}></View>
        </ImageBackground>
      </View>
    );
}
export default Welcome