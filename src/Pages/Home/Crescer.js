import React, {useState} from 'react';
import { View, TouchableOpacity,Text, ScrollView, TextInput, Image, Animated } from 'react-native';

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
    const [investido, setInvestido] = useState('')
    const [altura, setAltura] = useState(new Animated.Value(70));
    const [altura2, setAltura2] = useState(new Animated.Value(70));
    const [altura3, setAltura3] = useState(new Animated.Value(70));
    const [pessoal, setPessoal] = useState(null);
    const [pessoal2, setPessoal2] = useState(null);
    const [pessoal3, setPessoal3] = useState(null);

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

    function presStar(){
        setStar('1')
        setStar2(null)
        setStar3(null)
        setStar4(null)
        setStar5(null)
    }

    function presStar2(){
        setStar('1')
        setStar2('2')
        setStar3(null)
        setStar4(null)
        setStar5(null)
    }

    function presStar3(){
        setStar('1')
        setStar2('2')
        setStar3('3')
        setStar4(null)
        setStar5(null)
    }
    function presStar4(){
        setStar('1')
        setStar2('2')
        setStar3('3')
        setStar4('4')
        setStar5(null)
    }

    function presStar5(){
        setStar('1')
        setStar2('2')
        setStar3('3')
        setStar4('4')
        setStar5('5')
    }

    function abrir(){
        if (pessoal === null){ 
            Animated.timing(
                altura,
                {
                   toValue: 280,
                   duration: 300,
                   useNativeDriver:false
                }
            ).start();
            
            setPessoal('aberto')
        }
        else{
            Animated.timing(
                altura,
                {
                   toValue: 70,
                   duration: 300,
                   useNativeDriver:false
                }
            ).start();
            setPessoal(null)
        }
    }

    function abrir2(){
        if (pessoal2 === null){ 
            Animated.timing(
                altura2,
                {
                   toValue: 310,
                   duration: 300,
                   useNativeDriver:false
                }
            ).start();
            
            setPessoal2('aberto')
        }
        else{
            Animated.timing(
                altura2,
                {
                   toValue: 70,
                   duration: 300,
                   useNativeDriver:false
                }
            ).start();
            setPessoal2(null)
        }
    }

    function abrir3(){
        if (pessoal3 === null){ 
            Animated.timing(
                altura3,
                {
                   toValue: 550,
                   duration: 300,
                   useNativeDriver:false
                }
            ).start();
            
            setPessoal3('aberto')
        }
        else{
            Animated.timing(
                altura3,
                {
                   toValue: 70,
                   duration: 300,
                   useNativeDriver:false
                }
            ).start();
            setPessoal3(null)
        }
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
                placeholder='digite o preço do produto'
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
           value={comentario}
           onChangeText={value => setComentario(value)}
           style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
           placeholder='digite o nome do produto'
           placeholderTextColor={'grey'}
       />
       <Text style={{marginTop: 20, fontSize:20, fontWeight:'bold'}}>NOTA</Text>
       <View style={{flexDirection:'row'}}>
       <TouchableOpacity style={{ marginTop:20}} onPress={presStar}>
           <Image 
           source={require('../../Assets/starsolo.png')}
           style={{tintColor: star ? '#FDB913' : '#E2E2E2', marginRight:10}}
           />
       </TouchableOpacity>
       <TouchableOpacity style={{ marginTop:20}} onPress={presStar2}>
           <Image 
           source={require('../../Assets/starsolo.png')}
           style={{tintColor: star2 ? '#FDB913' : '#E2E2E2', marginRight:10}}
           />
       </TouchableOpacity>
       <TouchableOpacity style={{ marginTop:20}} onPress={presStar3}>
           <Image 
           source={require('../../Assets/starsolo.png')}
           style={{tintColor: star3 ? '#FDB913' : '#E2E2E2', marginRight:10}}
           />
       </TouchableOpacity>
       <TouchableOpacity style={{ marginTop:20}} onPress={presStar4}>
           <Image 
           source={require('../../Assets/starsolo.png')}
           style={{tintColor: star4 ? '#FDB913' : '#E2E2E2', marginRight:10}}
           />
       </TouchableOpacity>
       <TouchableOpacity style={{ marginTop:20}} onPress={presStar5}>
           <Image 
           source={require('../../Assets/starsolo.png')}
           style={{tintColor: star5 ? '#FDB913' : '#E2E2E2', marginRight:10}}
           />
       </TouchableOpacity>
       </View>
       <TouchableOpacity style={{backgroundColor:'#2460DA', height:55, marginTop:20, borderRadius:10, marginBottom:30, justifyContent:'center', alignItems:'center', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:25}} onPress={() => {}}>
           <Text style={{color:'white', fontSize:20}}>AVALIAR</Text>
           <Text style={{color:'white', fontSize:40}}>+</Text>
       </TouchableOpacity>
   </View>
        }
        {investir && 
        <ScrollView style={{paddingHorizontal:30}}>
            <Animated.View style={{backgroundColor:'#2460DA', height:altura, borderRadius:9, marginTop:40}}>
                    <TouchableOpacity onPress={abrir}>
                        <Text style={{padding:15, fontSize:25, color:'white'}}>ENTRAR EM CONTATO</Text>
                    </TouchableOpacity>
                    { pessoal &&
                        <View style={{paddingHorizontal:30}}>
                            <TouchableOpacity style={{borderBottomWidth:1, borderColor:'white', padding:5}}>
                                <Text style={{color:'white', fontSize:18 }}>NOME COMPLETO</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomWidth:1, borderColor:'white', padding:5, marginTop:10}}>
                                <Text style={{color:'white', fontSize:18}}>TELEFONE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomWidth:1, borderColor:'white', padding:5, marginTop:10}}>
                                <Text style={{color:'white', fontSize:18 }}>LOCALIDADE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomWidth:1, borderColor:'white', padding:5, marginTop:10}}>
                                <Text style={{color:'white', fontSize:18 }}>EMAIL</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </Animated.View>
                <Animated.View style={{backgroundColor:'#2460DA', height:altura2, borderRadius:9, marginTop:10}}>
                    <TouchableOpacity onPress={abrir2}>
                        <Text style={{padding:15, fontSize:25, color:'white'}}>DOAR</Text>
                    </TouchableOpacity>
                    { pessoal2 &&
                        <View style={{paddingHorizontal:30}}> 
                        <Text style={{fontSize:20, fontWeight:'600', color:'white'}}>EM DINHEIRO</Text>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <TouchableOpacity style={{backgroundColor:'white', height:40, width: 80, borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}}>
                                <Text style={{fontSize:18, fontWeight:'700'}}>R$ 5,00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'white', height:40, width: 90, borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}}>
                                <Text style={{fontSize:18, fontWeight:'700'}}>R$ 10,00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'white', height:40, width: 90, borderRadius:10, justifyContent:'center', alignItems:'center'}}>
                                <Text style={{fontSize:18, fontWeight:'700'}}>R$ 20,00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row', marginTop:10, justifyContent:'center'}}>
                            <TouchableOpacity style={{backgroundColor:'white', height:40, width: 100, borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}}>
                                <Text style={{fontSize:18, fontWeight:'700'}}>R$ 50,00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'white', height:40, width: 100, borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}}>
                                <Text style={{fontSize:18, fontWeight:'700'}}>R$ 100,00</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{marginTop: 20, fontSize:20, fontWeight:'bold', color:'white'}}>ME MATERIAL</Text>
                        <TextInput 
                            value={investido}
                            onChangeText={value => setInvestido(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5, borderColor:'white'}}
                            placeholder='digite que você tenha para doar'
                            placeholderTextColor={'white'}
                        />
                        </View>
                    }
                </Animated.View>
                <Animated.View style={{backgroundColor:'#2460DA', height:altura3, borderRadius:9, marginTop:10}}>
                    <TouchableOpacity onPress={abrir3}>
                        <Text style={{padding:15, fontSize:25, color:'white'}}>INVESTIR</Text>
                    </TouchableOpacity>
                    { pessoal3 &&
                        <View>
                            <Text> salve salve </Text>
                        </View>
                    }
                </Animated.View>
        </ScrollView>
        }
   </ScrollView>
  );
}