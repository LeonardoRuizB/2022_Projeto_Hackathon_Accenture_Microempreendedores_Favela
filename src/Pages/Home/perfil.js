import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {

    const navigation = useNavigation();

 return (
   <ScrollView>
        <View style={{backgroundColor:'#E2E2E2', height:120, marginTop:-12}}></View>
        <View style={{flexDirection:'row'}}>
            <View style={{backgroundColor:'#E2E2E2', width:70, height:70, borderRadius:10, marginLeft:30, paddingHorizontal:25,marginTop:30, justifyContent:'center', alignItems:'center'}}>
                <Image 
                    source={require('../../Assets/person2.png')}
                />
            </View> 
            <View style={{marginTop:38, marginLeft:20}}>
                <Text style={{fontSize:18, fontWeight:'500'}}>Nome da pessoa</Text>
                <Text>Segmento</Text>
                <Image 
                    source={require('../../Assets/stars.png')}
                />
            </View>
        </View>
        <View style={{paddingHorizontal:25, marginTop:20}}>
            <Text style={{fontSize:25, fontWeight:'600'}}>Sobre</Text>
            <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
            <Text style={{fontSize:25, fontWeight:'600', marginTop:20}}>Avaliações</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection:'row', marginLeft:20}}>
                    <View style={{flexDirection:'row', height:120, backgroundColor:'#F0F0f0', marginTop:15, borderRadius: 10, width:120, zIndex:2}}>
                        <View style={{justifyContent:'space-around', padding:10}}>
                            <Text style={{fontSize:17, fontWeight:'400', textAlign:'center'}}>Nome da pessoa</Text>
                            <Image
                            source={require('../../Assets/stars.png')}
                            style={{}}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#2460DA', zIndex:1, width:170, height:120,marginTop:15, marginLeft:-25, alignItems:'center', borderBottomEndRadius:10, borderTopEndRadius:10, justifyContent:'space-around'}}>
                            <Text style={{paddingLeft:30, fontSize:16, textAlign:'justify', color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginLeft:20}}>
                    <View style={{flexDirection:'row', height:120, backgroundColor:'#F0F0f0', marginTop:15, borderRadius: 10, width:120, zIndex:2}}>
                        <View style={{justifyContent:'space-around', padding:10}}>
                            <Text style={{fontSize:17, fontWeight:'400', textAlign:'center'}}>Nome da pessoa</Text>
                            <Image
                            source={require('../../Assets/stars.png')}
                            style={{}}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#2460DA', zIndex:1, width:170, height:120,marginTop:15, marginLeft:-25, alignItems:'center', borderBottomEndRadius:10, borderTopEndRadius:10, justifyContent:'space-around'}}>
                        <Text style={{paddingLeft:30, fontSize:16, textAlign:'justify', color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{borderBottomWidth:0.5, paddingBottom:15}}>
                <Text style={{fontSize:25, fontWeight:'600', marginTop:20}}>Estatísticas</Text>
                <View style={{flexDirection:'row', backgroundColor:'#E2E2E2', height:60, borderRadius:10, marginTop:10, justifyContent:'space-between', alignItems:'center', paddingHorizontal:15}}>
                    <Text>Quantidade de vendas</Text>
                    <Text>8</Text>
                </View>
                <View style={{flexDirection:'row', backgroundColor:'#E2E2E2', height:60, borderRadius:10, marginTop:10, justifyContent:'space-between', alignItems:'center', paddingHorizontal:15}}>
                    <Text>Quantidade de produtos</Text>
                    <Text>7</Text>
                </View>
                <View style={{flexDirection:'row', backgroundColor:'#E2E2E2', height:60, borderRadius:10, marginTop:10, justifyContent:'space-between', alignItems:'center', paddingHorizontal:15}}>
                    <Text>Quantidade de avaliações</Text>
                    <Text>24</Text>
                </View>
            </View>
            <TouchableOpacity style={{backgroundColor:'#2460DA', height:55, marginTop:20, borderRadius:10, marginBottom:30, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('Crescer')}>
                <Text style={{color:'white', fontSize:20}}>AJUDA A CRESCER</Text>
            </TouchableOpacity>
        </View>
   </ScrollView>
  );
}