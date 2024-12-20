import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const ScanQRPage = () => {
  const navigation = useNavigation();
  const [scanned, setScanned] = useState(false);

  const onSuccess = (e: any) => {
    setScanned(true);
    // Show the QR code value in an alert (you can process the QR code value further)
    Alert.alert('QR Code Scanned!', `QR Code Data: ${e.data}`);
  };

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const handleScanAgain = () => {
    setScanned(false); // Reset the scanned state
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Icon name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan QR Code</Text>
        <View style={styles.headerRight} />
      </View>

      {/* QR Code Scanner */}
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <Text style={styles.centerText}>
            Scan the QR code to proceed with the payment or link your account.
          </Text>
        }
        bottomContent={
          <LinearGradient colors={['#29007b', '#f100c5']} style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Align QR code inside the frame</Text>
            {scanned ? (
              <TouchableOpacity style={styles.scanButton} onPress={handleScanAgain}>
                <Text style={styles.scanButtonText}>Scan Again</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.scanButton} disabled>
                <Text style={styles.scanButtonText}>Scanning...</Text>
              </TouchableOpacity>
            )}
          </LinearGradient>
        }
        reactivate={true}
        showMarker={true}
        cameraStyle={styles.cameraStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1a1a1a',
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerRight: {
    width: 40,
  },
  centerText: {
    color: '#FFF',
    fontSize: 18,
    padding: 16,
    textAlign: 'center',
  },
  cameraStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 30,
  },
  bottomText: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  scanButton: {
    backgroundColor: '#f100c5',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  scanButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ScanQRPage;
