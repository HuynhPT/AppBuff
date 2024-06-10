import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  navigation: any;
  title: string;
  trailing?: any;
};

const NormalHeader = (props: Props) => {
  return (
    <View style={{height: 50, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 18,
          paddingHorizontal: 12,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{flex: 1}}>
          <Icon name="arrow-back" size={24} color={'black'} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
          {props.title}
        </Text>
        <View style={{flex: 1, alignItems:'flex-end'}}>
          {props.trailing != undefined ? props.trailing : null}
        </View>
      </View>
    </View>
  );
};

export default NormalHeader;
