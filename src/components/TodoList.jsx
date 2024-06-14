import ToDoCard from "./TodoCard";

function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <ToDoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </ToDoCard>
        );
      })}
    </ul>
  );
}

export default TodoList;
