import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import {routerName} from '../../../../App';
type Props = {
  navigation: any;
};
const AuthScreens = (props: Props) => {
  const navigation = props.navigation;
  const [isShowPass, setIsShowPass] = useState<boolean>(true);
  const [isRemember, setIsRemember] = useState<boolean>(true);
  useEffect(() => {
    // Tắt k cho back lại
    navigation.addListener('beforeRemove', (e: any) => {
      e.preventDefault();
    });
  }, [navigation]);

  function showPass() {
    setIsShowPass(!isShowPass);
  }
  function onLogin() {
    navigation.navigate(routerName.home);
  }
  function onForgot() {
    navigation.navigate(routerName.forgot);
  }
  function onRegister() {
    navigation.navigate(routerName.register);
  }

  return (
    <View style={{flex: 1}}>
      <LottieView
        source={require('../../../assets/lottie/splash.json')}
        autoPlay
        loop
        style={{flex: 1}}
      />
      <View style={{flex: 3, paddingHorizontal: 12}}>
        <View style={{alignItems: 'center', marginBottom: 32}}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: 'black'}}>
            Đăng Nhập
          </Text>
        </View>
        {/* Input nhập tài khoản, mật khẩu */}
        <View>
          <View>
            <Text style={styles.textInput}>Tài khoản</Text>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="person-sharp"
                size={24}
                color={'black'}
                style={{marginHorizontal: 12}}
              />
              <TextInput
                placeholder="Nhập tài khoản"
                style={{
                  width: Dimensions.get('window').width - 120,
                }}
              />
            </View>
          </View>
          <View style={{height: 24}} />
          <View>
            <Text style={styles.textInput}>Mật khẩu</Text>
            <View
              style={{
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 12,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="lock-closed-sharp"
                size={24}
                color={'black'}
                style={{marginHorizontal: 12}}
              />
              <TextInput
                placeholder="Nhập mật khẩu"
                secureTextEntry={isShowPass}
                style={{
                  width: Dimensions.get('window').width - 120,
                }}
              />
              <Icon
                onPress={() => {
                  showPass();
                }}
                name={isShowPass ? 'eye-off-sharp' : 'eye-sharp'}
                size={24}
                color={'black'}
                style={{marginHorizontal: 12}}
              />
            </View>
          </View>
        </View>
        {/* Quên mật khẩu và luu mật khẩu */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 16,
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsRemember(!isRemember);
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name={
                  isRemember
                    ? 'radio-button-on-sharp'
                    : 'radio-button-off-sharp'
                }
                size={24}
                color={'black'}
                style={{marginRight: 8}}
              />
              <Text style={{color: 'black'}}>Lưu mật khẩu</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onForgot}>
            <Text style={{color: 'black'}}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mButton}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'black'}]}
            onPress={onLogin}>
            <Text style={styles.textButton}>Đăng nhập</Text>
          </TouchableOpacity>
          <View style={{width: 20}} />
          <TouchableOpacity style={styles.button} onPress={onRegister}>
            <Text style={[styles.textButton, {color: 'black'}]}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthScreens;
