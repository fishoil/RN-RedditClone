import React from "react"
import { Stack, Slot } from "expo-router"

export default function RootLayout() {
    return ( 
        // <Slot>
        //     <Stack.Screen name="index" options={{title: 'Home Screen'}} />
        <Slot />
    )
}