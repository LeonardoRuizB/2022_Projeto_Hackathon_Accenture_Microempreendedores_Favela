import React, {useState} from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";  

export default function Perfil() {
    const [titulo, setTitulo] = useState('')
    const [desc, setDesc] = useState('')

    const navigation = useNavigation();

 return (
   <ScrollView style={{backgroundColor:'#F7FCFB'}}>
        <View style={{backgroundColor:'#E2E2E2', height:120}}>
            <Image 
                    source={require('../../Assets/almofada.png')}
                    style={{flex:1}}
                />
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{backgroundColor:'#E2E2E2', width:70, height:70, borderRadius:10, marginLeft:30, paddingHorizontal:25,marginTop:30, justifyContent:'center', alignItems:'center'}}>
                <Image 
                    source={require('../../Assets/artesanato.png')}
                    style={{width:70, height:70, borderRadius:10}}
                />
            </View> 
            <View style={{marginTop:38, marginLeft:20}}>
                <Text style={{fontSize:18, fontWeight:'500'}}>Dona Benta Art.</Text>
                <Text>Artesanatos</Text>
                <Image 
                    source={require('../../Assets/stars.png')}
                />
            </View>
            <TouchableOpacity style={{marginTop:38, marginLeft:45, backgroundColor:'#E2E2E2', borderRadius:90, width:50, height:50,justifyContent:'center', alignItems:'center'}}>
                <Image 
                    source={require('../../Assets/heart.png')}
                    style={{width:30, height:30, tintColor:'#2460DA'}}
                />
            </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal:25, marginTop:20}}>
            <Text style={{fontSize:25, fontWeight:'600'}}>Sobre</Text>
            <Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
            <Text style={{fontSize:25, fontWeight:'600', marginTop:20}}>Comentários</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection:'row', marginLeft:20}}>
                    <View style={{flexDirection:'row', height:120, backgroundColor:'#F0F0f0', marginTop:15, borderRadius: 10, width:120, zIndex:2}}>
                        <View style={{justifyContent:'space-around', padding:10}}>
                            <Text style={{fontSize:17, fontWeight:'400', textAlign:'center'}}>Maria Gomes da Silva</Text>
                            <Image
                            source={require('../../Assets/stars.png')}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#2460DA', zIndex:1, width:170, height:120, marginTop:15, marginLeft:-25, alignItems:'center', borderBottomEndRadius:10, borderTopEndRadius:10, justifyContent:'space-around'}}>
                            <Text style={{paddingLeft:35, paddingRight:15,fontSize:16, textAlign:'justify', color:'white'}}>Produtos de ótima qualidade e acabamento, eu recomendo!</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginLeft:20}}>
                    <View style={{flexDirection:'row', height:120, backgroundColor:'#F0F0f0', marginTop:15, borderRadius: 10, width:120, zIndex:2}}>
                        <View style={{justifyContent:'space-around', padding:10}}>
                            <Text style={{fontSize:17, fontWeight:'400', textAlign:'center'}}>Paulo de Andrade Garcia</Text>
                            <Image
                            source={require('../../Assets/stars.png')}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#2460DA', zIndex:1, width:170, height:120,marginTop:15, marginLeft:-25, alignItems:'center', borderBottomEndRadius:10, borderTopEndRadius:10, justifyContent:'space-around'}}>
                        <Text style={{paddingLeft:35, paddingRight:15, fontSize:16, textAlign:'justify', color:'white'}}>Almofada muito boa, e ficou pronto muito rápido, exelente serviço!</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{borderTopWidth:0.5, marginTop:20, paddingTop:10}}>
                <TouchableOpacity style={{backgroundColor:'#2460DA', height:55, marginTop:10, borderRadius:10, marginBottom:10, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('Crescer')}>
                    <Text style={{color:'white', fontSize:18}}>AJUDAR A CRESCER</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <Text style={{fontSize:25, fontWeight:'600', marginTop:15, paddingLeft:30}}>Postagens</Text>
            <View style={{marginTop:10, marginHorizontal:30}}>
                    <TextInput 
                        value={titulo}
                        onChangeText={value => setTitulo(value)}
                        style={{height:40, width:'80%', paddingLeft:10, borderRadius:5, borderBottomWidth:0.5}}
                        placeholder='TITULO'
                        placeholderTextColor={'grey'}
                    />
                    <View style={{flexDirection:'row'}}>
                    <TextInput 
                        value={desc}
                        onChangeText={value => setDesc(value)}
                        style={{height:40, width:'100%', paddingLeft:10, borderRadius:5, borderBottomWidth:0.5}}
                        placeholder='DESCRIÇÃO'
                        placeholderTextColor={'grey'}
                    />
                    <TouchableOpacity>
                        <Image 
                        source={require('../../Assets/Camera.png')}
                        style={{width:45, height:45, borderRadius:10, marginLeft:-50, marginTop:-20}}
                        />
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#2460DA', borderRadius:10, marginTop:10, alignItems:'center', justifyContent:'center', height:50}}>
                        <Text style={{color:'white', fontSize:18}}>PUBLICAR</Text>
                    </TouchableOpacity>
            </View>
            <View style={{height:300, backgroundColor:'#E2E2E2', marginTop:20, marginHorizontal:20, borderRadius:10}}>
            <Image 
            source={require('../../Assets/artesanato.png')}
            style={{width:352, height:300, borderRadius:10}}
            />
            </View>
            <View style={{paddingHorizontal:30}}>
                <Text style={{fontSize:20, fontWeight:'500'}}>Lancheiras Personalizadas</Text>
                <Text style={{textAlign:'justify', borderBottomWidth:0.5, paddingBottom:10, marginBottom:15}}>Lancheiras bonitas e estilosas para levar sua comida para onde precisar e ainda continuar a andar com estilo.</Text>
            </View>
        </View>
        <View>
            <View style={{height:300, backgroundColor:'#E2E2E2', marginTop:20, marginHorizontal:20, borderRadius:10}}>
            <Image 
            source={require('../../Assets/almofada.png')}
            style={{width:352, height:300, borderRadius:10}}
            />
            </View>
            <View style={{paddingHorizontal:30}}>
                <Text style={{fontSize:20, fontWeight:'500'}}>Almofadas Personaliozadas</Text>
                <Text style={{textAlign:'justify', borderBottomWidth:0.5, paddingBottom:10, marginBottom:15}}>Almofadas e encostos totalmente personaliozados para deixar sua casa cada vez mais estilosa, bonita e alegre.</Text>
            </View>
        </View>
        <View>
            <View style={{height:300, backgroundColor:'#E2E2E2', marginTop:20, marginHorizontal:20, borderRadius:10}}>
            <Image 
            source={require('../../Assets/brinde.png')}
            style={{width:352, height:300, borderRadius:10}}
            /> 
            </View>
            <View style={{paddingHorizontal:30}}>
                <Text style={{fontSize:20, fontWeight:'500'}}>Brindes Personalizados</Text>
                <Text style={{textAlign:'justify', borderBottomWidth:0.5, paddingBottom:10, marginBottom:15}}>Os melhores saquinhos de brinde para animar suas festas e deixarem muito mais enfeitada e divertida.</Text>
            </View>
            </View>
   </ScrollView>
  );
}