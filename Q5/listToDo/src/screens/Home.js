import React from 'react';
import {StyleSheet, View, StatusBar, SafeAreaView, Image} from 'react-native';
import {Header, Body, Text, Card, CardItem} from 'native-base';
import moment from 'moment';
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
      <View>
        <Text style={styles.date}>{moment().format('ddd, MMM Do YYYY')}</Text>
        <Card style={styles.cardNote} transparent>
          <View style={styles.note} />
          <Text style={styles.dayIndex}>S</Text>
          <Text style={styles.dateIndex}>14</Text>
        </Card>
        <View style={styles.line} />
        <View style={styles.Wraper}>
          <Text style={styles.task}>Task List</Text>
          <View style={styles.taskWraper}>
            <Text style={styles.hour}>09.00</Text>
            <Card style={styles.activity} transparent>
              <Text style={styles.activityTxt}>Daily Stand Up</Text>
              <Text style={styles.activityTime}>09.00 - 09.30</Text>
            </Card>
            <Card style={styles.comWrap} transparent>
              <Text style={styles.comTxt}>Complete</Text>
            </Card>
          </View>
        </View>
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
  date: {
    color: '#0442D0',
    fontSize: 20,
    margin: 15,
    fontWeight: 'bold',
  },
  cardNote: {
    width: 40,
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
    backgroundColor: 'rgb(4, 66, 208)',
  },
  note: {
    width: 8,
    height: 8,
    backgroundColor: '#FABE2C',
    borderRadius: 4,
  },
  dayIndex: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#fff',
  },
  dateIndex: {
    color: '#fff',
  },
  line: {
    width: 340,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 2,
    marginLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  Wraper: {
    margin: 15,
  },
  task: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  taskWraper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  hour: {
    fontWeight: 'bold',
    marginRight: 50,
    color: '#333333',
  },
  activity: {
    padding: 7,
    paddingRight: 20,
    paddingBottom: 15,
    borderRadius: 5,
    backgroundColor: 'rgba(112, 156, 255, 0.5)',
  },
  activityTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0442D0',
  },
  activityTime: {
    fontSize: 15,
    marginTop: 8,
    color: '#0442D0',
  },
  comWrap: {
    height: 20,
    width: 100,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 166, 173, 0.5)',
  },
  comTxt: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#ff0014',
  },
});
