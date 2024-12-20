import React, { useState } from 'react';
import { 
  View, 
  Text,
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  RefreshControl
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const HomePage = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  const [refreshing, setRefreshing] = useState(false);

  const onProfilePress = () => {
    navigation.navigate('Profile'); // Navigate to Profile screen
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  const recentContacts = [
    { id: '1', name: 'John', photo: null },
    { id: '2', name: 'Sarah', photo: null },
    { id: '3', name: 'Mike', photo: null },
    { id: '4', name: 'Emma', photo: null },
  ];

  const quickServices = [
    { id: '1', name: 'Scan QR', source: require('../../assets/qr.png') },
    { id: '2', name: 'Send Money', source: require('../../assets/dollar.png') },
    { id: '3', name: 'Mobile Recharge', source: require('../../assets/mobile.png') },
    { id: '4', name: 'Pay Bills', source: require('../../assets/bill.png') },
    { id: '5', name: 'DTH', source: require('../../assets/online.png') },
    { id: '6', name: 'Electricity', source: ('../../assets/electricity.png') },
    { id: '7', name: 'FASTag', source: ('../../assets/fastag.png') },
    { id: '8', name: 'More', source: ('../../assets/more.png') },
  ];
  const offerBanners = [
    { id: '1', title: '20% Cashback', description: 'on Movie Tickets' },
    { id: '2', title: '₹50 Off', description: 'on DTH Recharge' },
    { id: '3', title: '5% Rewards', description: 'on Bill Payments' },
  ];

  const rewardCards = [
    { id: '1', type: 'Cashback', amount: '₹50', description: 'Earned Today' },
    { id: '2', type: 'Rewards', points: '1,250', description: 'Available Points' },
    { id: '3', type: 'Scratchcards', count: '3', description: 'Unclaimed' },
  ];

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.headerRight}>
        <View>
          <Text style={styles.userName}>iPAY</Text>
        </View>
      </View>
  
      <View style={styles.headerLeft}>
      {/* Combine profile icon and profile image into a single container */}
      <TouchableOpacity style={styles.profileContainer} onPress={onProfilePress}>
       
        <Image
          source={require('../../assets/profile.png')} // Replace with your image path or URL
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  </View>
);
  

