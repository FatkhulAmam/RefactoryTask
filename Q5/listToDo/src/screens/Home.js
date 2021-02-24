import React from 'react';
import {StyleSheet, View, StatusBar, SafeAreaView, Image} from 'react-native';
import {Header, Body, Text} from 'native-base';
import Avatar from '../assets/images/avatar.png';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Header style={styles.header} transparent>
          <StatusBar translucent backgroundColor="#0442D0" />
          <Body style={styles.body}>
            <Image source={Avatar} style={styles.avatar} />
            <View>
              <Text style={styles.hallo}>Hallo, Sam!</Text>
              <Text style={styles.count}>2 Task For Today</Text>
            </View>
          </Body>
        </Header>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0442D0',
    height: 125,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 40,
  },
  hallo: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 20,
  },
  count: {
    color: '#FABE2C',
    fontSize: 25,
    marginLeft: 20,
    fontWeight: 'bold',
  },
});
