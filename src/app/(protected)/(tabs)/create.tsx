import React from "react"
import { View, Text, Pressable, StyleSheet, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import { router } from "expo-router"
import { useState } from 'react'

export default function CreateScreen() {
    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const goBack = () => {
        setTitle("")
        setBody("")
        router.back()
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 10 }}>
            {/* HEADER */}
            <View style={{ flexDirection: 'row' }}>
                <AntDesign name="close" size={30} color="black" onPress={() => goBack()} />
                <Pressable onPress={() => console.error('Pressed')} style={{ marginLeft: 'auto' }}>
                    <Text style={style.postText}>Post</Text>
                </Pressable>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingVertical: 15 }}>
                    {/* COMMUNITY SELECTOR */}
                    <View style={style.communityContainer}>
                        <Text style={style.rStyles}>r/</Text>
                        <Text style={{ fontWeight: '600' }}>Select a community</Text>
                    </View>

                    {/* INPUTS */}
                    <TextInput
                        placeholder="Title"
                        style={{ fontSize: 20, fontWeight: 'bold', paddingVertical: 20 }}
                        value={title}
                        onChangeText={(text) => setTitle(text)} // onChangeText={setTitle}
                        multiline
                        scrollEnabled={false}
                    />

                    <TextInput
                        placeholder="body text (optional)"
                        value={body}
                        onChangeText={setBody}
                        multiline
                        scrollEnabled={false}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    postText: {
        backgroundColor: '#115BCA',
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 2,
        paddingHorizontal: 7,
        borderRadius: 10
    },
    rStyles: {
        backgroundColor: 'black',
        color: 'white',
        paddingVertical: 1,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontWeight: 'bold'
    },
    communityContainer: {
        flexDirection: 'row',
        backgroundColor: '#EDEDED',
        padding: 10,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginVertical: 10
    }
})