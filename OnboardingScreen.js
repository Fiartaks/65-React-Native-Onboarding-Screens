import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, StatusBar } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  const animatedValue = useRef(new Animated.Value(1)).current;

  const handlePress = (screen) => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.8,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start(() => navigation.navigate(screen));
  };

  const animatedButtonStyle = {
    transform: [{ scale: animatedValue }],
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image source={require('./assets/ebru4.jpg')} style={styles.image} />
      
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Your Adventure!</Text>
        <Text style={styles.subtitle}>Discover amazing possibilities ahead.</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => handlePress('Onboarding')}
        >
          <Animated.Text style={[styles.buttonText, animatedButtonStyle]}>Get Started</Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => handlePress('Login')}
        >
          <Animated.Text style={[styles.buttonText, animatedButtonStyle]}>Log In</Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handlePress('Home')} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.indicators}>
          <View style={styles.indicatorActive} />
          <View onPress={() => handlePress('Home')} style={styles.indicator} />
          <View style={styles.indicator} />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.65)', // Daha koyu yarı saydam
  },
  content: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF7979', // Dikkat çekici bir renk
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '70%',
    alignItems: 'center',
    elevation: 5, // Gölgelendirme
  },
  loginButton: {
    backgroundColor: '#55EBA0', // Farklı bir estetik renk
    padding: 15,
    borderRadius: 10,
    width: '70%',
    alignItems: 'center',
    elevation: 5, // Gölgelendirme
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  skipButton: {
    marginTop: 20,
  },
  skipText: {
    color: 'white',
    fontWeight: 'bold',
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    margin: 4,
  },
  indicatorActive: {
    height: 10,
    width: 10,
    borderRadius:4,
    backgroundColor: '#FF7979', // Aktif indikatör rengi
    margin: 4,
  },
});