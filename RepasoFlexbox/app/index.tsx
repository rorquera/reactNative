import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default function Index() {
  return (
    <View style={estilos.principal}>
      <View style={estilos.contenedor1}>
        <TouchableOpacity style={estilos.boton}>
          <Text style={estilos.texto}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.boton}>
          <Text style={estilos.texto}>y</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.boton}>
          <Text style={estilos.texto}>z</Text>
        </TouchableOpacity>
      </View>
      <View style={estilos.contenedor2}>
        <View style={estilos.contenedor4}>
          <View style={estilos.contenedor6}>
            <Button title="BOTON 1" color='gray'></Button>
            <Button title="BOTON 2" color='gray'></Button>
          </View>
          <View style={estilos.contenedor7}>
            <Button title="OPERACION 1" color='gray'></Button>
            <Button title="OPERACION 2" color='gray'></Button>
            <Button title="OPERACION 3" color='gray'></Button>
          </View>
        </View>
        <View style={estilos.contenedor5}>
          <Button title="ACCION 1" color='gray'></Button>
          <Button title="ACCION 2" color='gray'></Button>
        </View>
      </View>
      <View style={estilos.contenedor3}>
        <Button title="BOTON FINAL" color='gray'></Button>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
  },
  contenedor1: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contenedor2: {
    flex: 6,
    backgroundColor: 'green',
  },
  contenedor3: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 1,
  },
  contenedor4: {
    flex: 4,
    backgroundColor: 'magenta',
    flexDirection: 'row',
  },
  contenedor5: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  contenedor6: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
  },
  contenedor7: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 10,
  },
  boton: {
    backgroundColor: 'gray',
    paddingVertical: 10, // Ajusta el tamaño vertical
    paddingHorizontal: 20, // Ajusta el tamaño horizontal
    borderRadius: 5,
    marginLeft: 1,
  },
  texto: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});
