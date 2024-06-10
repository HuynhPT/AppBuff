import {View, Text} from 'react-native';
import React from 'react';
import NormalHeader from '../../../components/normal_header/normal_header';

type Props = {
  navigation: any;
};

const HistoryPaymentScreens = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <NormalHeader
        navigation={props.navigation}
        title="Lịch sử giao dịch"
      />
      <Text>HistoryPaymentScreens</Text>
    </View>
  );
};

export default HistoryPaymentScreens;
