import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

//import assets icons
import Home from '../assets/images/home.svg';
import HomeActive from '../assets/images/homeActive.svg';
import Plus from '../assets/images/plus.svg';
import PlusActive from '../assets/images/plusActive.svg';
import Setting from '../assets/images/setting.svg';
import SettingActive from '../assets/images/settingActive.svg';

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const IconTab = () => {
          if (label === 'Task') {
            return isFocused ? <HomeActive /> : <Home />;
          }
          if (label === 'Write') {
            return isFocused ? <PlusActive /> : <Plus />;
          }
          if (label === 'Setting') {
            return isFocused ? <SettingActive /> : <Setting />;
          }
          return <Home />;
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.iconTab}>
            <IconTab />
            <Text style={styles.text(isFocused)}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    paddingVertical: 13,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 75,
  },
  iconTab: {
    alignItems: 'center',
  },
  text: (isFocused) => ({
    color: isFocused ? '#0442D0' : '#C8C8C8',
    fontSize: 13,
    marginTop: 7,
  }),
});
