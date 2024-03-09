import React from 'react';
import { Text, TextInput , SafeAreaView, StyleSheet, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg'


const GenQRPage = ({ navigation }) => {
    
    const [QRvalue, setQRValue] = React.useState('surprise!! your champion 🏆');
    const [QRLogo, setQRLogo] = React.useState('https://pbs.twimg.com/profile_images/1682694342165635076/jY1mCW81_400x400.jpg');
    const [QRImage, setQRImage] = React.useState('');
    const ref = React.useRef();

  return (
    <SafeAreaView>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Generate QRCode</Text>
      <View style={styles.row}>
        <TextInput 
          placeholder= "Add Value to QRCode"
          style={styles.textInput}
          autoCapitalize="none"
          value={QRvalue}
          onChangeText={setQRValue}
        />
        <TextInput 
          placeholder= "Add Logo URL"
          style={styles.textInput}
          autoCapitalize="none"
          value={QRLogo}
          onChangeText={setQRLogo}
        />
        </View>
    <QRCode
    size={350}
    value={QRvalue ? QRvalue : 'NA'}
    logo={{uri: QRLogo}}
    logoSize={60}
    logoBackgroundColor='transparent'
  />
  </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      textAlign: 'center',
    },
    highlight: {
      fontWeight: '700',
    },
    row: {
      flexDirection: 'row',
      marginTop: 10,
      },
    textInput: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      textAlign: 'center',
      marginRight: 20,
      marginVertical: 20,
      borderRadius: 20,
      width: 162,
      borderWidth: 1,
      borderStyle: 'solid',
    },
  });
  
export default GenQRPage;