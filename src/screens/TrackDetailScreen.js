import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {Context as TrackContext} from "../context/TrackContext";
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({navigation}) => {
    const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(t => t._id === _id);
    const initialCoords = track.locations[0].coords;
    // this.props.navigation.setParams({title: track.name});

    return (
        <SafeAreaView>
            <Text h3>{track.name}</Text>
            <MapView
                initialRegion={{
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01,
                    ...initialCoords
                }}
                style={styles.map}
            >
                <Polyline coordinates={track.locations.map(loc => loc.coords)}/>
            </MapView>
        </SafeAreaView>
    );
};

TrackDetailScreen.navigationOptions = {
    title: "Details"
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default TrackDetailScreen;