import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import {Provider as AuthProvider} from "./src/context/AuthContext";
import {Provider as LocationProvider} from "./src/context/LocationContext";
import {Provider as TrackProvider} from "./src/context/TrackContext";
import {setNavigator} from './src/navigationRef';
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import {FontAwesome} from '@expo/vector-icons';

let trackListFlow = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
});
trackListFlow.navigationOptions = {
    title: 'Tracks',
    tabBarIcon: <FontAwesome name="th-list" size={20}/>
};

let createTrack = createStackNavigator({TrackCreateScreen});
createTrack.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20}/>
};

let account = createStackNavigator({AccountScreen});
account.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20}/>
};

const switchNavigator = createSwitchNavigator({
    resolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen
    }),
    mainFlow: createBottomTabNavigator({
        trackListFlow: trackListFlow,
        CreateTrack: createTrack,
        Account: account
    })
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <TrackProvider>
            <LocationProvider>
                <AuthProvider>
                    <App ref={(navigator) => {
                        setNavigator(navigator)
                    }}/>
                </AuthProvider>
            </LocationProvider>
        </TrackProvider>
    )
}