import react from "react";
import {
        View,
        Text,
        ScrollView,
        TouchableOpacity, 
        Image,
        Alert
} from 'react-native'
import { useNavigation } from "@react-navigation/native"; 

export function Pagamento(){

        function WhatsApp(){
                Alert.alert('Link de pagamento enviado!', 'Link de pagamento enviado com sucesso para o WHATSAPP')
        }
        function Facebook(){
                Alert.alert('Link de pagamento enviado!', 'Link de pagamento enviado com sucesso para o FACEBOOK')
        }
        function SMS(){
                Alert.alert('Link de pagamento enviado!', 'Link de pagamento enviado com sucesso para o SMS')
        }
        function EMAIL(){
                Alert.alert('Link de pagamento enviado!', 'Link de pagamento enviado com sucesso para o E-MAIL')
        }

    return(
        <ScrollView style={{paddingVertical:20, backgroundColor:'#F7FCFB'}}>
            <View style={{width:'90%' ,backgroundColor:'#F0F0F0', marginLeft:19, borderRadius:10, marginBottom:50}}>
                <Image
                source={require('../../Assets/Pagamento.png')}
                style={{marginLeft:20}}
                />
                <View style={{paddingHorizontal:25}}>
                        <Text style={{fontSize:20}}>LINK DE PAGAMENTO</Text>    
                        <Text style={{paddingTop:8, borderBottomWidth:0.5, paddingLeft:10, fontSize:16}}>dbbf965d-677c-49ff-b9da-5131da1505f3</Text>  
                        <Text style={{fontSize:22, marginTop:5}}>Total: R$1.273,54</Text>  
                </View>
                <Text style={{paddingHorizontal:25, marginTop:20, marginBottom:10, fontSize:20}}>ENVIAR POR:</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:25}}>
                        <TouchableOpacity style={{height:50, backgroundColor:'#0FBD5F', width:'45%', borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={WhatsApp}>
                                <Text style={{color:'white', fontSize:20}}>WhatsApp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:50, backgroundColor:'#135EA3', width:'45%', borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={Facebook}>
                                <Text style={{color:'white', fontSize:20}}>Facebook</Text>
                        </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:25, marginTop:10, paddingBottom:50}}>
                        <TouchableOpacity style={{height:50, backgroundColor:'#BABABA', width:'45%', borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={SMS}>
                                <Text style={{color:'white', fontSize:20}}>SMS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:50, backgroundColor:'#0298A1', width:'45%', borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={EMAIL}>
                                <Text style={{color:'white', fontSize:20}}>E-MAIL</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}