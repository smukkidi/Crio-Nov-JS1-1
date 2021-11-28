/*
Create a new empty array named todoDB and write below functions:

addTodo(item, priority) 
- Adds a new todo item to the end of the list depending on the priority. If the priority is 'high' then the item is added at the start of the todo array else at the last.

clearTodo(index) 
- Sets the item at the given index to null

updateTodo(index, newItem) 
- Updates the item at the given index with newItem passed to the function.

getTodo(index) 
- returns the todo item at given index else full list of todos if nothing is passed.

*/

let todoDB = [22];

// Below function will add the item to the array based on the priority
function addTodo(item, priority){
  if(priority === 'high'){
    todoDB.unshift(item);
  }
  else {
    todoDB.push(item);
  }
}

// Below the function set the value based on the index
function clearTodo(index){
  todoDB[index] = null
}

// Below the function add the new iteam in given index  
function updateTodo(index, newItem){
  todoDB[index] = newItem;
}

function getTodo(index){
  if(index === undefined){
    return todoDB;
  }
  else{
    return todoDB[index];
  }
}

addTodo(11, 'high');

//clearTodo(1);

//updateTodo(1, 55);

let getTheValue = getTodo();

console.log(getTheValue);

console.log(todoDB);