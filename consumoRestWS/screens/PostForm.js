import { View, StyleSheet, Alert } from 'react-native';
import { Button, Input, Text } from '@rneui/base';
import { useState } from 'react';
import {
  createPostService,
  createDocumentService,
} from '../services/TestServices';
export const PostForm = () => {
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const createPost = () => {
    console.log('creando post ' + subject + ' ' + message);
    post = {
      title: subject,
      body: message,
    };
    createPostService(post, fnExito);
  };

  const fnExito = () => {
    Alert.alert('CONFIRMACION', 'Se ha ingresado un nuevo POST');
  };

  const createDocument = () => {
    documento = {
      codigo: subject,
      descripcion: message,
    };
    createDocumentService(documento);
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text h4="true">NUEVO MENSAJE</Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          placeholder="TITULO"
          value={subject}
          onChangeText={(value) => {
            setSubject(value);
          }}
        />
        <Input
          placeholder="MENSAJE"
          value={message}
          onChangeText={(value) => {
            setMessage(value);
          }}
        />
        <View style={styles.buttonContainer}>
          <Button title="Guardar" onPress={createPost} />
          <Button
            title="Guardar Documento"
            onPress={createDocument}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  formContainer: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
});
