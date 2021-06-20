import { useDispatch } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@material-ui/core/Button'
import { deleteTodo } from '../../../../../app/store/reducers/todos'

const DeleteTodo = ({ id, isDeleteDialogOpen: open, closeDeletetDialog: onClose }) => {
  const dispatch = useDispatch()
  const onDeleteClickHandler = () => {
    dispatch(deleteTodo(id))
    onClose()
  }
  return (
    <Dialog {...{ open, onClose, fullWidth: true }}>
      <DialogTitle>Delete todo item</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this todo item?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          NO
        </Button>
        <Button color='secondary' variant="contained" onClick={onDeleteClickHandler}>
          YES
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteTodo