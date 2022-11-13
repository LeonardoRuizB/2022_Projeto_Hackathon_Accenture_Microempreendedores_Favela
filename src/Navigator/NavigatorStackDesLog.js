import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/Cadastro';
import Acessos from '../Pages/Cadastro/Acessos';
import CadEmpresa from '../Pages/Cadastro/Empresa';
import CadMotoboy from '../Pages/Cadastro/Motoboy';
import CriarConta from '../Pages/Cadastro/CriarConta';
import CadastroCliente from '../Pages/Cadastro/clietes';

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
      name="CriarConta" 
      component={CriarConta} 
      />
      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{title:'Tela de Login '}}
      />
      <Stack.Screen 
      name="Empresa" 
      component={CadEmpresa} 
      options={{title:'Cadastro da Empresa '}}
      />
      <Stack.Screen 
      name="Motoboy" 
      component={CadMotoboy} 
      options={{title:'Cadastro do Motoboy '}}
      />
        <Stack.Screen 
      name="Cliente" 
      component={CadastroCliente} 
      options={{title:'Cadastro do Cliente '}}
      />

    </Stack.Navigator>
  );
}