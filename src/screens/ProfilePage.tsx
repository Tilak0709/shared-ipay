import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const ProfilePage = () => {
  const navigation = useNavigation(); // Initialize the navigation object
  const firstLetter = '?'; // Placeholder for user initials (could be dynamic if needed)

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()} // Navigate back to the previous screen
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImage}>
            <Text style={styles.profileInitial}>{firstLetter}</Text>
          </View>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileText}>+1 234 567 890</Text>
          <Text style={styles.profileText}>john.doe@example.com</Text>
        </View>

        {/* Net Balance */}
        <View style={styles.netBalanceSection}>
          <Text style={styles.netBalanceText}>Net Balance</Text>
          <Text style={styles.netBalanceAmount}>$0.00</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#2c2c2c',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: 'transparent',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  profileContainer: {
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
  },
  profileHeader: {
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e71300', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
  },
  profileInitial: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 26,
    color: '#00bbff',
    marginBottom: 5,
  },
  profileText: {
    fontSize: 16,
    color: '#bbb',
  },
  netBalanceSection: {
    backgroundColor: '#262626',
    padding: 20,
    borderRadius: 15,
    marginVertical: 30,
    alignItems: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
  },
  netBalanceText: {
    fontSize: 16,
    color: '#aaa',
  },
  netBalanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#04f500',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    color: '#1b1b1b',
    fontWeight: 'bold',
  },
});

export default ProfilePage;
