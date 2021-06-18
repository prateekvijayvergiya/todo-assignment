import { Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core'
import noTodoLogo from '../../assets/todo.png'

const NoResults = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <img alt='no todo' src={noTodoLogo} />
      <Typography variant={'h3'}>
        No Todos Found
      </Typography>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}))

export default NoResults