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

export default function Home(){
    const [pesq, setPesq] = useState('');
    const [cat1, setCat1] = useState(null);
    const [cat2, setCat2] = useState(null);
    const [cat3, setCat3] = useState('Open');
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
                <TouchableOpacity>
                    <Image 
                    source={require('../../Assets/lupa.png')}
                    style={{justifyContent:'flex-end'}}
                    />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', marginTop:10, marginBottom:20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={{marginRight:10,backgroundColor:cat3 ? '#2460DA' : '#F0F0F0', width:120, height:40,borderRadius:5, justifyContent:'center'}} onPress={selcat3}>
                        <Text style={{color:cat3 ? 'white' : 'black', textAlign:'center'}}>Artesanato</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:10,backgroundColor:cat1 ? '#2460DA' : '#F0F0F0', width:90, height:40,borderRadius:5, justifyContent:'center'}} onPress={selcat1}>
                        <Text style={{color:cat1 ? 'white' : 'black', textAlign:'center'}}>Comidas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:10,backgroundColor:cat4 ? '#2460DA' : '#F0F0F0', width:120, height:40,borderRadius:5, justifyContent:'center'}} onPress={selcat4}>
                        <Text style={{color:cat4 ? 'white' : 'black', textAlign:'center'}}>Cozinha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginRight:10,backgroundColor:cat2 ? '#2460DA' : '#F0F0F0', width:90, height:40,borderRadius:5, justifyContent:'center'}} onPress={selcat2}>
                        <Text style={{color:cat2 ? 'white' : 'black', textAlign:'center'}}>Casa</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:5, marginRight:25}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Dona Benta Art.</Text>
                    <Text style={{fontSize:14, marginTop:-20}}>São Paulo / Artesanatos</Text>
                    <TouchableOpacity style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('Perfil')}>
                        <Text style={{color:'white'}}>Conheça mais!</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                        <Image 
                        source={require('../../Assets/artesanato.png')}
                        style={{width:70, height:70, borderRadius:10}}
                        />
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{marginTop:5}}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:5, marginRight:25, marginTop:20}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Nome do Negócio</Text>
                    <Text style={{fontSize:11, marginTop:-20}}>LOCALIDADE / CATEGORIA</Text>
                    <TouchableOpacity style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Conheça mais!</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{marginTop:5}}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:5, marginRight:25, marginTop:20}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Nome do Negócio</Text>
                    <Text style={{fontSize:11, marginTop:-20}}>LOCALIDADE / CATEGORIA</Text>
                    <TouchableOpacity style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Conheça mais!</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{marginTop:5}}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:5, marginRight:25, marginTop:20}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Nome do Negócio</Text>
                    <Text style={{fontSize:11, marginTop:-20}}>LOCALIDADE / CATEGORIA</Text>
                    <TouchableOpacity style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Conheça mais!</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{marginTop:5}}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:5, marginRight:25, marginTop:20}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Nome do Negócio</Text>
                    <Text style={{fontSize:11, marginTop:-20}}>LOCALIDADE / CATEGORIA</Text>
                    <TouchableOpacity style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Conheça mais!</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{marginTop:5}}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', borderBottomWidth:0.5, paddingBottom:5, marginRight:25, marginTop:20}}>
                <View style={{justifyContent:'space-between'}}>
                    <Text style={{fontSize:19, fontWeight:'500'}}>Nome do Negócio</Text>
                    <Text style={{fontSize:11, marginTop:-20}}>LOCALIDADE / CATEGORIA</Text>
                    <TouchableOpacity style={{backgroundColor:'#2460DA', borderRadius:5, height:31, width:230, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Conheça mais!</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{backgroundColor:'#F0F0f0', width:70, height:70, borderRadius:10, marginLeft:5}}>
                    </TouchableOpacity>
                    <Image
                    source={require('../../Assets/stars.png')}
                    style={{marginTop:5}}
                    />
                </View>
            </View>
        </ScrollView>
    )
}