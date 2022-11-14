import React from 'react';
import { View, Text,ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Curso() {

  const navigation = useNavigation();

 return (
   <ScrollView style={{backgroundColor:'#F7FCFB'}}>
    <Text style={{paddingTop:20, paddingLeft:30, fontSize:25, fontWeight:'700'}}>TRILHAS COMPLETAS</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingLeft:30, paddingBottom:20}}>
        <TouchableOpacity style={{width:300, height:200, backgroundColor:'#D9D9D9', borderRadius:10, marginTop:10,  justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('Trilha')}>
          <Image 
          source={require('../../Assets/meii.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width:300, height:200, backgroundColor:'#D9D9D9', borderRadius:10, marginTop:10, marginLeft:10, marginRight:60 ,justifyContent:'center', alignItems:'center'}}>
          <Image 
           source={require('../../Assets/canva.png')}
          style={{width:150, height:150}}
          />
        </TouchableOpacity>
      </ScrollView>
      <View style={{flexDirection:'row', alignItems:'flex-end'}}>
        <Text style={{paddingTop:20, paddingLeft:30, fontSize:25, fontWeight:'700'}}>CURSOS</Text>
        <TouchableOpacity style={{marginLeft:10}}>
          <Text style={{color:'grey'}}>VER MAIS</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginHorizontal:30, backgroundColor:'#2460DA', borderRadius:10, marginTop:10, padding:15, flexDirection:'row'}} onPress={() => navigation.navigate('PagCurso')}>
          <View>
            <View style={{backgroundColor:'white', width:70, height:70, borderRadius:10, marginRight:10, justifyContent:'center', alignItems:'center'}}>
              <Image 
              source={require('../../Assets/meii.png')}
              style={{width:65, height:65, borderRadius:10}}
              />
            </View>
          </View>
          <View>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Como Abrir um MEI</Text>
            <Text style={{color:'white', paddingRight:100}}>Aprenda como abrir um MEI de forma rápida e simples</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal:30, backgroundColor:'#2460DA', borderRadius:10, marginTop:10, padding:15, flexDirection:'row'}}>
          <View>
            <View style={{backgroundColor:'white', width:70, height:70, borderRadius:10, marginRight:10 , justifyContent:'center', alignItems:'center'}}>
            <Image 
              source={require('../../Assets/credito.png')}
              style={{width:65, height:65, borderRadius:10}}
              />
            </View>
          </View>
          <View>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Crédito e Finanças</Text>
            <Text style={{color:'white', paddingRight:100}}>Dicas sobre crédito e finanças para gerenciar do seu negócio</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal:30, backgroundColor:'#2460DA', borderRadius:10, marginTop:10, padding:15, flexDirection:'row', marginBottom:30}}>
          <View>
            <View style={{backgroundColor:'white', width:70, height:70, borderRadius:10, marginRight:10 , justifyContent:'center', alignItems:'center'}}>
              <Image 
              source={require('../../Assets/canva.png')}
              style={{width:65, height:65, borderRadius:10}}
              />
            </View>
          </View>
          <View>
            <Text style={{color:'white', fontSize:19, fontWeight:'700'}}>Crie sua identidade visual</Text>
            <Text style={{color:'white', paddingRight:100}}>Como criar logo, descrição e muito mais</Text>
          </View>
      </TouchableOpacity>
   </ScrollView>
  );
}