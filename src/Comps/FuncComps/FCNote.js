import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default function FCNote(props) {

    const note = props.note;

    return (
        <View>
            <Card>
                <AntDesign name="delete" size={35} color="red" onPress={() => props.sendData(note)} />
                <Card.Title>{note.title}</Card.Title>
                <Card.Divider />
                <Text style={styles.noteCard}>
                    {note.txt}
                </Text>
            </Card>
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
    noteCard: {
        flexDirection: 'row',
        marginBottom: 6,
    },

});



