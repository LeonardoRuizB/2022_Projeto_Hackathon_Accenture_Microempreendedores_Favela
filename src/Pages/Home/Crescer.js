import React, {useState} from 'react';
import { View, TouchableOpacity,Text, ScrollView, TextInput, Image } from 'react-native';

export default function Crescer() {
    const [produto, setProduto] = useState('Produto')
    const [nomeProduto, setNomeProduto] = useState('')
    const [descProduto, setDescProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [avaliação, setAvaliação] = useState(null)
    const [comentario, setComentario] = useState('')
    const [star, setStar] = useState(null)
    const [star2, setStar2] = useState(null)
    const [star3, setStar3] = useState(null)
    const [star4, setStar4] = useState(null)
    const [star5, setStar5] = useState(null)
    const [investir, setInvestir] = useState(null)

    function selProduto(){
        setProduto('Produto')
        setAvaliação(null)
        setInvestir(null)
    }

    function selAvaliacao(){
        setProduto(null)
        setAvaliação('Avaliação')
        setInvestir(null)
    }

    function selInvestir(){
        setProduto(null)
        setAvaliação(null)
        setInvestir('Investir')
    }

 return (
    <ScrollView style={{backgroundColor:'#F7FCFB'}}>
        <Text style={{paddingHorizontal:30,fontSize:20, fontWeight:'bold', marginTop:10}}>Criar conta como:</Text>
        <View style={{paddingHorizontal:30, flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity style={{backgroundColor: produto ? '#2460DA' : '#D9D9D9' , height:40, width:90, marginTop:10,borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={selProduto}>
                <Text style={{color:produto ? 'white' : 'black'}}>Produto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:avaliação ? '#2460DA' : '#D9D9D9', height:40, width:90, marginTop:10,borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={selAvaliacao}>
                <Text style={{color:avaliação ? 'white' : 'black'}}>Avaliação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:investir ? '#2460DA' : '#D9D9D9', height:40, width:90, marginTop:10,borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={selInvestir}>
                <Text style={{color:investir ? 'white' : 'black'}}>Investir</Text>
            </TouchableOpacity>
        </View>
        {produto && 
        <View style={{paddingHorizontal:30, marginTop:15}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>NOME DO PRODUTO</Text>
            <TextInput 
                value={nomeProduto}
                onChangeText={value => setNomeProduto(value)}
                style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                placeholder='digite o nome do produto'
                placeholderTextColor={'grey'}
            />
            <Text style={{marginTop: 20, fontSize:20, fontWeight:'bold'}}>DESCRIÇÃO</Text>
            <TextInput 
                value={descProduto}
                onChangeText={value => setDescProduto(value)}
                style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                placeholder='digite o nome do produto'
                placeholderTextColor={'grey'}
            />
            <Text style={{marginTop: 20, fontSize:20, fontWeight:'bold'}}>PREÇO</Text>
            <TextInput 
                value={precoProduto}
                onChangeText={value => setPrecoProduto(value)}
                style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                placeholder='digite o nome do produto'
                placeholderTextColor={'grey'}
                keyboardType='numeric'
            />
            <TouchableOpacity style={{backgroundColor:'#F2EEE9', height:90, marginTop:30, borderRadius:10, justifyContent:'center', alignItems:'center', borderWidth:1}}>
                <Text style={{fontSize:20, fontWeight:'600'}}>FOTO DE CAPA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:'#2460DA', height:55, marginTop:20, borderRadius:10, marginBottom:30, justifyContent:'center', alignItems:'center', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:25}}>
                <Text style={{color:'white', fontSize:20}}>INSERIR PRODUTO</Text>
                <Text style={{color:'white', fontSize:40}}>+</Text>
            </TouchableOpacity>
        </View>
        }
        {avaliação && 
       <View style={{paddingHorizontal:30, marginTop:15}}>
       <Text style={{marginTop: 20, fontSize:20, fontWeight:'bold'}}>COMENTÁRIO</Text>
       <TextInput 
           value={descProduto}
           onChangeText={value => setDescProduto(value)}
           style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
           placeholder='digite o nome do produto'
           placeholderTextColor={'grey'}
       />
       <View style={{flexDirection:'row'}}>
       <TouchableOpacity style={{ marginTop:30}}>
           <Image 
           source={require('../../Assets/starsolo.png')}
           style={{tintColor: star ? '#FDB913' : '#E2E2E2', marginRight:10}}
           />
       </TouchableOpacity>
       <TouchableOpacity style={{ marginTop:30}}>
           <Image 
           source={require('../../Assets/starsolo.png')}
           style={{tintColor: star2 ? '#FDB913' : '#E2E2E2'}}
           />
       </TouchableOpacity>
       <TouchableOpacity style={{ marginTop:30}}>
           <Image 
           source={require('../../Assets/starsolo.png')}
           style={{tintColor: star3 ? '#FDB913' : '#E2E2E2'}}
           />
       </TouchableOpacity>
       <TouchableOpacity style={{ marginTop:30}}>
           <Image 
           source={require('../../Assets/starsolo.png')}
           style={{tintColor: star4 ? '#FDB913' : '#E2E2E2'}}
           />
       </TouchableOpacity>
       <TouchableOpacity style={{ marginTop:30}}>
           <Image 
           source={require('../../Assets/starsolo.png')}
           style={{tintColor: star5 ? '#FDB913' : '#E2E2E2'}}
           />
       </TouchableOpacity>
       </View>
       <TouchableOpacity style={{backgroundColor:'#2460DA', height:55, marginTop:20, borderRadius:10, marginBottom:30, justifyContent:'center', alignItems:'center', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:25}} onPress={() => {}}>
           <Text style={{color:'white', fontSize:20}}>INSERIR PRODUTO</Text>
           <Text style={{color:'white', fontSize:40}}>+</Text>
       </TouchableOpacity>
   </View>
        }
        {investir && 
        <View>
            <Text>Apareceu investir</Text>
        </View>
        }
   </ScrollView>
  );
}