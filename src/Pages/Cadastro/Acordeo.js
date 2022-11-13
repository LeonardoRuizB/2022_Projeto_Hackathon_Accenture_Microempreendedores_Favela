import React, {useState} from 'react';
import { View, TouchableOpacity,Text, ScrollView } from 'react-native';
import Cliente from './clietes';
import CadEmpresa from './Empresa';
import CadMotoboy from './Motoboy';
import cadMotoboy from './Motoboy';

export default function Acordeao() {
    const [empresa, setEmpresa] = useState('Cliente')
    const [cliente, setCliente] = useState(null)
    const [moto, setMoto] = useState(null)

    function selCliente(){
        setCliente('cleinte')
        setEmpresa(null)
        setMoto(null)
    }

    function selEmpresa(){
        setCliente(null)
        setEmpresa('Empresa')
        setMoto(null)
    }

    function selMotoboy(){
        setCliente(null)
        setEmpresa(null)
        setMoto('Motoboy')
    }

 return (
    <View>
        <View style={{paddingHorizontal:30, flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity style={{backgroundColor: cliente ? '#2460DA' : '#D9D9D9' , height:40, width:90, marginTop:10,borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={selCliente}>
                <Text style={{color:'white'}}>Cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:empresa ? '#2460DA' : '#D9D9D9', height:40, width:90, marginTop:10,borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={selEmpresa}>
                <Text style={{color:'white'}}>Empresa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:moto ? '#2460DA' : '#D9D9D9', height:40, width:90, marginTop:10,borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={selMotoboy}>
                <Text style={{color:'white'}}>Motoboy</Text>
            </TouchableOpacity>
        </View>
        { cliente && 
            <View>
                <Cliente/>
            </View>
        }
         { empresa && 
            <ScrollView>
                <CadEmpresa/>
            </ScrollView>
        }
         { moto && 
            <ScrollView>
                <CadMotoboy/>
            </ScrollView>
        }
   </View>
  );
}