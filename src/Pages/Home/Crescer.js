import React, {useState} from 'react';
import { View, TouchableOpacity,Text, ScrollView, TextInput, Image, Animated } from 'react-native';

export default function Crescer() {
    const [avaliação, setAvaliação] = useState(null)
    const [comentario, setComentario] = useState('')
    const [star, setStar] = useState(null)
    const [star2, setStar2] = useState(null)
    const [star3, setStar3] = useState(null)
    const [star4, setStar4] = useState(null)
    const [star5, setStar5] = useState(null)
    const [investir, setInvestir] = useState('Aberto')
    const [investido, setInvestido] = useState('')
    const [nomeInvestidor, setNomeInvestido] = useState('')
    const [telInvestidor, setTelInvestidor] = useState('')
    const [emailInvestidor, setEmailInvestidor] = useState('')
    const [mensangInvestidor, setMensanginvestidor] = useState('')
    const [altura, setAltura] = useState(new Animated.Value(70));
    const [altura2, setAltura2] = useState(new Animated.Value(70));
    const [altura3, setAltura3] = useState(new Animated.Value(70));
    const [pessoal, setPessoal] = useState(null);
    const [pessoal2, setPessoal2] = useState(null);
    const [pessoal3, setPessoal3] = useState(null);
    const [mensal, setMensal] = useState(null);
    const [pontual, setPontual] = useState('Aberto');
    const [reais5, setReais5] = useState(null);
    const [reais10, setReais10] = useState(null);
    const [reais20, setReais20] = useState(null);
    const [reais50, setReais50] = useState(null);
    const [reais100, setReais100] = useState(null);

    function selAvaliacao(){
        setAvaliação('Avaliação')
        setInvestir(null)
    }

    function selInvestir(){
        setAvaliação(null)
        setInvestir('Investir')
    }

    function sel5(){
        setReais5(5)
        setReais10(null)
        setReais20(null)
        setReais50(null)
        setReais100(null)
    }
    function sel10(){
        setReais5(null)
        setReais10(10)
        setReais20(null)
        setReais50(null)
        setReais100(null)
    }
    function sel20(){
        setReais5(null)
        setReais10(null)
        setReais20(20)
        setReais50(null)
        setReais100(null)
    }
    function sel50(){
        setReais5(null)
        setReais10(null)
        setReais20(null)
        setReais50(50)
        setReais100(null)
    }
    function sel100(){
        setReais5(null)
        setReais10(null)
        setReais20(null)
        setReais50(null)
        setReais100(100)
    }

    function selMensal(){
        setPontual('Mensal')
        setMensal(null)
    }

    function selPontual(){
        setPontual(null)
        setMensal('Mensal')
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
                   toValue: 390,
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
                   toValue: 470,
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
    <ScrollView style={{backgroundColor:'#F7FCFB', paddingTop:20}}>
        <View style={{flex:1}}>
        <View style={{paddingHorizontal:30, flexDirection:'row', justifyContent:'center'}}>
            <TouchableOpacity style={{backgroundColor:investir ? '#2460DA' : '#D9D9D9', height:40, width:90, marginTop:10,borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={selInvestir}>
                <Text style={{color:investir ? 'white' : 'black'}}>INVESTIR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:avaliação ? '#2460DA' : '#D9D9D9', height:40, width:90, marginTop:10,borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={selAvaliacao}>
                <Text style={{color:avaliação ? 'white' : 'black'}}>AVALIAÇÃO</Text>
            </TouchableOpacity>
        </View>
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
        <ScrollView style={{paddingHorizontal:30, paddingBottom:50}}>
            <Animated.View style={{backgroundColor:'#2460DA', height:altura, borderRadius:9, marginTop:25}}>
                    <TouchableOpacity onPress={abrir}>
                        <Text style={{padding:15, fontSize:25, color:'white'}}>ENTRAR EM CONTATO</Text>
                    </TouchableOpacity>
                    { pessoal &&
                        <View style={{paddingHorizontal:30}}>
                            <TouchableOpacity style={{borderBottomWidth:1, borderColor:'white', padding:5}}>
                                <Text style={{color:'white', fontSize:18 }}>Benta Silva de Souza</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomWidth:1, borderColor:'white', padding:5, marginTop:10}}>
                                <Text style={{color:'white', fontSize:18}}>(11) 98977-5349</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomWidth:1, borderColor:'white', padding:5, marginTop:10}}>
                                <Text style={{color:'white', fontSize:18 }}>São Paulo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{borderBottomWidth:1, borderColor:'white', padding:5, marginTop:10}}>
                                <Text style={{color:'white', fontSize:18 }}>benta@ig.com</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </Animated.View>
                <Animated.View style={{backgroundColor:'#2460DA', height:altura2, borderRadius:9, marginTop:10}}>
                    <TouchableOpacity onPress={abrir2}>
                        <Text style={{padding:15, fontSize:25, color:'white'}}>SEJA UM PADRINHO</Text>
                    </TouchableOpacity>
                    { pessoal2 &&
                        <View style={{paddingHorizontal:30}}> 
                        <View style={{paddingHorizontal:30, flexDirection:'row', justifyContent:'center'}}>
                            <TouchableOpacity style={{backgroundColor:pontual ? 'grey' : 'white', height:40, width:90,borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={selMensal}>
                                <Text style={{color:pontual ?  'white' : '#2460DA'}}>PONTUAL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:mensal ? 'grey' : 'white', height:40, width:90,borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={selPontual}>
                                <Text style={{color:mensal ? 'white' : '#2460DA'}}>MENSAL</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontSize:20, fontWeight:'600', color:'white'}}>EM DINHEIRO</Text>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <TouchableOpacity style={{backgroundColor:reais5 ?  'grey' : 'white', height:40, width: 80, borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={sel5}>
                                <Text style={{fontSize:18, fontWeight:'700', color:reais5 ? 'white' : '#2460DA'}}>R$ 5,00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:reais10 ?  'grey' : 'white', height:40, width: 90, borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={sel10}>
                                <Text style={{fontSize:18, fontWeight:'700', color: reais10  ? 'white' : '#2460DA'}}>R$ 10,00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:reais20 ?  'grey' : 'white', height:40, width: 90, borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={sel20}>
                                <Text style={{fontSize:18, fontWeight:'700', color: reais20  ? 'white' : '#2460DA'}}>R$ 20,00</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row', marginTop:10, justifyContent:'center'}}>
                            <TouchableOpacity style={{backgroundColor:reais50 ?  'grey' : 'white', height:40, width: 100, borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={sel50}>
                                <Text style={{fontSize:18, fontWeight:'700', color: reais50  ? 'white' : '#2460DA'}}>R$ 50,00</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:reais100 ?  'grey' : 'white', height:40, width: 100, borderRadius:10, justifyContent:'center', alignItems:'center', marginRight:10}} onPress={sel100}>
                                <Text style={{fontSize:18, fontWeight:'700', color: reais100  ? 'white' : '#2460DA'}}>R$ 100,00</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{marginTop: 20, fontSize:20, fontWeight:'bold', color:'white'}}>EM MATERIAL</Text>
                        <TextInput 
                            value={investido}
                            onChangeText={value => setInvestido(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5, borderColor:'white'}}
                            placeholder='Digite que você tenha para doar'
                            placeholderTextColor={'white'}
                        />
                        <TouchableOpacity style={{backgroundColor:'white', height:45, marginTop:10, borderRadius:10, marginBottom:10, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'#2460DA', fontSize:20}}>Apadrinhar</Text>
                        </TouchableOpacity>
                        </View>
                    }
                </Animated.View>
                <Animated.View style={{backgroundColor:'#2460DA', height:altura3, borderRadius:9, marginTop:10}}>
                    <TouchableOpacity onPress={abrir3}>
                        <Text style={{padding:15, fontSize:25, color:'white'}}>INVESTIR</Text>
                    </TouchableOpacity>
                    { pessoal3 &&
                        <View style={{paddingHorizontal:30}}>
                            <Text style={{marginTop: 10, fontSize:20, fontWeight:'bold', color:'white'}}>NOME</Text>
                        <TextInput 
                            value={nomeInvestidor}
                            onChangeText={value => setNomeInvestido(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5, borderColor:'white'}}
                            placeholder='digite seu nome'
                            placeholderTextColor={'white'}
                        />
                        <Text style={{marginTop: 20, fontSize:20, fontWeight:'bold', color:'white'}}>TELEFONE</Text>
                        <TextInput 
                            value={telInvestidor}
                            onChangeText={value => setTelInvestidor(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5, borderColor:'white'}}
                            placeholder='digite seu telefone'
                            placeholderTextColor={'white'}
                        />
                        <Text style={{marginTop: 20, fontSize:20, fontWeight:'bold', color:'white'}}>EMAIL</Text>
                        <TextInput 
                            value={emailInvestidor}
                            onChangeText={value => setEmailInvestidor(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5, borderColor:'white'}}
                            placeholder='digite seu email'
                            placeholderTextColor={'white'}
                        />
                        <Text style={{marginTop: 20, fontSize:20, fontWeight:'bold', color:'white'}}>MENSAGEM</Text>
                        <TextInput 
                            value={mensangInvestidor}
                            onChangeText={value => setMensanginvestidor(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5, borderColor:'white'}}
                            placeholder='digite como pretende investir'
                            placeholderTextColor={'white'}
                        />
                        <TouchableOpacity style={{backgroundColor:'white', height:45, marginTop:10, borderRadius:10, marginBottom:10, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{color:'#2460DA', fontSize:20}}>Enviar</Text>
                        </TouchableOpacity>
                        </View>
                    }
                </Animated.View>
        </ScrollView>
        }
        </View>
   </ScrollView>
  );
}