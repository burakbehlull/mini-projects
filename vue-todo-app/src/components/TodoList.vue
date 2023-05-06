<script setup>
import {ref} from 'vue'

let todoName = ref('')
let todoList = ref([])

const addTodo = () =>{
    todoList.value.push({
        id: todoList.value.length + 1,
        text: todoName.value
    })
}
</script>

<template>
<h1>Todo List</h1>

<input type="text" v-model="todoName">
<button type="submit" @click="addTodo">Ekle</button>

<ul>
    <li v-for="todo in todoList" :key="todo.id">{{ todo.text }}</li>
</ul>

</template>

<style scoped>
</style>