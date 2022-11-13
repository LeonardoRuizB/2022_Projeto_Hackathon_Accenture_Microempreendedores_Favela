import React, { useState } from "react";

import {
        View,
        Text,
        TouchableOpacity, 
        TextInput, 
        ScrollView, 
        Alert, 
        Image
    } from "react-native"
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

export default function CadMotoboy(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setConfpassword] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [placa, setPlaca] = useState('');
    const [renavam, setRenavam] = useState('');
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
        Alert.alert('Termos de uso', '– OBJETO – O presente instrumento particular de contrato, senão um termo de parceria comercial, para fins de regulamentar as condições de uso, cadastro e validação do COLABORADOR – MOTOBOY na PLATAFORMA ONLINE mantida pelo PAPALEGUA, para que esse possam oferecer os seus serviços de MOTOENTREGA aos Usuários consumidores vinculados ao aplicativo. - PRÉ-REQUISITOS / DOCUMENTOS - O COLABORADOR MOTOBOY deverá realizar o download, sem quaisquer ônus, do aplicativo PAPALEGUA fornecido em plataformas IOS e ANDROID, junto a GOOGLE PLAY e APPLE STORE, respectivamente, vinculada ao COLABORADOR MOTOBOY, realizar o pré-cadastro, informando todos os dados necessários e requeridos, para a perfeita conclusão do cadastro e posterior validação. No ato do pré-cadastro, será necessária a apresentação dos seguintes...')
    }

    async function cadastrarMotoboy(){

        const userUid = auth().currentUser.uid;

        const enviP ={
            Nome: nome,
            CPF: cpf,
            Telefone: phone
        };

        const enviEn ={
            Estado: uf,
            Cidade: cidade,
            Cep: cep,
            Rua: rua,
            Numero: numero
        };

        const enviVe ={
            Veiculo: veiculo,
            Placa: placa,
            Renavam: renavam
        };

  
    await firestore()
        .collection('Clientes')
        .doc('Motoboy')
        .collection(userUid)
        .doc('Dados')
        .set(enviP)
        .then(() => {
            firestore()
            .collection('Clientes')
            .doc('Motoboy')
            .collection(userUid)
            .doc('Endereço')
            .set(enviEn)
            .then(() => {
                firestore()
                .collection('Clientes')
                .doc('Motoboy')
                .collection(userUid)
                .doc('Veículo')
                .set(enviVe)
                .then(() => {
                    firestore()
                    .collection('Clientes')
                    .doc('Verificação')
                    .collection(userUid)
                    .doc('Verificado')
                    .set({Atual: 1})
                    .then(() => {
                        console.log('Motoboy Cadastrado');
                });
            })});
        });
    } 

    async function logon(){
        if( email === '' || password === '' || nome === '' || cpf === '' || phone === '' || uf === '' || cidade === '' || cep === '' || rua === '' || numero === ''|| veiculo === '' || placa === '' || renav === ''){
            Alert.alert('Algo deu errado', 'Preencha todos os campos')
            return;
        };

        if(password != confpassword ){
            Alert.alert('confirme as senhas', 'As senhas não correspondem')
            return;
        }

        await auth().createUserWithEmailAndPassword(email, password)
        .then(cadastrarRev)
        .catch(error => (
            Alert.alert(error.code, error.message)
        ));
    }
    return(
        <ScrollView style={{flex:1, backgroundColor:'#F7FCFB'}}>
            <View style={{width:'100%', paddingLeft:30, marginTop:20, justifyContent:'center', paddingBottom:20}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>INFORMAÇÕES PESSOAIS</Text>
            <Text style={{fontSize:16, marginTop:20}}>NOME COMPLETO</Text>
                <TextInput 
                    value={nome}
                    onChangeText={value => setNome(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='Nome e Sobrenome'
                    placeholderTextColor={'grey'}
                />
                 <Text style={{marginTop:15, fontSize:16}}>CPF</Text>
                <TextInput 
                    value={cpf}
                    onChangeText={value => setCpf(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='000.000.000-00'
                    placeholderTextColor={'grey'}
                />
                 <Text style={{marginTop:15, fontSize:16}}>CELULAR</Text>
                <TextInput 
                    value={phone}
                    onChangeText={value => setPhone(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='(00) 0 0000-0000'
                    placeholderTextColor={'grey'}
                />
              

                <Text style={{fontSize:20, fontWeight:'bold', marginTop:40}}>ENDEREÇO</Text>
                <Text style={{marginTop:15, fontSize:16}}>CEP</Text>
                <TextInput 
                    value={cep}
                    onChangeText={value => setCep(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='00000-00'
                    placeholderTextColor={'grey'}
                />
                <View style={{flexDirection:'row', width:'100%'}}>
                    <View style={{ width:'30%'}}>
                        <Text style={{marginTop:15, fontSize:16}}>ESTADO</Text>
                        <TextInput 
                            value={uf}
                            onChangeText={value => setUf(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='UF'
                            placeholderTextColor={'grey'}
                        />
                    </View>
                    <View style={{ width:'70%'}}>
                        <Text style={{marginTop:15, fontSize:16}}>CIDADE</Text>
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
                        <Text style={{marginTop:15, fontSize:16}}>RUA</Text>
                        <TextInput 
                            value={rua}
                            onChangeText={value => setRua(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='Nome da Rua'
                            placeholderTextColor={'grey'}
                        />
                    </View>
                    <View style={{ width:'30%'}}>
                        <Text style={{marginTop:15, fontSize:16}}>NUMERO</Text>
                        <TextInput 
                            value={numero}
                            onChangeText={value => setNumero(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='0000'
                            placeholderTextColor={'grey'}
                        />
                    </View>
                </View>

                <View>
                    <Text style={{fontSize:20, fontWeight:'bold', marginTop:40}}>VEÍCULO</Text>
                        <Text style={{marginTop:15, fontSize:16}}>VEÍCULO</Text>
                            <TextInput 
                            value={veiculo}
                            onChangeText={value => setVeiculo(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='Moto honda CG 160 Fan'
                            placeholderTextColor={'grey'}/>                    
                </View>
                <View>
                        <Text style={{marginTop:15, fontSize:16}}>PLACA</Text>
                            <TextInput 
                            value={placa}
                            onChangeText={value => setPlaca(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='ABC-0000'
                            placeholderTextColor={'grey'}/>                    
                </View>
                <View>
                        <Text style={{marginTop:15, fontSize:16}}>RENAVAM</Text>
                            <TextInput 
                            value={renavam}
                            onChangeText={value => setRenavam(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='00000000000'
                            placeholderTextColor={'grey'}/>                    
                </View>

                <Text style={{fontSize:20, marginTop:40, fontWeight:'bold'}}>CRIAR CONTA</Text>
                {/* <Image 
                source={require('../../Assets/Conta.png')}
                style={{marginTop:10}}
                /> */}
                <Text style={{fontSize:16, marginTop:10}}>EMAIL</Text>
                <TextInput 
                    value={email}
                    onChangeText={value => setEmail(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5, alignItems:'center'}}
                    placeholder='Exemplo@gmail.com'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>SENHA</Text>
                <TextInput 
                    value={password}
                    onChangeText={value => setPassword(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='*******'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>CONFRIMAR SENHA</Text>
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