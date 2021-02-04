import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Sign Up SCREEN</Text>
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
