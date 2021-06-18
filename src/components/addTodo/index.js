import FormDialog from "../../common/formDialog"
import { useDispatch } from 'react-redux'
import { addTodo } from '../../app/store/reducers/todos'
import moment from "moment"

const AddTodo = ({ isAddDialogOpen, closeAddDialog }) => {
  const dispatch = useDispatch()

  const initialValues = {
    currentState: 'pending',
    title: '',
    description: '',
    dueDate: moment().format('YYYY-MM-DD'),
    priority: 'none',
  }

  const onSubmit = (values) => {
    dispatch(addTodo(values))
  }
  return (
    <FormDialog {...{ open: isAddDialogOpen, onClose: closeAddDialog, initialValues, onSubmit, title: 'Add Todo' }} />
  )
}

export default AddTodo