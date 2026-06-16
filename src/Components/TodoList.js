
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          task={todo}
          onDelete={() => deleteTodo(index)}
          
        />
      ))}
    </div>
    
  );
}
export default TodoList;