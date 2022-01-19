import React, { useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FCNotes from '../Comps/FuncComps/FCNotes'

export default function Home(props) {
    const [notes, setnotes] = useState([])


    const deleteNote = (noteObj) => {
        let tmpFilterNotes, tmpNotes;
        tmpFilterNotes = notes.filter(noteItem => noteItem !== noteObj);
        tmpNotes = tmpFilterNotes;
        setnotes(tmpNotes);
    }

    const addNewNote = (noteObj) => {
        setnotes([...notes, noteObj])
        props.navigation.navigate('Home')
    }

    return (
        <View>
            {
                notes.length ?
                    <>
                        <FCNotes notes2Home={(noteObj) => deleteNote(noteObj)} notes={notes} />
                        <TouchableOpacity onPress={() => props.navigation.navigate('AddNewNote',{addNewNote})}>
                            <Ionicons name="md-add-circle-outline" size={100} color="green" />
                        </TouchableOpacity>
                    </>
                    :
                    <>
                        <Text>No notes to display, please add your first note by clicking the GREEN PLUS ICON BELOW</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('AddNewNote',{addNewNote})}>
                            <Ionicons name="md-add-circle-outline" size={100} color="green" />
                        </TouchableOpacity>
                    </>

            }
        </View>

    )
}