const renderBalanceCard = () => (
  <LinearGradient
    colors={['#29007b', '#f100c5']}
    style={styles.balanceCard}
  >
    <View style={styles.balanceHeader}>
      <Text style={styles.balanceTitle}>Available Balance</Text>
      <TouchableOpacity onPress={() => alert('Add Money')}>
        <Text style={styles.addMoneyButton}>+ Add Money</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.balanceAmount}>₹10,245.50</Text>
    <View style={styles.balanceFooter}>
      <TouchableOpacity
        style={[styles.balanceAction, styles.button]}
        onPress={() => alert('History Button Pressed')}
      >
        <Text style={styles.balanceActionText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.balanceAction, styles.button]}
        onPress={() => alert('Send Button Pressed')}
      >
        <Text style={styles.balanceActionText}>Send</Text>
      </TouchableOpacity>
    </View>
  </LinearGradient>
);

  const renderRecentContacts = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Recent Contacts</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recentContacts.map((contact) => (
          <TouchableOpacity key={contact.id} style={styles.contactItem}>
            <View style={styles.contactPhoto}>
              {/* Using a placeholder user image */}
              <Image 
                source={contact.photo || require('../../assets/user.png')} // Use the user.png image as a fallback
                style={styles.contactImage}
              />
            </View>
            {/* Display the contact name below the image */}
            <Text style={styles.contactName}>{contact.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
  

  const renderQuickServices = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Services</Text>
      <View style={styles.servicesGrid}>
        {quickServices.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceItem}
            onPress={() => {
              // Check if service is 'Scan QR' and navigate accordingly
              if (service.name === 'Scan QR') {
                navigation.navigate('ScanQR'); // Navigate to the QR scanner screen
              } else if (service.name === 'Send Money') {
                // Add navigation to Send Money screen if needed
                navigation.navigate('SendMoney'); // Assuming the SendMoney screen exists
              } else {
                alert(`Opening ${service.name}`);
              }
            }}
          >
            <View style={styles.serviceIcon}>
              <Image source={service.source} style={styles.serviceImage} />
            </View>
            <Text style={styles.serviceName}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
  
  const renderOfferBanners = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Offers & Rewards</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {offerBanners.map((offer) => (
          <LinearGradient
            key={offer.id}
            colors={['#FF6B6B', '#FF8E53']}
            style={styles.offerBanner}
          >
            <Text style={styles.offerTitle}>{offer.title}</Text>
            <Text style={styles.offerDescription}>{offer.description}</Text>
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );

  

  const renderRewardCards = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Your Rewards</Text>
      <View style={styles.rewardsContainer}>
        {rewardCards.map((reward) => (
          <TouchableOpacity key={reward.id} style={styles.rewardCard}>
            <Text style={styles.rewardAmount}>
              {reward.amount || reward.points || reward.count}
            </Text>
            <Text style={styles.rewardDescription}>{reward.description}</Text>
            <Text style={styles.rewardType}>{reward.type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const renderPiggiBankBanner = () => (
    <LinearGradient
      colors={['#00b4d8', '#90e0ef']} // New color scheme (blue shades)
      style={styles.bannerLarge}
    >
      <Text style={styles.bannerTitle}>Introducing IRISpay Piggi Bank</Text>
      <Text style={styles.bannerDescription}>
        First of its kind where students can save money and get interest on their savings.
      </Text>
    </LinearGradient>
  );

  const renderBillReminders = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Bill Reminders</Text>
      <TouchableOpacity style={styles.billCard}>
        <Icon name="bolt" size={24} color="#4c669f" />
        <View style={styles.billInfo}>
          <Text style={styles.billTitle}>Electricity Bill Due</Text>
          <Text style={styles.billAmount}>₹1,245</Text>
        </View>
        <TouchableOpacity style={styles.payNowButton}>
          <Text style={styles.payNowText}>Pay Now</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {renderHeader()}
      {renderBalanceCard()}
      {renderRecentContacts()}
      {renderQuickServices()}
      {renderOfferBanners()}
      {renderPiggiBankBanner()} 
      {renderRewardCards()}
      {renderBillReminders()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', 
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1a1a1a',
    marginBottom: 16,
  },
  headerLeft: {
    fontSize: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  welcomeText: {
    color: '#FFF',
    fontSize: 14,
  },
  userName: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileIcon: {
    marginRight: 15,
  },
  imageContainer: {
    width: 50,  // Fixed size for the container
    height: 50, // Fixed size for the container
    borderRadius: 25, // Circular shape
    overflow: 'hidden', // Ensure the image is clipped to the container
  },
  profileImage: {
    width: 50,  // Fixed width
    height: 50, // Fixed height
    borderRadius: 25, // Keep the image circular
    resizeMode: 'cover', // Ensures the image fits properly within the container
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  balanceCard: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'transparent',
    marginBottom: 16,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addMoneyButton: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  balanceAmount: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 16,
  },
  balanceFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  balanceAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceActionText: {
    color: '#FFF',
    marginLeft: 8,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#1a1a1a', 
    borderRadius: 8,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  contactItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  contactPhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  contactName: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  serviceImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '23%',
    backgroundColor: 'transparent',
    paddingVertical: 16,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  serviceIcon: {
    backgroundColor: '#444',
    color : '#FFF',
    padding: 12,
    borderRadius: 20,
    marginBottom: 8,
  },
  serviceName: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  offerBanner: {
    width: 200,
    padding: 16,
    marginRight: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  offerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  offerDescription: {
    color: '#FFF',
    fontSize: 14,
  },
  
  rewardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  rewardCard: {
    width: '48%',
    backgroundColor: '#4c669f',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  rewardAmount: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardDescription: {
    color: '#FFF',
    fontSize: 14,
  },
  rewardType: {
    color: '#FFF',
    fontSize: 12,
    fontStyle: 'italic',
  },
  bannerLarge: {
    width: '100%', // Make the Piggi Bank banner take up full width
    padding: 30, // Larger padding for the bigger banner
    marginBottom: 25,
    
    borderRadius: 25, // Optional: You can adjust the border radius
    backgroundColor: 'transparent', // Make sure the background is transparent so LinearGradient applies
    marginTop: 16,
  },
  bannerTitle: {
    
    fontSize: 32,

  },
  bannerDescription: {
    color: '#FFF',
    fontSize: 12,

  },
  
  billCard: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  billInfo: {
    flex: 1,
    marginLeft: 12,
  },
  billTitle: {
    color: '#FFF',
    fontSize: 14,
  },
  billAmount: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  payNowButton: {
    backgroundColor: '#f100c5',
    padding: 8,
    borderRadius: 8,
  },
  payNowText: {
    color: '#FFF',
    fontSize: 14,
  },
});

export default HomePage;
