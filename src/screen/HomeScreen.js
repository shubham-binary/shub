import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const HomeScreen = () => {
    const route = useRoute();
    const { email, uid } = route.params;
    return (
        <View style={styles.container}>
            <Text>Email:{email}</Text>
            <Text>UID:{uid}</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});