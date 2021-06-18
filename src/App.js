import { Fragment, useCallback, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import useBooleanValue from './common/useBooleanValue'
import TextField from '@material-ui/core/TextField'
import PageTabs from './components/tabs'
import AllTodosList from './components/allTodosList'
import PendingTodosList from './components/pendingTodosList'
import CompletedTodosList from './components/completedTodosList'
import AddTodo from './components/addTodo'

const App = () => {
  const classes = useStyles()
  const [searchText, setSearchText] = useState(null)
  const {value: isAddDialogOpen, setTrue: openAddDialog, setFalse: closeAddDialog} = useBooleanValue(false)
  const [currentTab, setCurrentTab] = useState('all')
  const handleTabChange = useCallback((event, value) => setCurrentTab(value), [setCurrentTab])

  const handleSearchChange = (event) => {
    setSearchText(event.target.value)
  }
  return (
    <Fragment>
      <div className={classes.container}>
        <Typography variant={'h2'}>
          ToDo App
        </Typography>
        <Fab color="primary" onClick={openAddDialog}>
          <AddIcon />
        </Fab>
      </div>
      <TextField
        fullWidth
        variant="outlined"
        placeholder='Search Tasks'
        onChange={handleSearchChange}
      />
      <AddTodo {...{isAddDialogOpen, closeAddDialog}}/>
      <PageTabs {...{currentTab, handleTabChange}}/>
      {currentTab === 'all' && <AllTodosList {...{searchText}}/>}
      {currentTab === 'pending' && <PendingTodosList {...{searchText}}/>}
      {currentTab === 'completed' && <CompletedTodosList {...{searchText}}/>}
    </Fragment>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}))

export default App;
