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
  ScrollView,
  FlatList
} from 'react-native';
import {images, icons, colors, fontSizes} from '../../constants';
import {WelcomeButton} from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import FoodItem from './FoodItem';
import { 
    isValidEmail,
    isValidPassword,
    isValidConfirm,
    isValidUsername
} from '../../utilies/Validations';
function FoodList(props) {
    const [foods, setFood] = useState([
        {
            name: 'Bun bo gio heo sieu ngon hap dan',
            status: 'Opening Now',
            price: 100000,
            url: 'https://i.pinimg.com/736x/f4/41/e4/f441e4d163c5cc83ce64f29098ad34fa.jpg'
        },
        {
            name: 'Hu tieu',
            status: 'Opening Soon',
            price: 25000,
            url: 'https://i.pinimg.com/736x/1d/bb/a8/1dbba8ec5b80ff6659c56c9a6056aec7.jpg'
        },
        {
            name: 'Banh mi chao',
            status: 'Opening Soon',
            price: 35000,
            url: 'https://i.pinimg.com/736x/c2/c4/17/c2c41798d687dcbafe15b93642ca1896.jpg'
        },
        {
            name: 'Bun dau mam tom',
            status: 'Opening Now',
            price: 50000,
            url: 'https://i.pinimg.com/736x/dc/1c/32/dc1c32e01924013fb6a740651f3f5b8f.jpg'
        },
        {
            name: 'Nem nuong',
            status: 'Opening Now',
            price: 70000,
            url: 'https://i.pinimg.com/736x/8f/25/79/8f257963f783b8451e0241d3486fd7c6.jpg'
        },
        {
            name: 'Bun cha',
            status: 'out of stock',
            price: 30000,
            url: 'https://i.pinimg.com/736x/37/c8/4e/37c84edb584a18d14c89bf4f41af9bb2.jpg'
        },
        {
            name: 'Com tam',
            status: 'out of stock',
            price: 35000,
            url: 'https://i.pinimg.com/736x/73/ed/94/73ed9464b233e06a428c7cad74fa5af8.jpg'
        },
    ])
    const [searchText, setSearchText] = useState('')
    const fillteredFoods = () => foods.filter(eachFood => eachFood.name.toLowerCase().includes(searchText.toLowerCase()))
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
        <View style={{height: 35}}></View>
        <View
          style={{
            height: 60,
            marginHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            name="search"
            size={15}
            color={colors.text}
            style={{
              position: 'absolute',
              left: 10,
            }}
          />
          <TextInput
            autoCorrect={false}
            onChangeText={text => {
              setSearchText(text);
            }}
            style={{
              backgroundColor: colors.textInput,
              height: 40,
              flex: 1,
              marginRight: 10,
              borderRadius: 8,
              paddingStart: 35,
            }}></TextInput>
          <Icon name="bars" size={30} color={colors.text} />
        </View>
        <View style={{
            height: '100%'
        }}>
          {/* <ScrollView>
                {foods.map(eachFood => 
                    <FoodItem food = {eachFood}
                    key={eachFood.name}/>)}
            </ScrollView> */}
        {fillteredFoods().length > 0 ? (
          <FlatList
            data={fillteredFoods()}
            renderItem={({item}) => (
              <FoodItem
                onPress={() => {
                  alert(item.name);
                }}
                food={item}
                key={item.name}
              />
            )}
            keyExtractor={eachFood => eachFood.name}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.primary,
                fontSize: fontSizes.s2,
              }}>
              No food found
            </Text>
          </View>
        )}
        </View>
      </View>
    );
}
export default FoodList