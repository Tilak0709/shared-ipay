import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PaymentConfirmationPage = () => {
  const route = useRoute();
  const { contact } = route.params;

  const handleConfirmPayment = () => {
    // Handle the payment confirmation logic here
    alert(`Payment successful to ${contact.name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Payment</Text>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{contact.name}</Text>
        <Text style={styles.contactInfoText}>Phone: {contact.contact}</Text>
        <Text style={styles.contactInfoText}>UPI ID: {contact.upiId}</Text>
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
        <Text style={styles.buttonText}>Confirm Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  contactInfo: {
    marginBottom: 20,
    alignItems: 'center',
  },
  contactName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  contactInfoText: {
    fontSize: 14,
    color: '#888',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentConfirmationPage;
