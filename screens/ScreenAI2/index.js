import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>About Crowdbotics</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          Crowdbotics is a software development platform that enables businesses to build applications with speed, quality, and cost-efficiency. We provide the tools and resources needed to build, deploy, and scale your application.
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  content: {
    padding: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666'
  }
});
export default AboutScreen;