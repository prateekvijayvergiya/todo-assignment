import { useSelector } from 'react-redux'
import TodoList from '../../common/list'
import {selectPendingTodos} from '../../app/store/reducers/todos'
import NoResults from '../../common/noResult'

const PendingTodosList = ({searchText}) => {
  const todos = useSelector(selectPendingTodos(searchText))
  return todos.length !== 0 ? <TodoList {...{todos}}/> : <NoResults/>
}

export default PendingTodosList