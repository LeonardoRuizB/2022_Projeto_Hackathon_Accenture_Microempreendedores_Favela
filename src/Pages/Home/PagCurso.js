import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';


export default function PagCurso() {
 return (
   <ScrollView style={{paddingHorizontal:30, backgroundColor:'white'}}>
    <Text style={{fontSize:19, marginTop:20, fontWeight:'600'}}>Como Abrir um MEI:</Text>
        <View style={{backgroundColor:'#D9D9D9', height:230, borderRadius:10, marginTop:10}}>
            <Image 
            source={require('../../Assets/meii.png')}
            />
            <TouchableOpacity>
            <Image 
            source={require('../../Assets/play.png')}
            style={{width:130, height:132, marginTop:-170, marginLeft:105}}
            />
            </TouchableOpacity>
        </View>
        <Text style={{fontSize:25, fontWeight:'700', marginTop:30}}>Conteudo:</Text>
        <Text style={{fontSize:17, textAlign:'justify', marginTop:10, lineHeight:28}}>O passo a passo de como abrir um MEI e obter um CNPJ é fácil, mas exige responsabilidades como pagar guia DAS MEI, declarações anuais e emitir notas fiscais para outro CNPJ. Descubra nessa página benefícios e obrigaçãoes em se tornar um MEI.</Text> 
        <Text style={{fontSize:17, textAlign:'justify', marginTop:20, lineHeight:28}}>MEI significa Microeemprendedor Individual, ou seja, um profissional autônomo. Quando você se cadastra como um, você passa a ter CNPJ, ou seja, tem facilidades com a abertura de conta bancária, no pedido de empréstimos e na emissão de notas fiscais, além de ter obrigações e direitos de uma pessoa jurídica. Confira abaixo tudo o que você precisa saber para se tornar um MEI. </Text>
        <Text style={{fontSize:20, fontWeight:'bold',textAlign:'justify', marginTop:20, lineHeight:28}}>Como ser MEI ?</Text>
        <Text style={{fontSize:17, textAlign:'justify', marginTop:20, lineHeight:28}}>Para ser registrado como Microempreendedor Individual, a área de atuação do profissional precisa estar na lista oficial da categoria, já que o MEI foi criado com o objetivo de regularizar a situação de profissionais informais. Para ser MEI, é necessário:</Text>
        <Image 
        source={require('../../Assets/imagMei.png')}
        style={{width:300, height:300, marginLeft:30}}
        />
   </ScrollView>
  );
}