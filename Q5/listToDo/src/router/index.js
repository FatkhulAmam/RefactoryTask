import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import BottomNavigation from '../components/bottomNavigation';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Write from '../screens/Add';

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
      <Tab.Screen name="Task" component={Home} />
      <Tab.Screen name="Write" component={Write} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;
