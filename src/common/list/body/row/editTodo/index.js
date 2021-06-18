import FormDialog from "../../../../../common/formDialog"
import { useDispatch } from 'react-redux'
import { editTodo} from '../../../../../app/store/reducers/todos'

const EditTodo = ({ todo, isEditDialogOpen, closeEditDialog }) => {
  const dispatch = useDispatch()
  const { title, dueDate, priority, currentState, description, id } = todo
  const initialValues = {
    currentState,
    title,
    description,
    dueDate,
    priority,
  }

  const onSubmit = (values) => {
    values.id = id
    dispatch(editTodo(values))
  }
  return (
    <FormDialog {...{ open: isEditDialogOpen, onClose: closeEditDialog, initialValues, onSubmit, title: 'Edit Todo' }} />
  )
}

export default EditTodo