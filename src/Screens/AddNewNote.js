import React, { useState } from 'react'
import { TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function AddNewNote({ route }) {

    const [title, settitle] = useState("");
    const [txt, setnoteDesc] = useState("");

    const { addNewNote } = route.params;
    
    return (
        <View>
            <TextInput name='titleInput' placeholder='Note Title' value={title} onChangeText={settitle} style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }} ></TextInput>
            <TextInput name='descInput' placeholder='Note Description' value={txt} onChangeText={setnoteDesc} style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }} ></TextInput>
            <AntDesign name="plussquareo" onPress={() => addNewNote({title,txt})} size={100} color="blue" />
        </View>
    )
}

