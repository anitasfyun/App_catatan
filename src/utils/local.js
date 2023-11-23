let array_todos = [
  {
    id: 1,
    title: "Tugas Web Programming",
    description: "Membuat Pemrograman web sederhana dengan menggunakan html",
    createdAt: "05/11/2023",
  },
  {
    id: 2,
    title: "Tugas MSIB",
    description: "Membuat Aplikai Catatan dengan menggunakan framework css",
    createdAt: "05/11/2023",
  },
  {
    id: 3,
    title: "Tugas MSIB",
    description: "Mengerjakan logbook harian dan mingguan",
    createdAt: "05/11/2023",
  },
];

function getTodos() {
  return array_todos;
}

function deleteTodos(deleted_index) {
  array_todos = array_todos.filter((todo, index) => index !== deleted_index);
}

function addTodo(todo) {
  array_todos = [...array_todos, todo];
}

export { getTodos, deleteTodos, addTodo };
