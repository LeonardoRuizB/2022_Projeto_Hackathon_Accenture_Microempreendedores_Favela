import { createStackNavigator } from '@react-navigation/stack';
import { View,Text, TouchableOpacity, Image } from 'react-native';
import Home from '../Pages/Home'
import { Carrinho } from '../Pages/Home/Carrinho';
import { Pagamento } from '../Pages/Home/Pagamento';
import { Produtos } from '../Pages/Home/Produtos';
import { useNavigation } from "@react-navigation/native";
import Perfil from '../Pages/Home/perfil';

const Stacks = createStackNavigator();

export function NavigStacklog() {

  const navigation = useNavigation();

  function perfil(){
    navigation.navigate('Perfil')
  }

  return (
    <Stacks.Navigator 
    screenOptions={{headerStyle:{backgroundColor:'#2460DA', borderBottomLeftRadius:15, borderBottomRightRadius:15, height:70}, 
    headerTintColor:'white',
    headerRight: () => <View> 
     <TouchableOpacity style={{width:40, height:40, backgroundColor:'white', marginRight:20, borderRadius:10, justifyContent:'center', alignItems:'center'}} onPress={perfil}>
        <Image 
          source={require('../Assets/person.png')}
          style={{width:25, height:25}}
        />
     </TouchableOpacity>
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
    </Stacks.Navigator>
  );
}