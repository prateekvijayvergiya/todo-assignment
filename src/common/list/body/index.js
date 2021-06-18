import TableBody from '@material-ui/core/TableBody'
import TodoListRow from './row'

const TodoListBody = ({todos}) => {
  return (
    <TableBody>
      {todos.map((todo, index) => <TodoListRow key={index} {...{todo}}/>)}
    </TableBody>
  )
}

export default TodoListBody