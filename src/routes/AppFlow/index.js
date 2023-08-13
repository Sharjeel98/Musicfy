import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {DailySchedule} from '../../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import CustomTabBar from './CustomTabBar';
import {getData} from '../../redux/asyncActions';
import {AppImages, height, width} from '../../assets/utilities';
import {Home, Artists, NowPlaying} from '../../screens';
import {ThemeContext} from '../../context/ThemeContext';
const AppStack = createStackNavigator();
const TabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeTab = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Artists" component={Artists} />
    </HomeStack.Navigator>
  );
};
const SearchTab = () => {
  return (
    <SearchStack.Navigator screenOptions={{headerShown: false}}>
      <SearchStack.Screen name="Home" component={Home} />
    </SearchStack.Navigator>
  );
};
const LibraryTab = () => {
  return (
    <LibraryStack.Navigator screenOptions={{headerShown: false}}>
      <LibraryStack.Screen name="Home" component={Home} />
    </LibraryStack.Navigator>
  );
};
const ProfileTab = () => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Home" component={Home} />
    </ProfileStack.Navigator>
  );
};
const Tab = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: height * 0.12,
          backgroundColor: themeContext.primaryReverseColor,
          marginBottom: Platform.OS == 'ios' ? -height * 0.006 : 0,
          borderTopWidth: 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        },
        tabBarShowLabel: false,
      }}>
      <TabStack.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={AppImages.homeTab}
                  style={{
                    width: width * 0.1,
                    height: height * 0.07,
                    resizeMode: 'contain',
                    tintColor: focused
                      ? themeContext.primaryColor
                      : themeContext.fixedGrayColor,
                  }}
                />
              </View>
            );
          },
        }}
        name="HomeTab"
        component={HomeTab}
      />
      <TabStack.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={AppImages.searchTab}
                  style={{
                    width: width * 0.1,
                    height: height * 0.07,

                    resizeMode: 'contain',
                    tintColor: focused
                      ? themeContext.primaryColor
                      : themeContext.fixedGrayColor,
                  }}
                />
              </View>
            );
          },
        }}
        name="SearchTab"
        component={SearchTab}
      />
      <TabStack.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={AppImages.libraryTab}
                  style={{
                    width: width * 0.1,
                    height: height * 0.07,

                    resizeMode: 'contain',
                    tintColor: focused
                      ? themeContext.primaryColor
                      : themeContext.fixedGrayColor,
                  }}
                />
              </View>
            );
          },
        }}
        name="LibraryTab"
        component={LibraryTab}
      />
      <TabStack.Screen
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  source={AppImages.profileTab}
                  style={{
                    width: width * 0.1,
                    height: height * 0.07,

                    resizeMode: 'contain',
                    tintColor: focused
                      ? themeContext.primaryColor
                      : themeContext.fixedGrayColor,
                  }}
                />
              </View>
            );
          },
        }}
        name="ProfileTab"
        component={ProfileTab}
      />
    </TabStack.Navigator>
  );
};

const AppFlow = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Tab" component={Tab} />
      <AppStack.Screen name="NowPlaying" component={NowPlaying} />
    </AppStack.Navigator>
  );
};
export default AppFlow;

const styles = StyleSheet.create({});
