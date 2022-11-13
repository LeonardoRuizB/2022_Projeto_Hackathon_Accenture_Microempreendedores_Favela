import react from "react";
import {
        View,
        Text,
        ScrollView,
        TouchableOpacity, 
        Image
} from 'react-native'
import { useNavigation } from "@react-navigation/native"; 

export function Carrinho(){

    const navigation = useNavigation();

    return(
        <ScrollView style={{paddingVertical:20, backgroundColor:'#F7FCFB'}}>
            <View style={{width:'90%' ,backgroundColor:'#F0F0F0', marginLeft:19, borderRadius:10, marginBottom:50}}>
                <Image
                source={require('../../Assets/Carrinho.png')}
                style={{marginLeft:80}}
                />
                <View style={{borderBottomWidth:0.5, marginHorizontal:25}}> 
                    <Text style={{fontSize:22}}>Carrinho da Formosa Pet</Text>
                    <Text style={{paddingTop:20}}>Nome do cliente</Text>
                    <Text style={{paddingBottom:20}}>Endereço de entrega</Text>
                </View>   
                <View style={{marginTop:10}}>
                    <View style={{flexDirection:'row',height:35 , justifyContent:'space-between', marginHorizontal:25, borderBottomWidth:0.5}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Ração Premier 15 KG</Text>
                        <Text style={{marginLeft:-50}}>( 1 )</Text>
                        <Text>R$ 222,41</Text>
                    </View>
                    <View style={{flexDirection:'row',height:35, justifyContent:'space-between', marginHorizontal:25, borderBottomWidth:0.5, marginTop:8}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Ração Golden 20KG</Text>
                        <Text style={{marginLeft:-70}}>( 3 )</Text>
                        <Text>R$ 484,02</Text>
                    </View>
                    <View style={{flexDirection:'row',height:35, justifyContent:'space-between', marginHorizontal:25, borderBottomWidth:0.5, marginTop:8}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Petisco Whiskas</Text>
                        <Text style={{marginLeft:-100}}>( 7 )</Text>
                        <Text>R$ 69,51</Text>
                    </View>
                    <View style={{flexDirection:'row',height:35, justifyContent:'space-between', marginHorizontal:25, borderBottomWidth:0.5, marginTop:8}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Ração Royal 10kg</Text>
                        <Text style={{marginLeft:-80}}>( 1 )</Text>
                        <Text>R$ 431,90</Text>
                    </View>
                    <View style={{flexDirection:'row',height:35, justifyContent:'space-between', marginHorizontal:25, borderBottomWidth:0.5, marginTop:8}}>
                        <Text style={{fontSize:16, fontWeight:'500'}}>Ração Gran Plus 1KG</Text>
                        <Text style={{marginLeft:-70}}>( 2 )</Text>
                        <Text>R$ 65,7</Text>
                    </View>
                </View>
                <Text style={{textAlign:'right', paddingRight:25, fontSize:22, marginTop:20}}>Total: R$1.273,54</Text>
                <TouchableOpacity style={{backgroundColor:'#2460DA', marginHorizontal:25, marginTop:20, marginBottom:30,height:45, borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={() => navigation.navigate('Pagamento')}>
                    <Text style={{color:'white', fontSize:22}}>Gerar link de Pagamento</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}