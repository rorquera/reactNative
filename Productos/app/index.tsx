import { FlatList, StyleSheet, Text, View } from 'react-native';
const productos = [
  {
    nombre: 'Doritos',
    categoria: 'Snacks',
    precioCompra: 0.4,
    precioVenta: 0.45,
    id: 100,
  },
  {
    nombre: 'Oreo',
    categoria: 'Galletas',
    precioCompra: 0.5,
    precioVenta: 0.55,
    id: 101,
  },
  {
    nombre: 'Ricas',
    categoria: 'Galletas',
    precioCompra: 0.7,
    precioVenta: 0.8,
    id: 102,
  },
  {
    nombre: 'Gelada',
    categoria: 'Gelatina',
    precioCompra: 0.7,
    precioVenta: 0.9,
    id: 103,
  },
  {
    nombre: 'Mentos',
    categoria: 'Dulces',
    precioCompra: 0.5,
    precioVenta: 0.6,
    id: 104,
  },
  {
    nombre: 'Ruffles',
    categoria: 'Snacks',
    precioCompra: 0.8,
    precioVenta: 0.85,
    id: 105,
  },
];

const recuperarClaveUnica = (item: any) => {
  return item.id;
};

const traerProducto = (objeto: any) => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.nombre}>
        {objeto.item.nombre} ({objeto.item.categoria})
      </Text>
      <Text style={estilos.costo}>{objeto.item.precioVenta}</Text>
    </View>
  );
};

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 10,
      }}
    >
      <Text style={estilos.titulo}>PRODUCTOS</Text>
      <FlatList
        data={productos}
        renderItem={traerProducto}
        keyExtractor={recuperarClaveUnica}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 7,
    backgroundColor: 'orange',
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 15,
    margin: 5,
  },
  titulo: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  costo: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  nombre: {
    fontSize: 15,
    color:'blue'
  },
});
