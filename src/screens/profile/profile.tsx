import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import NormalHeader from '../../components/normal_header/normal_header';
import Icon from 'react-native-vector-icons/Ionicons';
import {routerName} from '../../../App';

type Props = {
  navigation: any;
};

const ProfileScreens = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <NormalHeader
        navigation={props.navigation}
        title={'Thông tin cá nhân'}
        trailing={
          <TouchableOpacity
            style={{paddingRight: 8}}
            onPress={() => {props.navigation.navigate(routerName.auth)}}>
            <Icon name="log-in-outline" size={24} color={'black'} />
          </TouchableOpacity>
        }
      />
      <Text>ProfileScreens</Text>
    </View>
  );
};

export default ProfileScreens;
