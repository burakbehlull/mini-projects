<script setup>
import {ref} from 'vue'

let todoName = ref('')
let todoList = ref([])

//Add Todo
const addTodo = () =>{
    todoList.value.push({
        id: todoList.value.length + 1,
        text: todoName.value
    })
}

//Delete Todo

const deleteTodo = (todoItem) => {
  const index = todoList.value.findIndex((todo) => todo.id === todoItem.id);
  if (index !== -1) {
    todoList.value.splice(index, 1);
  }
};
</script>

<template>
<h1>Todo List</h1>

<input type="text" v-model="todoName">
<button type="submit" @click="addTodo">Ekle</button>

<ul>
    <li v-for="todo in todoList" :key="todo.id">{{ todo.text }} <button type="submit" @click="deleteTodo(todo)">x</button></li>
</ul>

</template>

<style scoped>
</style>