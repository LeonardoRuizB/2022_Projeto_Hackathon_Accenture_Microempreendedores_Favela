import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/Cadastro';
import Acessos from '../Pages/Cadastro/Acessos';
import CadastroEmpreendedor from '../Pages/Cadastro/Empreendedor';
import CadastroPadrinho from '../Pages/Cadastro/Padrinho';
import CriarConta from '../Pages/Cadastro/Acordeo';

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
      options={{title:'CRIAR CONTA'}}
      />
      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{title:'TELA DE LOGIN'}}
      />
      <Stack.Screen 
      name="Padrinho" 
      component={CadastroPadrinho} 
      options={{title:'CADASTRO DO PADRINHO'}}
      />
      <Stack.Screen 
      name="Empreendedor" 
      component={CadastroEmpreendedor} 
      options={{title:'CADASTRO DO EMPREENDEDOR'}}
      />

    </Stack.Navigator>
  );
}