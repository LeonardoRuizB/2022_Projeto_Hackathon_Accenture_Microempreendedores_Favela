import react from "react";
import {
        View,
        Text,
        ScrollView,
        TouchableOpacity, 
        Image
} from 'react-native'
import { useNavigation } from "@react-navigation/native"; 

export function Produtos(){

    const navigation = useNavigation();

    return(
        <ScrollView style={{paddingVertical:20, backgroundColor:'#F7FCFB'}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:25}}>Formosa Pet</Text>
                <Text>Pet Shop</Text>
                <Image
                    source={require('../../Assets/stars.png')}
                    style={{}}
                    />
            </View>
            <View style={{alignItems:'center', paddingBottom:50}}>
                <View style={{width:'85%',marginTop:30 ,height:100, backgroundColor:'#F0F0F0', borderRadius:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between',paddingHorizontal:10}}>
                    <TouchableOpacity style={{ width:70, height:70, borderRadius:10, backgroundColor:'#D9D9D9'}}>
                    <Image
                    source={require('../../Assets/racao1.png')}
                    style={{ width:70, height:70, borderRadius:10}}
                    />
                    </TouchableOpacity>
                    <View style={{marginLeft:-30}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Ração Premier 15 KG</Text>
                        <Text>Descrição do produto</Text>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>R$ 222,41</Text>
                    </View>
                    <View style={{backgroundColor:'#2460DA', height:80, width:40, borderRadius:10, alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color:'white', fontSize:24}}>^</Text>
                        </TouchableOpacity>
                            <Text  style={{color:'white', fontSize:25, marginTop:-10}}>1</Text>
                        <TouchableOpacity>
                            <Text  style={{color:'white', fontSize:17,fontWeight:'500', marginTop:-5}}>v</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'85%', marginTop:12,height:100, backgroundColor:'#F0F0F0', borderRadius:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between',paddingHorizontal:10}}>
                    <TouchableOpacity style={{ width:70, height:70, borderRadius:10, backgroundColor:'#D9D9D9'}}>
                    <Image
                    source={require('../../Assets/golden.png')}
                    style={{ width:70, height:70, borderRadius:10}}
                    />
                    </TouchableOpacity>
                    <View style={{marginLeft:-30}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Ração Golden 20KG</Text>
                        <Text>Descrição do produto</Text>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>R$ 161,34</Text>
                    </View>
                    <View style={{backgroundColor:'#2460DA', height:80, width:40, borderRadius:10, alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color:'white', fontSize:24}}>^</Text>
                        </TouchableOpacity>
                            <Text  style={{color:'white', fontSize:25, marginTop:-10}}>3</Text>
                        <TouchableOpacity>
                            <Text  style={{color:'white', fontSize:17,fontWeight:'500', marginTop:-5}}>v</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'85%', marginTop:12,height:100, backgroundColor:'#F0F0F0', borderRadius:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between',paddingHorizontal:10}}>
                    <TouchableOpacity style={{ width:70, height:70, borderRadius:10, backgroundColor:'#D9D9D9'}}>
                    <Image
                    source={require('../../Assets/whiskas.png')}
                    style={{ width:70, height:70, borderRadius:10}}
                    />
                    </TouchableOpacity>
                    <View style={{marginLeft:-30}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Petisco Whiskas</Text>
                        <Text>Descrição do produto</Text>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>R$ 9,89</Text>
                    </View>
                    <View style={{backgroundColor:'#2460DA', height:80, width:40, borderRadius:10, alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color:'white', fontSize:24}}>^</Text>
                        </TouchableOpacity>
                            <Text  style={{color:'white', fontSize:25, marginTop:-10}}>7</Text>
                        <TouchableOpacity>
                            <Text  style={{color:'white', fontSize:17,fontWeight:'500', marginTop:-5}}>v</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'85%', marginTop:12,height:100, backgroundColor:'#F0F0F0', borderRadius:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between',paddingHorizontal:10}}>
                    <TouchableOpacity style={{ width:70, height:70, borderRadius:10, backgroundColor:'#D9D9D9'}}>
                    <Image
                    source={require('../../Assets/milb.png')}
                    style={{ width:70, height:70, borderRadius:10}}
                    />
                    </TouchableOpacity>
                    <View style={{marginLeft:-30}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Vermíf. Milbemax</Text>
                        <Text>Descrição do produto</Text>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>R$ 39,90</Text>
                    </View>
                    <View style={{backgroundColor:'#2460DA', height:80, width:40, borderRadius:10, alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color:'white', fontSize:24}}>^</Text>
                        </TouchableOpacity>
                            <Text  style={{color:'white', fontSize:25, marginTop:-10}}>0</Text>
                        <TouchableOpacity>
                            <Text  style={{color:'white', fontSize:17,fontWeight:'500', marginTop:-5}}>v</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'85%', marginTop:12,height:100, backgroundColor:'#F0F0F0', borderRadius:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between',paddingHorizontal:10}}>
                    <TouchableOpacity style={{ width:70, height:70, borderRadius:10, backgroundColor:'#D9D9D9'}}>
                    <Image
                    source={require('../../Assets/gran.png')}
                    style={{ width:70, height:70, borderRadius:10}}
                    />
                    </TouchableOpacity>
                    <View style={{marginLeft:-30}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Ração Gran Plus 1KG</Text>
                        <Text>Descrição do produto</Text>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>R$ R$21,90</Text>
                    </View>
                    <View style={{backgroundColor:'#2460DA', height:80, width:40, borderRadius:10, alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color:'white', fontSize:24}}>^</Text>
                        </TouchableOpacity>
                            <Text  style={{color:'white', fontSize:25, marginTop:-10}}>2</Text>
                        <TouchableOpacity>
                            <Text  style={{color:'white', fontSize:17,fontWeight:'500', marginTop:-5}}>v</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'85%', marginTop:12, height:100, backgroundColor:'#F0F0F0', borderRadius:10, flexDirection:'row', alignItems:'center', justifyContent:'space-between',paddingHorizontal:10}}>
                    <TouchableOpacity style={{ width:70, height:70, borderRadius:10, backgroundColor:'#D9D9D9'}}>
                    <Image
                    source={require('../../Assets/royal.png')}
                    style={{ width:70, height:70, borderRadius:10}}
                    />
                    </TouchableOpacity>
                    <View style={{marginLeft:-30}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Ração Royal 10kg</Text>
                        <Text>Descrição do produto</Text>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>R$ 413,90</Text>
                    </View>
                    <View style={{backgroundColor:'#2460DA', height:80, width:40, borderRadius:10, alignItems:'center'}}>
                        <TouchableOpacity>
                            <Text style={{color:'white', fontSize:24}}>^</Text>
                        </TouchableOpacity>
                            <Text  style={{color:'white', fontSize:25, marginTop:-10}}>1</Text>
                        <TouchableOpacity>
                            <Text  style={{color:'white', fontSize:17,fontWeight:'500', marginTop:-5}}>v</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'85%'}}>
                <TouchableOpacity style={{height:50,backgroundColor:'#2460DA', marginTop:30, borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('Carrinho')}>
                    <Text style={{color:'white', fontSize:25}}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}