import { View, Text, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>IncredibleToDoListApp</Text>
        <Text style={styles.subtitle}>Sukhdeep Singh</Text>
        <Text style={styles.date}>27-11-2024</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
    color: '#666',
  },
  date: {
    fontSize: 16,
    color: '#999',
  },
});

export default AboutScreen;