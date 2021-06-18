import { useSelector } from 'react-redux'
import TodoList from '../../common/list'
import { selectTodos } from '../../app/store/reducers/todos'
import NoResults from '../../common/noResult'

const AllTodosList = ({ searchText }) => {
  const todos = useSelector(selectTodos(searchText))
  return todos.length !== 0 ? <TodoList {...{ todos }} /> : <NoResults />
}

export default AllTodosList