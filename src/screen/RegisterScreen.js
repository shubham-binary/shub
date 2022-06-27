import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigation = useNavigation();

    const handleClick = async () => {
        try {
            let responseSignup = await auth().createUserWithEmailAndPassword(
                email,
                password,
            );
            navigation.navigate('Login_Form');
            console.log(responseSignup);
        } catch (error) {
            console.log(error);
            setMessage(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Instagram</Text>
            <Text style={styles.Registtext}>Register Your Instagram Account</Text>
            <View style={styles.inputView}>
                <TextInput
                    styles={styles.TextInput}
                    placeholder="Enter Your Email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Your Password"
                    value={password}
                    onChangeText={value => setPassword(value)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleClick}>
                <Text style={styles.loginText}>Registered</Text>
            </TouchableOpacity>

            <Text>{message}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login_Form')}>
                <Text style={{ color: "blue", marginTop: -18 }}>Already have an Account</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Registtext: {
        marginBottom: 40,
        fontSize: 15,
        color: 'black',
    },
    text: {
        marginBottom: 40,
        fontWeight: 'bold',
        fontSize: 22,
        color: 'black',
    },
    inputView: {
        borderColor: "black",
        borderWidth: 1,
        width: '70%',
        height: 45,
        marginBottom: 20,
        alignItems: 'center',
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    loginBtn: {
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#ADD8E6',
        marginBottom: 50,
        borderColor: "black",
        borderWidth: 0.5,
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default RegisterScreen;