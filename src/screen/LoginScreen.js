import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        try {
            if (email.length > 0 && password.length > 0) {
                let responseLogin = await auth().signInWithEmailAndPassword(
                    email,
                    password,
                );
                setMessage('');
                navigation.navigate('HomeScreen', {
                    screen: 'Dashboard',
                    params: {
                        email: responseLogin?.user?.email,
                        uid: responseLogin?.user?.uid,
                    },
                });
            } else {
                Alert.alert('Please enter valid data');
            }
        } catch (error) {
            console.log(error);
            setMessage(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Instagram</Text>
            <View style={styles.inputView}>
                <TextInput
                    styles={styles.TextInput}
                    placeholder="Phone number, Username or Email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    value={password}
                    onChangeText={value => setPassword(value)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <Text>----------OR----------</Text>

            <Text style={styles.ForgotInput}>Forgot password ?</Text>

            <Text>{message}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Registeration_Form')}>
                <Text style={{ color: "blue", marginTop: 20 }}>Don't have an Account ? SignUp</Text>
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
    ForgotInput: {
        marginTop: 30,
        color: "blue",
    },
    text: {
        marginBottom: 40,
        fontWeight: 'bold',
        fontSize: 26,
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

export default LoginScreen;