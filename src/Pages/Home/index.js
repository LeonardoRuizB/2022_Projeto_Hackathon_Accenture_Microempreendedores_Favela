import React, {useState} from "react";
import {
        View,
        ScrollView,
        Text,
        TextInput,
        TouchableOpacity, 
        Image, 
        Alert
    } from "react-native"
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';    

export default function Home(){
    const [pesq, setPesq] = useState('');
    const [cat1, setCat1] = useState('open');
    const [cat2, setCat2] = useState(null);
    const [cat3, setCat3] = useState(null);
    const [cat4, setCat4] = useState(null);

    const navigation = useNavigation();

    function selcat1(){
        setCat1('open')
        setCat2(null)
        setCat3(null)
        setCat4(null)
    }

    function selcat2(){
        setCat1(null)
        setCat2('open')
        setCat3(null)
        setCat4(null)
    }

    function selcat3(){
        setCat1(null)
        setCat2(null)
        setCat3('open')
        setCat4(null)
    }

    function selcat4(){
        setCat1(null)
        setCat2(null)
        setCat3(null)
        setCat4('open')
    }

    function solicitar(){
        Alert.alert('Acesso negado!', 'Solicite o acesso para a empresa!')
    }

    return(
        <ScrollView style={{backgroundColor:'#F7FCFB', paddingLeft:25}}>
            <View style={{flexDirection:'row', alignItems:'center', borderBottomWidth:0.5, marginTop:20, marginRight:25}}>
                <TextInput 
                    value={pesq}
                    onChangeText={value => setPesq(value)}
                    style={{height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='PESQUISE AQUI'
                    placeholderTextColor={'grey'}
                />
                <Image 
                source={require('../../Assets/lupa.png')}
                style={{justifyContent:'flex-end'}}
                />
            </View>
            <View style={{flexDirection:'row', marginTop:10, marginBottom:20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={{marginRight:10,backgroundColor:cat1 ? '#2460DA' : '#F0F0F0', width:90, height:40,borderRadius:5, justifyContent:'center'}} onPress={selcat1}>
                        <Text style={{color:cat1 ? 'white' : 'black', textAlign:'center'}}>Comidas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:10,backgroundColor:cat2 ? '#2460DA' : '#F0F0F0', width:120, height:40,borderRadius:5, justifyContent:'center'}} onPress={selcat2}>
                        <Text style={{color:cat2 ? 'white' : 'black', textAlign:'center'}}>Bebidas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:10,backgroundColor:cat3 ? '#2460DA' : '#F0F0F0', width:120, height:40,borderRadius:5, justifyContent:'center'}} onPress={selcat3}>
                        <Text style={{color:cat3 ? 'white' : 'black', textAlign:'center'}}>Pet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:10,backgroundColor:cat4 ? '#2460DA' : '#F0F0F0', width:120, height:40,borderRadius:5, justifyContent:'center'}} onPress={selcat4}>
                        <Text style={{color:cat4 ? 'white' : 'black', textAlign:'center'}}>Cozinha</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:5, marginRight:25}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Formosa Pet</Text>
                    <Text style={{fontSize:11, marginTop:-20}}>São Paulo / Pet Shop</Text>
                    <TouchableOpacity style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('Produtos')}>
                        <Text style={{color:'white'}}>Acessar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                    <Image
                    source={require('../../Assets/pet.png')}
                    style={{width:70, height:70, borderRadius:10}}
                    />
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{}}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:5, marginRight:25, marginTop:20}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Nome do catálogo</Text>
                    <Text style={{fontSize:11, marginTop:-20}}>LOCALIDADE / CATEGORIA</Text>
                    <TouchableOpacity onPress={solicitar} style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Solicitar Acesso</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{}}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:5, marginRight:25, marginTop:20}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Nome do catálogo</Text>
                    <Text style={{fontSize:11, marginTop:-20}}>LOCALIDADE / CATEGORIA</Text>
                    <TouchableOpacity onPress={solicitar} style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Solicitar Acesso</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{}}
                    />
                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:30}}>
                <View style={{flexDirection:'row', marginRight:20}}>
                    <View style={{flexDirection:'row', height:90, backgroundColor:'#F0F0f0', marginTop:15, borderRadius: 10, width:170, zIndex:2}}>
                        <View style={{justifyContent:'space-around', padding:10}}>
                            <Text style={{fontSize:17, fontWeight:'400'}}>Nome da empresa</Text>
                            <Text style={{fontSize:11, marginTop:-10}}>Categoria / localidade</Text>
                            <Image
                            source={require('../../Assets/stars.png')}
                            style={{}}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#2460DA', zIndex:1, width:100, height:90,marginTop:15, marginLeft:-25, alignItems:'center', borderBottomEndRadius:10, borderTopEndRadius:10, justifyContent:'space-around'}}>
                        <Text style={{paddingLeft:30, fontSize:16, textAlign:'center', color:'white'}}>Ver detalhes</Text>
                        <Image 
                        source={require('../../Assets/Arrow.png')}
                        style={{marginLeft:30}}
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'row', height:90, backgroundColor:'#F0F0f0', marginTop:15, borderRadius: 10, width:170, zIndex:2}}>
                        <View style={{justifyContent:'space-around', padding:10}}>
                            <Text style={{fontSize:17, fontWeight:'400'}}>Nome da empresa</Text>
                            <Text style={{fontSize:11, marginTop:-10}}>Categoria / localidade</Text>
                            <Image
                            source={require('../../Assets/stars.png')}
                            style={{}}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#2460DA', zIndex:1, width:100, height:90,marginTop:15, marginLeft:-25, alignItems:'center', borderBottomEndRadius:10, borderTopEndRadius:10, justifyContent:'space-around'}}>
                        <Text style={{paddingLeft:30, fontSize:16, textAlign:'center', color:'white'}}>Ver detalhes</Text>
                        <Image 
                        source={require('../../Assets/Arrow.png')}
                        style={{marginLeft:30}}
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row', marginLeft:20}}>
                    <View style={{flexDirection:'row', height:90, backgroundColor:'#F0F0f0', marginTop:15, borderRadius: 10, width:170, zIndex:2}}>
                        <View style={{justifyContent:'space-around', padding:10}}>
                            <Text style={{fontSize:17, fontWeight:'400'}}>Nome da empresa</Text>
                            <Text style={{fontSize:11, marginTop:-10}}>Categoria / localidade</Text>
                            <Image
                            source={require('../../Assets/stars.png')}
                            style={{}}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#2460DA', zIndex:1, width:100, height:90,marginTop:15, marginLeft:-25, alignItems:'center', borderBottomEndRadius:10, borderTopEndRadius:10, justifyContent:'space-around'}}>
                        <Text style={{paddingLeft:30, fontSize:16, textAlign:'center', color:'white'}}>Ver detalhes</Text>
                        <Image 
                        source={require('../../Assets/Arrow.png')}
                        style={{marginLeft:30}}
                        />
                    </View>
                </View>
            </ScrollView>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:5, marginRight:25, marginTop:30}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Nome do catálogo</Text>
                    <Text style={{fontSize:11, marginTop:-20}}>LOCALIDADE / CATEGORIA</Text>
                    <TouchableOpacity onPress={solicitar} style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Solicitar Acesso</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{}}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:20, marginRight:25, marginTop:20}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Nome do catálogo</Text>
                    <Text style={{fontSize:11, marginTop:-20}}>LOCALIDADE / CATEGORIA</Text>
                    <TouchableOpacity onPress={solicitar} style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Solicitar Acesso</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{}}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={() => auth().signOut()}>
                    <Text>Sair</Text>
                </TouchableOpacity>
        </ScrollView>
    )
}