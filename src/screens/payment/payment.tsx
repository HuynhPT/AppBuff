import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import { routerName } from '../../../App';

type Props = {
  navigation: any;
};

const PaymentScreens = (props: Props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 50, backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 24,
            paddingHorizontal: 12,
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{flex: 1}}>
            <Icon name="arrow-back" size={24} color={'black'} />
          </TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
            NẠP TIỀN NGÂN HÀNG, VÍ ĐIỆN TỬ
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(routerName.historyPayment)}
            style={{flex: 1,alignItems:'flex-end'}}>
            <Icon name="hourglass" size={24} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              shadowColor: 'black',
              shadowOpacity: 0.26,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 10,
              elevation: 3,
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'red',
              }}>
              CHÚ Ý
            </Text>
            <Text style={styles.textNote}>- Nạp tối thiểu 10.000 vnđ.</Text>
            <Text style={styles.textNote}>
              - Vui lòng nạp tiền, chuyển tiền đúng nội dung để được xử lý nhanh
              nhất.
            </Text>
            <Text style={styles.textNote}>
              - Nếu sau 30 phút từ khi tiền trong tài khoản của bạn bị trừ mà
              vẫn chưa được cộng tiền vui lòng liên hệ quản trị viên để được hỗ
              trợ.
            </Text>
            <Text style={styles.textNote}>
              - Nạp số tiền dưới mức tối thiểu không hỗ trợ.
            </Text>
            <Text style={styles.textNote}>
              - Nạp sai cú pháp, sai nội dung chuyển tiền sẽ bị trừ phí giao
              dịch 10.000vnđ. Vd: nạp 100k sai nội dung sẽ chỉ nhận được 90k
              coin và phải liên hệ quản trị để để cộng.
            </Text>
          </View>
          <View
            style={{
              shadowColor: 'black',
              shadowOpacity: 0.26,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 10,
              elevation: 3,
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 20,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/image/qr_code.png')}
              style={{width: 200, height: 200}}
              resizeMode="center"
            />
            <Text>
              Số tài khoản
              <Text>: 0358761441</Text>
            </Text>
            <Text>
              Chủ tài khoản
              <Text>: DO DANG HUYNH</Text>
            </Text>
            <Text>
              Ngân hàng
              <Text>: TPBank</Text>
            </Text>
            <Text>
              Nội dung nạp
              <Text>: NAP _ Số điện thoại</Text>
            </Text>
          </View>

          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'blue',
              textAlign: 'center',
              paddingVertical: 12,
            }}>
            Hoặc
          </Text>

          <View
            style={{
              shadowColor: 'black',
              shadowOpacity: 0.26,
              shadowOffset: {width: 0, height: 2},
              shadowRadius: 10,
              elevation: 3,
              backgroundColor: 'white',
              paddingHorizontal: 12,
              paddingVertical: 20,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/image/qr_momo.png')}
              style={{width: 200, height: 200}}
              resizeMode="center"
            />
            <Text>
              Số tài khoản
              <Text>: 0358761441</Text>
            </Text>
            <Text>
              Chủ tài khoản
              <Text>: DO DANG HUYNH</Text>
            </Text>
            <Text>
              Ví điện tử
              <Text>: Momo</Text>
            </Text>
            <Text>
              Nội dung nạp
              <Text>: NAP _ Số điện thoại</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PaymentScreens;
