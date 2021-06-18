import { useFormik } from "formik"
import { Grid, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import validationSchema from "./validationSchema"

const FormDialog = ({ open, onClose, title: dialogTitle, initialValues, onSubmit: onFormSubmit }) => {
  const { handleSubmit, handleChange, values, errors, touched, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onFormSubmit(values)
      onClose()
      resetForm()
    }
  })
  return (
    <Dialog {...{ open, onClose, fullWidth: true }}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent dividers>
          <Typography>Summary</Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="title"
            onChange={handleChange}
            value={values.title}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />
          <Typography>Description</Typography>
          <TextField
            fullWidth
            variant="outlined"
            name="description"
            multiline={true}
            rows={3}
            onChange={handleChange}
            value={values.description}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
          />
          <Grid container justify={'space-between'}>
            <Grid item>
              <Typography>Due Date</Typography>
              <TextField
                name="dueDate"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChange}
                value={values.dueDate}
                error={touched.dueDate && Boolean(errors.dueDate)}
                helperText={touched.dueDate && errors.dueDate}
              />
            </Grid>
            <Grid item>
              <Typography>Priority</Typography>
              <Select
                autoWidth
                name='priority'
                onChange={handleChange}
                value={values.priority}
              >
                <MenuItem value={'none'}>none</MenuItem>
                <MenuItem value={'low'}>low</MenuItem>
                <MenuItem value={'high'}>high</MenuItem>
              </Select>

            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
          <Button color='secondary' variant="contained" type='submit'>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default FormDialog