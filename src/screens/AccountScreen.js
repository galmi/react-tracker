import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from "../components/Spacer";
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (
        <>
            <Spacer>
                <Button title="Sign Out" onPress={signout}/>
            </Spacer>
        </>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account'
};

const styles = StyleSheet.create({});

export default AccountScreen;