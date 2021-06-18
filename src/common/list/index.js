import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import TableHeader from './header'
import TableBody from './body'

const TodoList = ({ todos }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHeader />
        <TableBody {...{ todos }} />
      </Table>
    </TableContainer>
  )
}

export default TodoList