import { theme } from '@/theme'
import { View, Text, StyleSheet } from 'react-native'

export default function Index() {
    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>Teste</Text>
        </View>
    )
      
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.black
    },
    text: {
        fontSize: 22,
        color: theme.colors.white,
        fontFamily: theme.fontFamily.bold,
    },
})