import React, {useState} from 'react';
import {  View,
    Text,
    TouchableOpacity, 
    TextInput, 
    ScrollView,
    Alert,
    Image } from 'react-native';
import auth from '@react-native-firebase/auth'; 
import firestore from '@react-native-firebase/firestore'

export default function CadastroEmpreendedor(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setConfpassword] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [mei, setMei] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [check, setCheck] = useState([]);

    const options = ['Desejo receber novidades e atualizações.', 'Concordo com                              e condições.']

    function pickCheck(selectedchecks){
    
        const index = check.findIndex(checks => checks == selectedchecks)

        if(check.includes(selectedchecks)){
            setCheck(check.filter(checks => checks == !selectedchecks))
            return;
        }

        setCheck(checkss => checkss.concat(selectedchecks))

    }

    function termos(){
        Alert.alert('Termos de uso', '1. Definições 1.1 Os termos e as expressões iniciados em letra maiúscula nestas Condições Gerais ou em quaisquer documentos anexos ou vinculados a este instrumento terão os significados que lhes são indicados na Lista de Definições abaixo:  “API” é a Interface de Programação de Aplicativos do iFood, assim como demais informações, ferramentas, documentações e arquivos relacionados ao iFood que poderão vir a ser disponibilizados aos Desenvolvedores de Aplicativos selecionados para participação no Programa. “Aplicativo(s)” é software, site ou qualquer outro tipo de interface que desenvolvida pelos Desenvolvedores de Aplicativos que possui condições de interagir perfeitamente com API informada pelo iFood no desenvolvimento do Programa. “Clientes Finais” significam os usuários finais (uma pessoa natural ou uma pessoa jurídica) cadastrados e autorizados pela iFood para utilizar a Plataforma iFood. “Conteúdo Técnico” são os arquivos, dados, informações, códigos e conteúdos de qualquer espécie, de propriedade e/ou utilizados pelo iFood, e que este último, de acordo com seu exclusivo critério e exclusivamente para fins de desenvolvimento do piloto do Programa, disponibiliza aos Desenvolvedores de Aplicativos por meio da API. “Desenvolvedores de Aplicativos” significa todas as pessoas jurídicas ou físicas que manifestaram interesse em participar do Programa e concordaram integralmente com as Condições Gerais. “Estabelecimento” são os estabelecimentos listados na Plataforma iFood e que venham optar por contratar os Aplicativos em função do presente Programa. “iFood” é o IFOOD.COM AGÊNCIA DE RESTAURANTES ONLINE S.A., inscrito no CNPJ/ME sob o nº 14.380.200/0001-21, com sede na Avenida dos Autonomistas, 1496, Osasco/SP, CEP: 06.020-902. “Loja Virtual” significa o perfil do Estabelecimento na Plataforma iFood, contendo, sem limitação, o nome, a marca, o endereço e Produtos atualizados do Estabelecimento. “Plataforma iFood” significa todos e quaisquer websites e aplicativos para celulares de titularidade do iFood, por meio dos quais, dentre outras funcionalidades, (a) estabelecimento, de um lado, pode ofertar os produtos aos Clientes Finais, e (b) os Clientes Finais, de outro lado, podem fazer pedidos de entrega de tais produtos aos estabelecimentos...')
    }

    async function cadastrarCliente(){

        const userUid = auth().currentUser.uid;

        const enviP ={
            Nome: nome,
            Cpf: cpf,
            Celular: phone,
            mei: mei,
            RazaoSocial: razaoSocial
        };

        const enviEn ={
            Estado: uf,
            Cidade: cidade,
            Cep: cep,
            Rua: rua,
            Numero: numero,
            Complemento: complemento
        };
  
    await firestore()
        .collection('Clientes')
        .doc('Empreendedor')
        .collection(userUid)
        .doc('Dados')
        .set(enviP)
        .then(() => {
            firestore()
            .collection('Clientes')
            .doc('Empreendedor')
            .collection(userUid)
            .doc('Endereço')
            .set(enviEn)
            .then(() => {
                    console.log('Empreendedor Cadastrado');
                });
            });
    }

    function logon(){
        if( email === '' || password === '' || nome === '' || razaoSocial === '' ||mei === '' || cpf === '' || phone === '' || uf === '' || cidade === '' || cep === '' || rua === '' || numero === '' || complemento === '' ){
            Alert.alert('Algo deu errado', 'Preencha todos os campos')
            return;
        };

        if(password != confpassword ){
            Alert.alert('confirme as senhas', 'As senhas não correspondem')
            return;
        }

        auth().createUserWithEmailAndPassword(email, password)
        .then(cadastrarCliente)
        .catch(error => (
            Alert.alert(error.code, error.message)
        ));
    }
    return(
        <ScrollView style={{flex:1, backgroundColor:'#F7FCFB'}}>
            <View style={{width:'100%', paddingLeft:30, marginTop:20, justifyContent:'center', paddingBottom:20}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>INFORMAÇÕES DE CADASTRO</Text>
            <Image 
            source={require('../../Assets/cad.png')}
            style={{marginTop:10, width:150, height:150}}
            />
            <Text style={{fontSize:16, marginTop:20}}>NOME COMPLETO*</Text>
                <TextInput 
                    value={nome}
                    onChangeText={value => setNome(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='Nome Completo'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>CPF*</Text>
                <TextInput 
                    value={cpf}
                    onChangeText={value => setCpf(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='000.000.000-00'
                    keyboardType="numeric"
                    placeholderTextColor={'grey'}
                />
                <Text style={{fontSize:16, marginTop:20}}>RAZÃO SOCIAL</Text>
                <TextInput 
                    value={razaoSocial}
                    onChangeText={value => setRazaoSocial(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='Razão Social'
                    placeholderTextColor={'grey'}
                />
                <View style={{ width:'100%'}}>
                        <Text style={{marginTop:15, fontSize:16}}>MEI</Text>
                        <TextInput 
                            value={mei}
                            onChangeText={value => setMei(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='00.000.000/000-00'
                            keyboardType="numeric"
                            placeholderTextColor={'grey'}
                        />
                    </View>
                <Text style={{marginTop:15, fontSize:16}}>CELULAR*</Text>
                <TextInput 
                    value={phone}
                    onChangeText={value => setPhone(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='(00) 00000-0000'
                    keyboardType="numeric"
                    placeholderTextColor={'grey'}
                />
                <Text style={{fontSize:20, fontWeight:'bold', marginTop:40}}>ENDEREÇO</Text>
                <Image 
                source={require('../../Assets/loc.png')}
                style={{marginTop:10, width:150, height:150}}
                />
                <Text style={{marginTop:15, fontSize:16}}>CEP*</Text>
                <TextInput 
                    value={cep}
                    onChangeText={value => setCep(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='00000-000'
                    keyboardType="numeric"
                    placeholderTextColor={'grey'}
                />
                <View style={{flexDirection:'row', width:'100%'}}>
                    <View style={{ width:'30%'}}>
                        <Text style={{marginTop:15, fontSize:16}}>ESTADO*</Text>
                        <TextInput 
                            value={uf}
                            onChangeText={value => setUf(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='UF'
                            placeholderTextColor={'grey'}
                        />
                    </View>
                    <View style={{ width:'70%'}}>
                        <Text style={{marginTop:15, fontSize:16}}>CIDADE*</Text>
                        <TextInput 
                            value={cidade}
                            onChangeText={value => setCidade(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='Nome da Cidade'
                            placeholderTextColor={'grey'}
                        />
                    </View>
                </View>
                <View style={{flexDirection:'row', width:'100%'}}>
                    <View style={{ width:'65%'}}>
                        <Text style={{marginTop:15, fontSize:16}}>RUA*</Text>
                        <TextInput 
                            value={rua}
                            onChangeText={value => setRua(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='Nome da Rua'
                            placeholderTextColor={'grey'}
                        />
                    </View>
                    <View style={{ width:'30%'}}>
                        <Text style={{marginTop:15, fontSize:16}}>NUMERO*</Text>
                        <TextInput 
                            value={numero}
                            onChangeText={value => setNumero(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='0000'
                            placeholderTextColor={'grey'}
                        />
                    </View>
                </View>
                <View style={{ width:'100%'}}>
                        <Text style={{marginTop:15, fontSize:16}}>COMPLEMENTO</Text>
                        <TextInput 
                            value={complemento}
                            onChangeText={value => setComplemento(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='(EX: CASA 05)'
                            placeholderTextColor={'grey'}
                        />
                </View>
                <Text style={{fontSize:20, marginTop:40, fontWeight:'bold'}}>CRIAR CONTA</Text>
                <Image 
                source={require('../../Assets/Conta.png')}
                style={{marginTop:10}}
                />
                <Text style={{fontSize:16}}>EMAIL*</Text>
                <TextInput 
                    value={email}
                    onChangeText={value => setEmail(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5, alignItems:'center'}}
                    placeholder='Exemplo@gmail.com'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>SENHA*</Text>
                <TextInput 
                    value={password}
                    onChangeText={value => setPassword(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='*******'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>CONFRIMAR SENHA*</Text>
                <TextInput 
                    value={confpassword}
                    onChangeText={value => setConfpassword(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='*******'
                    placeholderTextColor={'grey'}
                />

                <View style={{marginTop:20, marginBottom:-20}}>
                        {options.map(option => (
                            <View key={option} style={{flexDirection:'row'}}>
                                <TouchableOpacity style={{width:25, height:25, borderWidth:1, backgroundColor:'white', marginBottom:10, borderRadius:20}} onPress={() => pickCheck(option)}>
                                {check.includes(option) && (
                                <Text style={{alignSelf:'center', backgroundColor:'#2460DA', width:25, height:25, textAlign:'center', color:'white',borderRadius:20}}>✓</Text>
                                )} 
                                </TouchableOpacity>
                                <Text style={{marginLeft:5, paddingRight:0, fontSize:15}}>{option}</Text>
                            </View>
                            ))}
                    </View>

                <TouchableOpacity onPress={termos} style={{marginLeft:135, marginTop:-16, marginBottom:10}}><Text style={{color:'blue', fontWeight:'500',fontSize:15}}>termos de uso</Text></TouchableOpacity> 
                
                <TouchableOpacity style={{ height:50, width:'90%',backgroundColor:'#2460DA', marginTop:10, justifyContent:'center', alignItems:'center', borderRadius:5}} onPress={logon}>
                    <View style={{flexDirection:'row'}}>                                
                        <Text style={{ color:'white', marginRight:150, fontSize:16}}>CRIAR CONTA</Text>
                        <Text style={{ color:'white'}}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}