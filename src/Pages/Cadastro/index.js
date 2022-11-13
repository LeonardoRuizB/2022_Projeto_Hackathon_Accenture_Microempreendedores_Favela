import React, { useState } from "react";
import {    
        View,
        Text, 
        ScrollView,
        TextInput,
        TouchableOpacity,
        Alert, 
        Image, 
        } from "react-native";
import auth from '@react-native-firebase/auth';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(){
        if( email === '' || password === ''){
            Alert.alert('Algo deu errado', 'Preencha todos os campos')
            return;
        };

        auth().signInWithEmailAndPassword(email, password)
        .catch(error => (
            Alert.alert(error.code, error.message)
        ));
    }
    return(
     <ScrollView style={{flex:1, backgroundColor:'#F7FCFB'}}>
        <View style={{alignItems:'center', paddingBottom:20, paddingTop:60}}>
            <Image 
            source={require('../../Assets/Login.png')}
            style={{justifyContent:'flex-end'}}
            />
            <View style={{width:'100%', paddingLeft:30, marginTop:60}}>
                <Text style={{fontSize:18}}>EMAIL</Text>
                <TextInput 
                    value={email}
                    onChangeText={value => setEmail(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5, alignItems:'center'}}
                    placeholder='Exemplo@gmail.com'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:18}}>SENHA</Text>
                <TextInput 
                    value={password}
                    onChangeText={value => setPassword(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='*******'
                    placeholderTextColor={'grey'}
                />
                <TouchableOpacity style={{ height:50, width:'90%', backgroundColor:'#2460DA', marginTop:10, justifyContent:'center', alignItems:'center', borderRadius:5}} onPress={login}>
                    <View style={{flexDirection:'row'}}>                                
                        <Text style={{ color:'white', marginRight:150, fontSize:16}}>ENTRAR NO APP</Text>
                        <Text style={{ color:'white'}}>+</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{textAlign:'center', marginTop:5}}>esqueci minha senha</Text>
                </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
    )
}