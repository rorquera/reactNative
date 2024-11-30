import { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

const retornarClaveUnica = (item: any) => {
  return item.cedula;
};

export default function Index() {
  const [personas, setPersonas] = useState([
    { nombre: 'Thor', apellido: 'Thillas', cedula: '0213254685' },
    { nombre: 'Amber', apellido: 'Flores', cedula: '0213254123' },
    { nombre: 'Peter', apellido: 'Parker', cedula: '1233254685' },
  ]);
  // estado que permite validar si se desea agregar una persona (true) o modificarla (false)
  const [esNuevo, setEsNuevo] = useState(true);
  // estado para guardar el indice al dar clic en el boton para editar
  const [indice, setIndice] = useState(0);

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');

  const guardarPersona = () => {
    if (esNuevo) {
      const nuevaPersona = {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
      };
      setPersonas([...personas, nuevaPersona]);
    } else {
      const personasModificadas = personas;
      personasModificadas[indice].nombre = nombre;
      personasModificadas[indice].apellido = apellido;
      setPersonas(personasModificadas);
    }
    limpiarPersona();
  };

  const limpiarPersona = () => {
    setApellido('');
    setNombre('');
    setCedula('');
    setEsNuevo(true);
  };

  const generarLista = (objeto: any) => {
    return (
      <ItemPersona indice={objeto.index} persona={objeto.item}></ItemPersona>
    );
  };

  const ItemPersona = (props: any) => {
    return (
      <View style={estilos.itemPersona}>
        <View style={estilos.itemIndice}>
          <Text style={estilos.indice}>{props.indice}</Text>
        </View>

        <View style={estilos.itemContenido}>
          <Text style={estilos.textoPrincipal}>
            {props.persona.nombre} {props.persona.apellido}
          </Text>
          <Text style={estilos.textoSecundario}>{props.persona.cedula}</Text>
        </View>

        <View style={estilos.itemBotones}>
          <Button
            title="E"
            color="green"
            onPress={() => {
              console.log(JSON.stringify(props.persona, null, 2));
              setNombre(props.persona.nombre);
              setApellido(props.persona.apellido);
              setCedula(props.persona.cedula);
              setEsNuevo(false);
              setIndice(props.indice);
            }}
          />
          <Button
            title="X"
            color="red"
            onPress={() => {
              const nuevasPersonas = personas.filter(
                (_, index) => index !== props.indice
              );
              setPersonas(nuevasPersonas);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'lightblue',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingTop: 50,
        paddingHorizontal: 10,
      }}
    >
      <View style={estilos.areaCabecera}>
        <Text style={{ textAlign: 'center', margin: 10 }}>PERSONAS</Text>
        <TextInput
          style={estilos.cajaTexto}
          placeholder="Ingrese su nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={estilos.cajaTexto}
          placeholder="Ingrese su apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={estilos.cajaTexto}
          placeholder="Ingrese su cédula"
          value={cedula}
          onChangeText={setCedula}
          keyboardType="numeric"
          editable={esNuevo}
        />
        <View style={estilos.contenedorBotones}>
          <Button title="GUARDAR" onPress={guardarPersona} />
          <Button title="LIMPIAR" onPress={limpiarPersona} />
        </View>
      </View>
      <View style={estilos.areaContenido}>
        <FlatList
          style={estilos.lista}
          data={personas}
          renderItem={generarLista}
          // keyExtractor={retornarClaveUnica}
        />
      </View>
      <View style={estilos.areaPie}>
        <Text>Autor: Rolando Orquera</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  lista: {
    // backgroundColor: 'lightpink',
  },
  itemPersona: {
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
  },
  textoPrincipal: {
    fontSize: 15,
  },
  textoSecundario: {
    fontStyle: 'italic',
    fontSize: 16,
  },
  areaCabecera: {
    flex: 6,
    // backgroundColor: 'chartreuse',
    alignItems: 'center',
  },
  areaContenido: {
    flex: 4,
    // backgroundColor: 'coral',
  },
  areaPie: {
    flex: 1,
    // backgroundColor: 'deepskyblue',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  itemIndice: {
    // backgroundColor: 'darkgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContenido: {
    // backgroundColor: 'darkorange',
    flex: 6,
    paddingLeft: 5,
  },
  itemBotones: {
    flex: 2,
    flexDirection: 'row',
    paddingHorizontal: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  indice: {
    textAlign: 'center',
  },
  cajaTexto: {
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingTop: 3,
    paddingHorizontal: 5,
    marginBottom: 5,
    width: 300,
    backgroundColor: 'white',
  },
  contenedorBotones: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: '75%',
    padding: 5,
  },
});
