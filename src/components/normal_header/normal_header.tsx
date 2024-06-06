import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  onBack: () => void;
  title: string;
};

const NormalHeader = (props: Props) => {
  return (
    <View style={{height: 50, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 24,
          paddingHorizontal: 12,
        }}>
        <TouchableOpacity onPress={props.onBack} style={{flex: 1}}>
          <Icon name="arrow-back" size={24} color={'black'} />
        </TouchableOpacity>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
          {props.title}
        </Text>
        <View style={{flex: 1}} />
      </View>
    </View>
  );
};

export default NormalHeader;
