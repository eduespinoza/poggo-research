import React from 'react';
import { Button, View, Platform} from 'react-native';

const MainPage = ({ navigation }) => {
    const ss = Platform.OS;
  return (
    <View>
      <Button
        title="Go to SCAN QR PAGE"
        onPress={() => navigation.navigate('NewPage')}
      />
      <Button
        title="Go to GEN QR PAGE"
        onPress={() => navigation.navigate('GenQRPage')}
      />
    </View>
  );
};

export default MainPage;
