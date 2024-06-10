import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onPayment: () => void;
  onProfile: () => void;
  onCart: () => void;
};

const HeaderAppbar = (props: Props) => {
  return (
    <View
      style={{
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
      }}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/image/logo.png')}
          style={{width: 150, height: 150}}
        />
      </View>
      <Text style={{color:'black'}}>Xin chào: Nguyen Van A</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <TouchableOpacity onPress={props.onCart}>
          <Icon
            name="cart-outline"
            size={24}
            color={'black'}
            style={{marginHorizontal: 8}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPayment}>
          <Icon
            name="cash-outline"
            size={24}
            color={'black'}
            style={{marginHorizontal: 8}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onProfile}>
          <Icon
            name="person-circle-outline"
            size={24}
            color={'black'}
            style={{marginHorizontal: 8}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderAppbar;
