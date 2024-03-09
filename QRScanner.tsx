import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MyScanner = () => {
  const [scannedData, setScannedData] = useState('No QR Code scanned');

  const handleOnRead = e => {
    setScannedData(e.data); // Set scanned data to state
    console.log(e.data);
  };

  return (
    <View style={styles.container}>
      <QRCodeScanner 
        onRead={handleOnRead}
        reactivate = {true}
        reactivateTimeout={4000}
        />
      <Text style={styles.textStyle}>{scannedData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.white,
    fontSize: 16,
    margin: 20,
  },
});

export default MyScanner;
