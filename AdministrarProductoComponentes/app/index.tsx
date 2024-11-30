import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Alert,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

export default function Index() {
  const [codigo, setCodigo] = useState('');
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precioCompra, setPrecioCompra] = useState('');
  const [precioVenta, setPrecioVenta] = useState('');
  const [esNuevo, setEsNuevo] = useState(true);
  const [indice, setIndice] = useState(0);
  // Estado para el modal
  const [modalVisible, setModalVisible] = useState(false);
  // Estado para guardar el producto a eliminar
  const [productoAEliminar, setProductoAEliminar] = useState<string | null>(
    null
  );

  interface Producto {
    codigo: string;
    nombre: string;
    categoria: string;
    precioCompra: string;
    precioVenta: string;
  }

  interface ProductoProps {
    producto: Producto;
    indice: number;
  }

  const [productos, setProductos] = useState<Producto[]>([
    {
      codigo: '100',
      nombre: 'avena',
      categoria: 'bebidas',
      precioCompra: '45',
      precioVenta: '50',
    },
    {
      codigo: '101',
      nombre: 'manzana',
      categoria: 'frutas',
      precioCompra: '30',
      precioVenta: '35',
    },
  ]);

  const isProductoDuplicado = (nuevoCodigo: string) => {
    return productos.some((producto) => producto.codigo === nuevoCodigo);
  };

  const guardarProducto = () => {
    // Validación de campos obligatorios
    if (!codigo || !nombre || !categoria || !precioCompra || !precioVenta) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    if (esNuevo) {
      if (isProductoDuplicado(codigo)) {
        Alert.alert('Error', 'Ya existe un producto con ese código.');
        return;
      }

      const producto: Producto = {
        codigo,
        nombre,
        categoria,
        precioCompra,
        precioVenta,
      };
      setProductos([...productos, producto]);
    } else {
      const productosModificados = [...productos];
      const productoEditado = {
        codigo,
        nombre,
        categoria,
        precioCompra,
        precioVenta,
      };
      productosModificados[indice] = productoEditado;
      setProductos(productosModificados);
    }
    nuevoProducto();
  };

  const editarProducto = ({ producto, indice }: ProductoProps) => {
    setCodigo(producto.codigo);
    setNombre(producto.nombre);
    setCategoria(producto.categoria);
    setPrecioCompra(producto.precioCompra);
    setPrecioVenta(producto.precioVenta);
    setIndice(indice);
    setEsNuevo(false);
  };

  const eliminarProducto = () => {
    if (productoAEliminar) {
      const productosFiltrado = productos.filter(
        (producto) => producto.codigo !== productoAEliminar
      );
      setProductos([...productosFiltrado]);
      setProductoAEliminar(null);
      setModalVisible(false);
    }
  };

  const cancelarEliminacion = () => {
    setProductoAEliminar(null);
    setModalVisible(false);
  };

  const nuevoProducto = () => {
    setEsNuevo(true);
    setCodigo('');
    setNombre('');
    setCategoria('');
    setPrecioCompra('');
    setPrecioVenta('');
    setIndice(0);
  };

  const retornarClaveUnica = ({ codigo }: Producto) => codigo;

  const calcularPrecioVenta = (texto: string) => {
    if (texto.length > 0) {
      const precioCompra = parseFloat(texto);
      const precioVenta = (precioCompra * 1.2).toFixed(2).toString();
      setPrecioCompra(texto);
      setPrecioVenta(precioVenta);
    } else {
      setPrecioCompra('');
      setPrecioVenta('');
    }
  };

  const ListaProductos = ({ producto, indice }: ProductoProps) => {
    return (
      <TouchableOpacity onPress={() => editarProducto({ producto, indice })}>
        <View style={estilos.contenedorLista}>
          <View style={estilos.contenedorCodigo}>
            <Text>{producto.codigo}</Text>
          </View>
          <View style={estilos.contenedorDescripcion}>
            <Text style={estilos.textoProducto}>{producto.nombre}</Text>
            <Text style={estilos.textoCategoria}>{producto.categoria}</Text>
          </View>
          <View style={estilos.contenedorPrecio}>
            <Text>{producto.precioVenta}</Text>
          </View>
          <View style={estilos.contenedorAccion}>
            <Button
              title="X"
              onPress={() => {
                setProductoAEliminar(producto.codigo);
                setModalVisible(true);
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={estilos.contenedorPrincipal}>
      <Text style={estilos.titulo}>PRODUCTOS</Text>
      <ScrollView style={estilos.contenedorScroll}>
        <View style={estilos.contenedorCabecera}>
          <TextInput
            style={estilos.cajaTexto}
            placeholder="CODIGO"
            value={codigo}
            onChangeText={setCodigo}
            editable={esNuevo}
            keyboardType="numeric"
          />
          <TextInput
            style={estilos.cajaTexto}
            placeholder="NOMBRE"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={estilos.cajaTexto}
            placeholder="CATEGORIA"
            value={categoria}
            onChangeText={setCategoria}
          />
          <TextInput
            style={estilos.cajaTexto}
            placeholder="PRECIO DE COMPRA"
            value={precioCompra}
            keyboardType="numeric"
            onChangeText={calcularPrecioVenta}
          />
          <TextInput
            style={estilos.cajaTexto}
            placeholder="PRECIO DE VENTA"
            value={precioVenta}
            editable={false}
          />
          <View style={estilos.contenedorBotones}>
            <Button title="NUEVO" onPress={nuevoProducto} />
            <Button title="GUARDAR" onPress={guardarProducto} />
            <Text>productos: {productos.length}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={estilos.contenedorDetalle}>
        <FlatList
          data={productos}
          renderItem={({ item, index }) => {
            return <ListaProductos producto={item} indice={index} />;
          }}
          keyExtractor={retornarClaveUnica}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelarEliminacion}
      >
        <View style={estilos.modalVistaCentrada}>
          <View style={estilos.modalVista}>
            <Text style={estilos.modalTexto}>
              ¿Está seguro de que desea eliminar este producto?
            </Text>
            <View style={estilos.modalBotones}>
              <Button title="Eliminar" onPress={eliminarProducto} />
              <Button title="Cancelar" onPress={cancelarEliminacion} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
  },
  contenedorCabecera: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorDetalle: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorCodigo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorDescripcion: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textoProducto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoCategoria: {
    fontStyle: 'italic',
  },
  contenedorPrecio: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  contenedorAccion: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
  },
  contenedorLista: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
    backgroundColor: 'coral',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
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
  titulo: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  contenedorScroll: {
    height: 200,
  },
  modalVistaCentrada: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalVista: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTexto: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  modalBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});