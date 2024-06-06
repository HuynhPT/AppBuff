import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {routerName} from '../../../App';

type Props = {
  navigation: any;
};

const SplashScreens = (props: Props) => {
  const navigation = props.navigation;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routerName.auth);
    }, 3000);
  }, []);
  return (
    <LottieView
      key={'splash'}
      source={require('../../assets/lottie/splash.json')}
      autoPlay
      loop
      style={{flex: 1}}
    />
  );
};

export default SplashScreens;
