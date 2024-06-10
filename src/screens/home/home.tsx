import {View, Text, TouchableOpacity, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import HeaderAppbar from '../../components/header/header';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
import {routerName} from '../../../App';
import ItemCardMoney from '../../components/item_card_home/item_card_money';

type Props = {
  navigation: any;
};

const HomeScreens = (props: Props) => {
  const navigation = props.navigation;
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    // Tắt k cho back lại
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  function goPayment() {
    navigation.navigate(routerName.payment);
  }
  return (
    <View style={{flex: 1}}>
      <HeaderAppbar
        onPayment={() => {
          navigation.navigate(routerName.payment);
        }}
        onProfile={() => navigation.navigate(routerName.profile)}
        onCart={() => props.navigation.navigate(routerName.cart)}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
            marginHorizontal: 12,
          }}>
          <ItemCardMoney
            onPress={goPayment}
            title="Số dư hiện tại"
            sourceLottie={require('../../assets/lottie/coin.json')}
            money={100000000}
          />
          <View style={{width: 12}} />
          <ItemCardMoney
            onPress={goPayment}
            title="Tổng tiền nạp"
            sourceLottie={require('../../assets/lottie/sumCoin.json')}
            money={19990000}
          />
          <View style={{width: 12}} />
          <ItemCardMoney
            onPress={goPayment}
            title="Số tiền đã chi"
            sourceLottie={require('../../assets/lottie/paycoin.json')}
            money={19990000}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default HomeScreens;
