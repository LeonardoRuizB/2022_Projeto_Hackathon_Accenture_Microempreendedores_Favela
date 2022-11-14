import { createStackNavigator } from '@react-navigation/stack';
import { View,Text, TouchableOpacity, Image } from 'react-native';
import Home from '../Pages/Home' 
import { useNavigation } from "@react-navigation/native";
import Perfil from '../Pages/Home/perfil';
import Crescer from '../Pages/Home/Crescer';
import Curso from '../Pages/Home/Cursos';
import PagCurso from '../Pages/Home/PagCurso';
import Trilha from '../Pages/Home/trilha';
import auth from '@react-native-firebase/auth';  

const Stacks = createStackNavigator();

export function NavigStacklog() {

  const navigation = useNavigation();

  function perfil(){
    navigation.navigate('Perfil')
  }

  function Cursos(){
    navigation.navigate('Cursos')
  }

  function Sair(){
    auth().signOut()
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
     <View style={{alignItems:'center', marginRight:10}}>
      <TouchableOpacity style={{width:40, height:40, backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center', marginTop:5}} onPress={Cursos}>
          <Image 
            source={require('../Assets/lap.png')}
            style={{width:27, height:23, tintColor:'#2460DA', marginTop:3}}
          />
      </TouchableOpacity>
      <Text style={{color:'white', marginTop:5}}>Cursos</Text>
     </View>
     <View style={{alignItems:'center', marginRight:20}}>
      <TouchableOpacity style={{width:40, height:40, backgroundColor:'white', borderRadius:10, justifyContent:'center', alignItems:'center', marginTop:5}} onPress={Sair}>
          <Image 
            source={require('../Assets/sair.png')}
            style={{width:23, height:22, tintColor:'#2460DA', marginTop:3}}
          />
      </TouchableOpacity>
      <Text style={{color:'white', marginTop:5}}>Sair</Text>
     </View>
    </View>
  }}
    >
      <Stacks.Screen 
      name="Home" 
      component={Home} 
      />
      <Stacks.Screen 
      name="Perfil" 
      component={Perfil} 
      options={{title:'Perfil'}}
      />
      <Stacks.Screen 
      name="Cursos" 
      component={Curso} 
      />
      <Stacks.Screen 
      name="Crescer" 
      component={Crescer} 
      options={{title:'CRESCER'}}
      />
      <Stacks.Screen 
      name="PagCurso" 
      component={PagCurso} 
      options={{title:'Pagina do Curso'}}
      />
      <Stacks.Screen 
      name="Trilha" 
      component={Trilha} 
      options={{title:'Pagina da Trilha'}}
      />
    </Stacks.Navigator>
  );
}