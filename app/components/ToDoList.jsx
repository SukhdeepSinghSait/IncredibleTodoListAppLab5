import { View, StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import React from 'react';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView style={styles.list}>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 20,
  },
  task: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ToDoList;