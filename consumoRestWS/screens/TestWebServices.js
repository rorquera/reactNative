import { View, StyleSheet } from 'react-native';
import { Button, Text } from '@rneui/base';
import {
  createPostService,
  updatePostService,
  getAllPostService,
  getByUserIdService,
  getRandomJokesService,
  updateProductServie,
  addCartsService,
  getDocumentTypesService,
} from '../services/TestServices';

const getAllPosts = () => {
  getAllPostService();
};

const createPost = () => {
  createPostService();
};

const updatePost = () => {
  updatePostService();
};

const getByUserId = () => {
  getByUserIdService(1);
};

const getRandomJokes = () => {
  getRandomJokesService();
};

const updateProduct = () => {
  updateProductServie();
};

const addCarts = () => {
  addCartsService();
};

const getDocumentTypes=() => { 
  getDocumentTypesService();
 }

export const TestWebServices = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>BIENVENIDO AL MODULO 3</Text>
      <View style={styles.buttonContainer}>
        <Button title="Recuperar Posts" onPress={getAllPosts} />
        <Button title="Crear Post" onPress={createPost} />
        <Button title="Actualizar Post" onPress={updatePost} />
        <Button title="Filtrar" onPress={getByUserId} />
        <Button title="XXX" onPress={getRandomJokes} />

        <Button title="YYY" onPress={updateProduct} />

        <Button title="ZZZ" onPress={addCarts} />
        <Button title="TIPOS DE DOCUMENTOS" onPress={getDocumentTypes} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
});
