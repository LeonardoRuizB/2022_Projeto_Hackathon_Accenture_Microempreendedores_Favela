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
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [phone, setPhone] = useState('');
    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [funci, setFunci] = useState('');
    const [Fatu, setFatu] = useState('');
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
        Alert.alert('Termos de uso', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.')
    }

    async function cadastrarEmp(){

        const userUid = auth().currentUser.uid;

        const enviP ={
            Nome: nome,
            CPF: cnpj,
            Telefone: phone,
            Numero_de_funcionários: funci,
            Faturamento_médio: Fatu
        };

        const enviEn ={
            Estado: uf,
            Cidade: cidade,
            Cep: cep,
            Rua: rua,
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
        if( email === '' || password === '' || nome === '' || cnpj === '' || phone === '' || uf === '' || cidade === '' || cep === '' || rua === '' || numero === '' || funci === '' || Fatu === ''){
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
            <Text style={{fontSize:16, marginTop:20}}>NOME FANTASIA</Text>
                <TextInput 
                    value={nome}
                    onChangeText={value => setNome(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='Nome da Empresa'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>CNPJ23.345.766</Text>
                <TextInput 
                    value={cnpj}
                    onChangeText={value => setCnpj(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='00.000.000.0000-00'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>TELEFONE</Text>
                <TextInput 
                    value={phone}
                    onChangeText={value => setPhone(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='(00) 0 0000-0000'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>NÚMERO DE FUNCIONÁRIOS</Text>
                <TextInput 
                    value={funci}
                    onChangeText={value => setFunci(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='3 a 5 fucionários'
                    placeholderTextColor={'grey'}
                />
                <Text style={{marginTop:15, fontSize:16}}>FATURAMENTO MÉDIO</Text>
                <TextInput 
                    value={Fatu}
                    onChangeText={value => setFatu(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='2 a 5 mil'
                    placeholderTextColor={'grey'}
                />
                <Text style={{fontSize:20, fontWeight:'bold', marginTop:40}}>ENDEREÇO COMERCIAL</Text>
                <Text style={{marginTop:15, fontSize:16}}>CEP</Text>
                <TextInput 
                    value={cep}
                    onChangeText={value => setCep(value)}
                    style={{ borderBottomWidth:0.5, height:40, width:'90%', paddingLeft:10, borderRadius:5}}
                    placeholder='00000-000'
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
                <Text style={{fontSize:20, marginTop:40, fontWeight:'bold'}}>CRIAR CONTA</Text>
                <Image 
                source={require('../../Assets/Conta.png')}
                style={{marginTop:10}}
                />
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