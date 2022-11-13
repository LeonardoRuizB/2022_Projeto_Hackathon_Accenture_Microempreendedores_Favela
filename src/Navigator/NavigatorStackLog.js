import { createStackNavigator } from '@react-navigation/stack';
import { View,Text, TouchableOpacity, Image } from 'react-native';
import Home from '../Pages/Home'
import { Carrinho } from '../Pages/Home/Carrinho';
import { Pagamento } from '../Pages/Home/Pagamento';
import { Produtos } from '../Pages/Home/Produtos';
import { useNavigation } from "@react-navigation/native";
import Perfil from '../Pages/Home/perfil';
import Cursos from '../Pages/Home/Cursos';
import Crescer from '../Pages/Home/Crescer';

const Stacks = createStackNavigator();

export function NavigStacklog() {

  const navigation = useNavigation();

  function perfil(){
    navigation.navigate('Perfil')
  }

  function Cursos(){
    navigation.navigate('Cursos')
  }

  return (
    <Stacks.Navigator 
    screenOptions={{headerStyle:{backgroundColor:'#2460DA', borderBottomLeftRadius:15, borderBottomRightRadius:15, height:90}, 
    headerTintColor:'white',
    headerRight: () => <View style={{flexDirection:'row'}}> 
    <View style={{alignItems:'center', marginRight:10}}>
      <TouchableOpacity style={{width:40, height:40, backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center', marginTop:5}} onPress={perfil}>
          <Image 
            source={require('../Assets/person.png')}
            style={{width:25, height:25}}
          />
      </TouchableOpacity>
      <Text style={{color:'white', marginTop:5}}>Perfil</Text>
     </View>
     <View style={{alignItems:'center', marginRight:20}}>
      <TouchableOpacity style={{width:40, height:40, backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center', marginTop:5}} onPress={Cursos}>
          <Image 
            source={require('../Assets/lap.png')}
            style={{width:27, height:23, tintColor:'#2460DA', marginTop:3}}
          />
      </TouchableOpacity>
      <Text style={{color:'white', marginTop:5}}>Cursos</Text>
     </View>
    </View>
  }}
    >
      <Stacks.Screen 
      name="Home" 
      component={Home} 
      />
      <Stacks.Screen 
      name="Produtos" 
      component={Produtos} 
      />
      <Stacks.Screen 
      name="Carrinho" 
      component={Carrinho} 
      />
      <Stacks.Screen 
      name="Pagamento" 
      component={Pagamento} 
      />
      <Stacks.Screen 
      name="Perfil" 
      component={Perfil} 
      />
      <Stacks.Screen 
      name="Cursos" 
      component={Cursos} 
      />
      <Stacks.Screen 
      name="Crescer" 
      component={Crescer} 
      />
    </Stacks.Navigator>
  );
}