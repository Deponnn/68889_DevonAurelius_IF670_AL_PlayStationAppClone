import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

const NotificationScreen = ({ navigation }) => {
 
  const notifications = [
    { id: '1', title: 'New update available', message: 'Version 2.0 is now available. Update now!', date: '31/01/2023' },
    { id: '2', title: 'New message', message: 'You have a new message from your friend.', date: '28/01/2023' },
    { id: '3', title: 'Game offer', message: 'Get 30% off on your next game purchase!', date: '25/01/2023' },
  ];

  // No notifications message
  const noNotifications = notifications.length === 0;

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
      <Text style={styles.notificationDate}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.headerText}>Notifications</Text>

      {/* Notification List or "No Notifications" message */}
      {noNotifications ? (
        <View style={styles.noNotificationsContainer}>
          <Image source={require('./assets/notification-icon.png')} style={styles.bellIcon} />
          <Text style={styles.noNotificationsText}>You don't have any notifications.</Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderNotificationItem}
          style={styles.notificationList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#003e96',
    borderRadius: 5,
    marginBottom: 20,
  },
  backText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  notificationTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationMessage: {
    color: '#b0b0b0',
    fontSize: 14,
    marginVertical: 5,
  },
  notificationDate: {
    color: '#b0b0b0',
    fontSize: 12,
  },
  notificationList: {
    marginTop: 20,
  },
  noNotificationsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  noNotificationsText: {
    color: 'white',
    fontSize: 18,
  },
});

export default NotificationScreen;
