import { Fragment } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment'
import { makeStyles } from '@material-ui/core'
import useBooleanValue from '../../../useBooleanValue'
import EditTodo from './editTodo'
import DeleteTodo from './deleteTodo'
import { useDispatch } from 'react-redux'
import { changeTodoCurrentState } from '../../../../app/store/reducers/todos'

const TodoListRow = ({ todo }) => {
  const dispatch = useDispatch()
  const { title, createdOn, dueDate, priority, currentState, id } = todo
  const date = moment(createdOn).format('YYYY-MM-DD')
  const classes = useStyles({ currentState })
  const { value: isEditDialogOpen, setTrue: openEditDialog, setFalse: closeEditDialog } = useBooleanValue(false)
  const { value: isDeleteDialogOpen, setTrue: openDeleteDialog, setFalse: closeDeletetDialog } = useBooleanValue(false)

  const handleStateClick = () => {
    dispatch(changeTodoCurrentState(todo))
  }
  return (
    <Fragment>
      <TableRow className={classes.container}>
        <TableCell>{title}</TableCell>
        <TableCell>{priority}</TableCell>
        <TableCell>{date}</TableCell>
        <TableCell>{dueDate}</TableCell>
        <TableCell>
          <IconButton onClick={openEditDialog}>
            <EditIcon color={'primary'} />
          </IconButton>
          <Button
            onClick={handleStateClick}
            variant={'contained'}
            className={classes.stateColor}>{currentState === 'pending' ? 'Done' : 'Re-Open'}
          </Button>
          <IconButton onClick={openDeleteDialog}>
            <DeleteIcon className={classes.deleteIcon} />
          </IconButton>
        </TableCell>
      </TableRow>
      <EditTodo {...{ todo, isEditDialogOpen, closeEditDialog }} />
      <DeleteTodo {...{ id, isDeleteDialogOpen, closeDeletetDialog }} />
    </Fragment>
  )
}

const useStyles = makeStyles(() => ({
  deleteIcon: {
    color: 'red',
  },
  stateColor: {
    backgroundColor: ({ currentState }) => currentState === 'pending' ? 'green' : 'aqua',
  },
  container: {
    textDecoration: ({currentState}) => currentState === 'pending' ? 'none' : 'line-through'
  }
}))

export default TodoListRow