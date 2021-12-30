import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const data = res.data as Todo;
  const id = data.id;
  const title = data.title;
  const completed = data.completed;
  display(id, title, completed);
});

function display(id: number, title: string, completed: boolean) {
  console.log(`
    the id is "${id}", it's title is "${title}" and its complete status is "${completed}"
  `);
}
