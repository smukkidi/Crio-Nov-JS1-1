let todoDB = [1,2, 3,4, 5];

function insertTodo(item, index){
  todoDB.splice(index, 0, item)
}

function removeTodo(index){
  todoDB.splice(index, 1);
}

insertTodo(2, 2);
console.log(todoDB)
removeTodo(5);
console.log(todoDB);

console.log(Array.isArray(todoDB))