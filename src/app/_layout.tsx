import { Slot } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'react-native'

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'


export default function Layout() {
    useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
    })

    return(
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar barStyle='light-content' />
            <Slot />
        </GestureHandlerRootView>
    )
}