import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {Context} from '../context/AuthContext';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <View style={{flex: 2, justifyContent: 'center'}}>
                <AuthForm
                    headerText="Sign In Your Account"
                    errorMessage={state.errorMessage}
                    onSubmit={signin}
                    submitButtonText="Sign In"
                />
                <NavLink
                    text="Dont have an account? Sign Up instead"
                    routeName="Signup"
                />
            </View>
            <View style={{flex: 1}}/>
        </View>
    );
};

SigninScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default SigninScreen;