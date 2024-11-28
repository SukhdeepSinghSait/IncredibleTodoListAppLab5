import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>000916146</Text>
    </View>
  );
};

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    alignSelf: 'center',
    paddingTop: 10,
    justifyContent: 'flex-end',
  },
});

export default MainLayout;