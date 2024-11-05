import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const [visibleList, setVisibleList] = useState([]); 
  const [page, setPage] = useState(1); 
  const itemsPerPage = 10; 

  const handleInsert = () => {
    if (text !== '') {
      const date = new Date();
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      const newList = [...list, { key: Math.random().toString(), value: text, date: formattedDate }];
      setList(newList);
      setVisibleList(newList.slice(0, page * itemsPerPage)); 
      setText('');
    }
  };
  const handleClear = () => {
    setList([]);
    setVisibleList([]);
    setPage(1); 
  };
  const loadMoreItems = () => {
    const nextPage = page + 1;
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    if (startIndex < list.length) {
      setVisibleList((prevVisibleList) => [
        ...prevVisibleList,
        ...list.slice(startIndex, endIndex),
      ]);
      setPage(nextPage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daniel Rodrigues - RA: 2022101144</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um texto"
        placeholderTextColor="#999"
        value={text}
        onChangeText={(val) => setText(val)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleInsert}>
          <Text style={styles.buttonText}>Inserir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={visibleList}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.listItemContent}>
              <Text style={styles.listItemText}>{item.value}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.key}
        onEndReached={loadMoreItems} 
        onEndReachedThreshold={0.5} 
        ListFooterComponent={list.length > visibleList.length ? <Text style={styles.loadingText}>Carregando mais...</Text> : null} // Indica que há mais itens para carregar
      />
    </View>
  );
}

//ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f7fc',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3974f5',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3974f5',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#3974f5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
    elevation: 3,
  },
  clearButton: {
    backgroundColor: '#f47921',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    flexDirection: 'column',
  },
  listItemContent: {
    flexDirection: 'column',
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  dateText: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
    textAlign: 'right',
  },
  loadingText: {
    textAlign: 'center',
    padding: 15,
    fontSize: 16,
    color: '#999',
  },
});
