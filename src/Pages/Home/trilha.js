import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Trilha() {

    const navigation = useNavigation();

 return (
   <ScrollView style={{backgroundColor:'#F7FCFB'}}>
    <Text style={{fontSize:25, fontWeight:'600', paddingHorizontal:50, textAlign:'center', paddingVertical:20}}>Trilha de como se tornar um MEI</Text>
    <TouchableOpacity style={{marginHorizontal:30, backgroundColor:'#2460DA', borderRadius:10, marginTop:10, padding:15, flexDirection:'row'}} onPress={() => navigation.navigate('PagCurso')}>
          <View>
            <View style={{backgroundColor:'white', width:70, height:70, borderRadius:10, marginRight:10, justifyContent:'center', alignItems:'center'}}>
              <Image 
              source={require('../../Assets/meii.png')}
              style={{width:65, height:65}}
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
            <View style={{backgroundColor:'white', width:70, height:70, borderRadius:10, marginRight:10, justifyContent:'center', alignItems:'center'}}>
              <Image 
              source={require('../../Assets/tudoMei.png')}
              style={{width:65, height:65}}
              />
            </View>
          </View>
          <View>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>O que precisa saber?</Text>
            <Text style={{color:'white', paddingRight:100}}>Tudo o que você precisa saber sobre o MEI</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal:30, backgroundColor:'#2460DA', borderRadius:10, marginTop:10, padding:15, flexDirection:'row'}}>
          <View>
            <View style={{backgroundColor:'white', width:70, height:70, borderRadius:10, marginRight:10, justifyContent:'center', alignItems:'center'}}>
              <Image 
              source={require('../../Assets/declaraMei.png')}
              style={{width:65, height:65}}
              />
            </View>
          </View>
          <View>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Renda como física?</Text>
            <Text style={{color:'white', paddingRight:100}}>O MEI pode declarar imposto de renda como física</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal:30, backgroundColor:'#2460DA', borderRadius:10, marginTop:10, padding:15, flexDirection:'row'}}>
          <View>
            <View style={{backgroundColor:'white', width:70, height:70, borderRadius:10, marginRight:10, justifyContent:'center', alignItems:'center'}}>
              <Image 
              source={require('../../Assets/cancelaMei.png')}
              style={{width:65, height:65}}
              />
            </View>
          </View>
          <View>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Como cancelar o MEI</Text>
            <Text style={{color:'white', paddingRight:100}}>Aprenda como cancelar o MEI de forma rápida e simples</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal:30, backgroundColor:'#2460DA', borderRadius:10, marginTop:10, padding:15, flexDirection:'row'}}>
          <View>
            <View style={{backgroundColor:'white', width:70, height:70, borderRadius:10, marginRight:10, justifyContent:'center', alignItems:'center'}}>
              <Image 
              source={require('../../Assets/emitaMei.png')}
              style={{width:65, height:65}}
              />
            </View>
          </View>
          <View>
            <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>Emitir boletos DAS</Text>
            <Text style={{color:'white', paddingRight:100}}>Saiba como emitir seu boleto DAS aqui</Text>
          </View>
      </TouchableOpacity>
   </ScrollView>
  );
}