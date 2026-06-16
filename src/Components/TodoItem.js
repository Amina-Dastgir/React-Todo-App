function TodoItem({ task, onDelete }) {
  return (
    <div className="todo-item">
      <span>{task}</span>
      <button onClick={onDelete}>❌</button>
    </div>
  );
}

export default TodoItem;