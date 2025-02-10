import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  StatusBar
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// SplashScreen'ı önceden gösterme
SplashScreen.preventAutoHideAsync();

export default function OnboardingScreen({ navigation }) {
  const [loaded, error] = useFonts({
    'Great-Vibes': require('./assets/fonts/great-vibes.ttf'),
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Eğer font yüklenmemişse hiçbir şey döndürme
  if (!loaded && !error) {
    return null;
  }

  const animatedValue = useRef(new Animated.Value(1)).current;
  
  // Animated value for image scale
  const imageScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Create a looped animation for zooming in and out
    Animated.loop(
      Animated.sequence([
        Animated.timing(imageScale, {
          toValue: 1.2,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(imageScale, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [imageScale]);

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

  const animatedImageStyle = {
    transform: [{ scale: imageScale }],
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.Image 
        source={require('./assets/ebru4.jpg')} 
        style={[styles.image, animatedImageStyle]} 
      />
      
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Discover amazing possibilities.</Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={() => handlePress('Home')}
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
          <View style={styles.indicator} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    fontSize: 74,
    marginBottom: 1,
    color: 'white',
    fontFamily: 'Great-Vibes',
  },
  subtitle: {
    fontSize: 29,
    marginBottom: 18,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Lobster-Regular',
  },
  button: {
    backgroundColor: '#FF7979',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '50%',
    alignItems: 'center',
    elevation: 5,
  },
  loginButton: {
    backgroundColor: '#55EBA0',
    padding: 15,
    borderRadius: 10,
    width: '50%',
    alignItems: 'center',
    elevation: 5,
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
    borderRadius: 4,
    backgroundColor: '#FF7979',
    margin: 4,
  },
});