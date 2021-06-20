import { Typography } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

const ShowTodoDialog = ({ todo, iShowDialogOpen, closeShowDialog }) => {
  const { title, description, dueDate, priority } = todo
  
  return (
    <Dialog {...{ open: iShowDialogOpen, onClose: closeShowDialog, fullWidth: true }}>
      <DialogTitle>
        Todo Details
      </DialogTitle>
      <DialogContent>
        <Typography variant={'body1'}>Title</Typography>
        <Typography variant={'h5'} gutterBottom>{title}</Typography>
        <Typography variant={'body1'}>Description</Typography>
        <Typography variant={'h5'} gutterBottom>{description}</Typography>
        <Typography variant={'body1'}>Priority</Typography>
        <Typography variant={'h5'} gutterBottom>{priority}</Typography>
        <Typography variant={'body1'}>Due Date</Typography>
        <Typography variant={'h5'} gutterBottom>{dueDate}</Typography>
      </DialogContent>
    </Dialog>
  )
}

export default ShowTodoDialog