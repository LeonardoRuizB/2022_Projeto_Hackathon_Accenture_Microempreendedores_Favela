import React, {useState} from 'react';
import { View, TouchableOpacity,Text, ScrollView } from 'react-native';
import CadastroEmpreendedor from './Empreendedor';
import CadastroPadrinho from './Padrinho';

export default function CriarConta() {
    const [empreendedor, setEmpreendedor] = useState('Aberto')
    const [padrinho, setPadrinho] = useState(null)

    function selEmpreendedor(){
        setEmpreendedor('empreendedor')
        setPadrinho(null)
    }
    function selPadrinho(){
        setEmpreendedor(null)
        setPadrinho('Padrinho')
    }

 return (
    <ScrollView style={{backgroundColor:'#F7FCFB'}}>
        <Text style={{paddingHorizontal:30,fontSize:20, fontWeight:'bold', marginTop:10}}>CRIAR CONTA COMO:</Text>
        <View style={{paddingHorizontal:30, flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity style={{backgroundColor: empreendedor ? '#2460DA' : '#D9D9D9' , height:40, width:130, marginTop:10,borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={selEmpreendedor}>
                <Text style={{color:empreendedor ? 'white' : 'black'}}>EMPREENDEDOR</Text>
            </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:padrinho ? '#2460DA' : '#D9D9D9', height:40, width:90, marginTop:10,borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={selPadrinho}>
                <Text style={{color:padrinho ? 'white' : 'black'}}>PADRINHO</Text>
            </TouchableOpacity>
        </View>
        { empreendedor && 
            <View>
                <CadastroEmpreendedor/>
            </View>
        }
        { padrinho && 
            <View>
                <CadastroPadrinho/>
            </View>
        }
   </ScrollView>
  );
}