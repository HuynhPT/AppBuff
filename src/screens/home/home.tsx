import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import HeaderAppbar from '../../components/header/header';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
import { routerName } from '../../../App';

type Props = {
  navigation: any;
};

const HomeScreens = (props: Props) => {
  const navigation = props.navigation;
  useEffect(() => {
    // Tắt k cho back lại
    navigation.addListener('beforeRemove', (e: any) => {
      e.preventDefault();
    });
  }, [navigation]);

  function format(n: number, currency: string) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + currency;
  }
  function formatTien(tien: number) {
    if (tien >= 1e12) {
      return tien / 1e12 + ' nghìn tỷ';
    } else if (tien >= 1e9) {
      return tien / 1e9 + ' tỷ';
    } else if (tien >= 1e6) {
      return tien / 1e6 + ' tr';
    } else {
      return format(tien, ' đ');
    }
  }
  return (
    <View style={{flex: 1}}>
      <HeaderAppbar  onPayment={()=>{
        navigation.navigate(routerName.payment)
      }}/>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 24,
            marginHorizontal: 12,
          }}>
          <View style={styles.itemCard}>
            <View style={styles.itemMoney}>
              <LottieView
                source={require('../../assets/lottie/coin.json')}
                autoPlay
                loop
                style={styles.animationView}
              />
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={styles.textMoney}>{formatTien(100000000)}</Text>
              </View>
            </View>
            <Text style={styles.textItemCard}>Số dư hiện tại</Text>
          </View>
          <View style={{width: 12}} />
          <View style={styles.itemCard}>
            <View style={styles.itemMoney}>
              <LottieView
                source={require('../../assets/lottie/sumCoin.json')}
                autoPlay
                loop
                style={[styles.animationView, {marginTop: -4, marginBottom: 8}]}
              />
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={styles.textMoney}>19990000</Text>
              </View>
            </View>
            <Text style={styles.textItemCard}>Tổng tiền nạp</Text>
          </View>
          <View style={{width: 12}} />
          <View style={styles.itemCard}>
            <View style={styles.itemMoney}>
              <LottieView
                source={require('../../assets/lottie/paycoin.json')}
                autoPlay
                loop
                style={[styles.animationView, {marginTop: -4, marginBottom: 8}]}
              />
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={styles.textMoney}>19990000</Text>
              </View>
            </View>
            <Text style={styles.textItemCard}>Số tiền đã chi</Text>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default HomeScreens;
