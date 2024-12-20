import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SendMoneyPage = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [recentPayments, setRecentPayments] = useState([
    { id: '1', name: 'John Doe', contact: '9876543210', upiId: 'john.doe@upi' },
    { id: '2', name: 'Alice Smith', contact: '9988776655', upiId: 'alice.smith@upi' },
    { id: '3', name: 'Bob Johnson', contact: '9123456789', upiId: 'bob.johnson@upi' },
  ]);
  const [filteredContacts, setFilteredContacts] = useState(recentPayments);

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    if (text === '') {
      setFilteredContacts(recentPayments);
    } else {
      const filtered = recentPayments.filter(
        (contact) =>
          contact.contact.includes(text) || contact.upiId.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  };

  const handleContactSelect = (contact: any) => {
    navigation.navigate('PaymentConfirmation', { contact }); // Navigate to Payment Confirmation screen
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by phone number or UPI ID"
          value={searchQuery}
          onChangeText={handleSearchChange}
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Recent Payments */}
      <Text style={styles.recentPaymentsTitle}>Recent Payments</Text>
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.contactItem} onPress={() => handleContactSelect(item)}>
            <View style={styles.contactInfo}>
              <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.contactImage} />
              <View style={styles.contactDetails}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactInfoText}>{item.upiId}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark background
    padding: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#333333', // Darker input field
    paddingLeft: 16,
    fontSize: 16,
    color: '#ffffff', // White text for better contrast
  },
  recentPaymentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff', // White title for contrast
    marginBottom: 12,
  },
  contactItem: {
    backgroundColor: '#1f1f1f', // Slightly lighter dark background for the contact items
    marginBottom: 12,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Elevated shadow for a floating effect
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  contactDetails: {
    justifyContent: 'center',
  },
  contactName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff', // White text for the contact name
  },
  contactInfoText: {
    fontSize: 14,
    color: '#bbb', // Lighter gray for the secondary info
  },
});

export default SendMoneyPage;
