import { Button, StyleSheet, View } from 'react-native';

export default function Index() {
  return <View style={estilos.contenedor}>
    <View style={estilos.contenedor1}></View>
    <View style={estilos.contenedor2}>
      <View style={estilos.contenedor3}/>
      <View style={estilos.contenedor4}>
        <View style={estilos.contenedor5}></View>
        <View style={estilos.contenedor6}>
          <Button title='boton 1'/>
          <Button title='boton 2'/>
          <Button title='boton 3'/>
        </View>
      </View>
    </View>
  </View>
}
const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor:'gray',
  },
  contenedor1: {
    flex: 1,
    backgroundColor:'green',
  },
  contenedor2: {
    flex: 3,
    backgroundColor:'yellow',
  },
  contenedor3: {
    flex: 1,
    backgroundColor:'cyan',
  },
  contenedor4: {
    flex: 1,
    backgroundColor:'red',
    flexDirection:'row',
  },
  contenedor5: {
    flex: 1,
    backgroundColor:'blue',
  },
  contenedor6: {
    flex: 2,
    backgroundColor:'orange',
    flexDirection:'column', //eje principal (vertical)
    justifyContent:'space-around',//centrado vertical espaciado (principal)
    alignItems:'stretch',//ocupa todo el espacio horizontal (secundario)
  },
});
