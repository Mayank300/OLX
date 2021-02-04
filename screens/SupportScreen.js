import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SupportScreen() {
    return (
        <View style={styles.container}>
            <Text>SUPPORT SCREEN</Text>
            <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})
