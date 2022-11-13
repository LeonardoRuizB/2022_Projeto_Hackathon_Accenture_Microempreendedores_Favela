import React from "react";
import {
        View,
        Text,
        TouchableOpacity,
        Image, 
        Alert
    } from "react-native"  
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth'   

export default function Acessos(){

    const navigation = useNavigation();

    function saiba(){
        Alert.alert('SAIBA MAIS!', 'O foco do Aplicativo é voltado para os responsáveis familiares que vivem na comunidade da favela, essas que possuem baixa renda, podendo estar em situação de vulnerabilidade social. Recebendo pouco ou nenhum auxílio governamental, pertencem a uma população de baixa renda e geralmente com pouca instrução acadêmica. O objetivo do projeto é levar a essa população a possibilidade de terem fácil acesso uma plataforma de e-commerce com aplicações 100% Mobile, sem custo de investimento, fácil de usar, com navegação orientada e intuitiva, e também, acesso a cursos rápidos e objetivos, com linguagem simplificada, para que possam ter as instruções básicas sobre vários temas do empreendedorismo. Assim possibilita a eles obterem um retorno financeiro rápido e motivação para manterem vividos o espírito empreendedor e melhorarem sua qualidade de vida, e também, diante da situação de pandemia, garante maior segurança e prevenção de doenças, já que pode trabalhar de casa, evitando riscos com a maior exposição.')
    }

    return(
        <View style={{backgroundColor:'#F7FCFB', flex:1, justifyContent:'flex-end', paddingBottom:20}}>
            <Image 
            source={require('../../Assets/Acessos.png')}
            style={{marginTop:120}}
            />
            <TouchableOpacity style={{backgroundColor:'#2460DA', width:'45%', marginTop:50, borderTopRightRadius:10, borderBottomRightRadius:10,height:61, justifyContent:'center'}} onPress={() => navigation.navigate('Login')}>
                <Text style={{color:'white', fontWeight:'300', fontSize:16, paddingLeft:35}}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#2460DA', width:'55%', marginTop:10, borderTopRightRadius:10, borderBottomRightRadius:10,height:61, justifyContent:'center'}} onPress={() => navigation.navigate('CriarConta')}>
                <Text style={{color:'white', fontWeight:'300', fontSize:16, paddingLeft:35}}>CRIAR CONTA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center', marginTop:10}} onPress={saiba}>
                <Text>SAIBA MAIS!</Text>
            </TouchableOpacity>
        </View>
    )
}