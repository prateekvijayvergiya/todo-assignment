import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Summary</TableCell>
        <TableCell>Priority</TableCell>
        <TableCell>Created On</TableCell>
        <TableCell>Due By</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default TableHeader