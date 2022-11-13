import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/Cadastro';
import Acessos from '../Pages/Cadastro/Acessos';
import CadEmpresa from '../Pages/Cadastro/Empresa';
import Acordeao from '../Pages/Cadastro/Acordeo';
import CadMotoboy from '../Pages/Cadastro/Motoboy';

const Stack = createStackNavigator();

export function NavigStack() {
  return (
    
    <Stack.Navigator 
    screenOptions={{headerStyle:{backgroundColor:'#2460DA', borderBottomLeftRadius:15, borderBottomRightRadius:15, height:70}, headerTintColor:'white'}}
    >

      <Stack.Screen 
      name="Acessos" 
      component={Acessos} 
      options={{headerShown: false}}
      />
      <Stack.Screen 
      name="Acordeao" 
      component={Acordeao} 
      />
      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{title:'Tela de Login '}}
      />
      <Stack.Screen 
      name="Empresa" 
      component={CadEmpresa} 
      options={{title:'Cadastro de Empresa '}}
      />
      <Stack.Screen 
      name="Motoboy" 
      component={CadMotoboy} 
      options={{title:'Cadastro de Motoboy '}}
      />

    </Stack.Navigator>
  );
}