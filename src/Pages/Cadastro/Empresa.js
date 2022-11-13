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

export default function CadEmpresa(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpassword, setConfpassword] = useState('');
    const [produto, setProduto] = useState('');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
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
        Alert.alert('Termos de uso', '1. DA FUNÇÃO DO SITE Este site foi criado e desenvolvido com a função de trazer conteúdo informativo de alta qualidade, a venda de produtos físicos, digitais e a divulgação de prestação de serviço. A EMPRESA busca através da criação de conteúdo de alta qualidade, desenvolvido por profissionais da área, trazer o conhecimento ao alcance de todos, assim como a divulgação dos próprios serviços. Nesta plataforma, poderá ser realizado tanto a divulgação de material original de alta qualidade, assim como a divulgação de produtos de e-commerce. Todo o conteúdo presente neste site foi desenvolvido buscando fontes e materiais de confiabilidade, assim como são baseados em estudos sérios e respeitados, através de pesquisa de alta nível. Todo o conteúdo é atualizado periodicamente, porém, pode conter em algum artigo, vídeo ou imagem, alguma informação que não reflita a verdade atual, não podendo a EMPRESA ser responsabilizada de nenhuma forma ou meio por qualquer conteúdo que não esteja devidamente atualizado. É de responsabilidade do usuário de usar todas as informações presentes no site com senso crítico, utilizando apenas como fonte de informação, e sempre buscando especialistas da área para a solução concreta do seu conflito.     2. DO ACEITE DOS TERMOS Este documento, chamado “Termos de Uso”, aplicáveis a todos os visitantes do site, foi desenvolvido por Diego Castro Advogado – OAB/PI 15.613, modificado com permissão para este site. Este termo especifica e exige que todo usuário ao acessar o site da EMPRESA, leia e compreenda todas as cláusulas do mesmo, visto que ele estabelece entre a EMPRESA e o VISITANTE direitos e obrigações entre ambas as partes, aceitos expressamente pelo VISITANTE a permanecer navegando no site da EMPRESA...')
    }

    async function cadastrarEmp(){

        const userUid = auth().currentUser.uid;

        const enviP ={
            Nome: nome,
            NomeEmpresa: nomeEmpresa,
            Cpf: cpf,
            Celular: phone,
            Produto: produto
        };

        const enviEn ={
            Estado: uf,
            Cidade: cidade,
            Cep: cep,
            Rua: rua,
            Complemento: complemento,
            Numero: numero
        };
  
    await firestore()
        .collection('Clientes')
        .doc('Empresa')
        .collection(userUid)
        .doc('Dados')
        .set(enviP)
        .then(() => {
            firestore()
            .collection('Clientes')
            .doc('Empresa')
            .collection(userUid)
            .doc('Endereço')
            .set(enviEn)
            .then(() => {
                firestore()
                .collection('Clientes')
                .doc('Verificação')
                .collection(userUid)
                .doc('Verificado')
                .set({Atual: null})
                .then(() => {
                    console.log('Empresa Cadastrado');
                });
            });
        });
    }

    function logon(){
        if( email === '' || password === '' || nomeEmpresa === '' || nome === '' || cpf === '' || phone === '' || complemento === '' || uf === '' || cidade === '' || cep === '' || rua === '' || numero === '' || produto === ''){
            Alert.alert('Algo deu errado', 'Preencha todos os campos')
            return;
        };

        if(password != confpassword ){
            Alert.alert('confirme as senhas', 'As senhas não correspondem')
            return;
        }

        auth().createUserWithEmailAndPassword(email, password)
        .then(cadastrarEmp)
        .catch(error => (
            Alert.alert(error.code, error.message)
        ));
    }
    return(
        <ScrollView style={{flex:1, backgroundColor:'#F7FCFB'}}>
            <View style={{width:'100%', paddingLeft:30, marginTop:20, justifyContent:'center', paddingBottom:20}}>
            <Text style={{fontSize:20, fontWeight:'bold'}}>INFORMAÇÕES DA EMPRESA</Text>
            <Text style={{fontSize:16, marginTop:20}}>NOME DA SUA EMPRESA</Text>
                <TextInput 
                    value={nomeEmpresa}
                    onChangeText={value => setNomeEmpresa(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='(EX: LU DOCES)'
                    placeholderTextColor={'grey'}
                />
                <Text style={{fontSize:16, marginTop:20}}>NOME COMPLETO</Text>
                <TextInput 
                    value={nome}
                    onChangeText={value => setNome(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='Nome Completo'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>CPF ou MEI</Text>
                <TextInput 
                    value={cpf}
                    onChangeText={value => setCpf(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='000.000.000-00'
                    keyboardType="numeric"
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>CELULAR</Text>
                <TextInput 
                    value={phone}
                    onChangeText={value => setPhone(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='(00) 00000-0000'
                    keyboardType="numeric"
                    placeholderTextColor={'grey'}
                />
                 <Text style={{marginTop:15, fontSize:16}}>PRODUTO OFERECIDO</Text>
                <TextInput 
                    value={produto}
                    onChangeText={value => setProduto(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='(EX: Salgados e doces)'
                    placeholderTextColor={'grey'}
                />
                <Text style={{fontSize:20, fontWeight:'bold', marginTop:40}}>ENDEREÇO</Text>
                <Text style={{marginTop:15, fontSize:16}}>CEP</Text>
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
                    <View style={{ width:'30%'}}>
                        <Text style={{marginTop:15, fontSize:16}}>COMPLEMENTO</Text>
                        <TextInput 
                            value={complemento}
                            onChangeText={value => setComplemento(value)}
                            style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                            placeholder='(EX: CASA 01)'
                            placeholderTextColor={'grey'}
                        />
                    </View>
                </View>
                <Text style={{fontSize:20, marginTop:40, fontWeight:'bold'}}>CRIAR CONTA</Text>
                {/* <Image 
                source={require('../../Assets/Conta.png')}
                style={{marginTop:10}}
                /> */}
                <Text style={{fontSize:16}}>EMAIL</Text>
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