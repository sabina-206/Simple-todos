const TodoItem = props => {
  const {eachTodo, deleteTodo} = props
  const {title, id} = eachTodo
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <div>
        <p className="title">{title}</p>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
