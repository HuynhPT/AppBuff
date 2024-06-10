import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import LottieView, {AnimationObject} from 'lottie-react-native';

type Props = {
  onPress: () => void;
  title: string;
  money: number;
  sourceLottie?:
    | string
    | AnimationObject
    | {
        uri: string;
      }
    | undefined;
};

const ItemCardMoney = (props: Props) => {
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
    <TouchableOpacity style={styles.itemCard} onPress={props.onPress}>
      <View style={styles.itemMoney}>
        <LottieView
          source={props.sourceLottie}
          autoPlay
          loop
          style={styles.animationView}
        />
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={styles.textMoney}>{formatTien(props.money)}</Text>
        </View>
      </View>
      <Text style={styles.textItemCard}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  itemCard: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    flex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    paddingVertical: 8,
  },
  animationView: {
    width: 40,
    height: 40,
  },
  itemMoney: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  textItemCard: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  textMoney: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
  },
});
export default ItemCardMoney;
