import { useSelector } from 'react-redux'
import TodoList from '../../common/list'
import { selectCompletedTodos} from '../../app/store/reducers/todos'
import NoResults from '../../common/noResult'

const CompletedTodosList = ({searchText}) => {
  const todos = useSelector(selectCompletedTodos(searchText))
  return todos.length !== 0 ? <TodoList {...{todos}}/> : <NoResults/>
}

export default CompletedTodosList