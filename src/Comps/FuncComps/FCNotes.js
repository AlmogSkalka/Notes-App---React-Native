import { StyleSheet, View } from 'react-native';
import React from 'react'
import FCNote from './FCNote';

export default function FCNotes(props) {

    const notes = props.notes;

    return (
        <View>
            {notes.map((note, ind) =>
                <FCNote sendData={(noteObj) => props.notes2Home(noteObj)} note={note}
                    key={ind} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        paddingTop: 35,
        backgroundColor: '#ffffff'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },


});



