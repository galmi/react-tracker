import React, {useContext} from 'react';
import {Button, Input} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';
import Spacer from "./Spacer";
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = ({children}) => {
    const {
        state: {name, recording, locations},
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();

    return <>
    <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter name"/>
    </Spacer>
    <Spacer>
        {recording
            ? <Button title="Stop recording" onPress={stopRecording}/>
            : <Button title="Start recording" onPress={startRecording}/>
        }
    </Spacer>
    <Spacer>
        {!recording && locations.length ? (
            <Button title="Save recording" onPress={saveTrack}/>
        ) : null}
    </Spacer>
    </>
};

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    }
});

export default TrackForm;