import React from 'react';
import { Button, View } from 'react-native';

const MainPage = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to New Page"
        onPress={() => navigation.navigate('NewPage')}
      />
    </View>
  );
};

export default MainPage;
