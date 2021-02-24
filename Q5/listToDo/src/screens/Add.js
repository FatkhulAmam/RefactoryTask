import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Header, Body} from 'native-base';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <Header style={styles.header} transparent>
          <StatusBar translucent backgroundColor="#0442D0" />
          <Body style={styles.body}>
            <View>
              <Text style={styles.count}>Calender</Text>
            </View>
          </Body>
        </Header>
      </View>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-16'}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Schedule;

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
