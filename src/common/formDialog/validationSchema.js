import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  title: Yup.string().min(10).max(140).required("Required"),
  description: Yup.string().min(10).max(500).required('Required'),
  priority: Yup.mixed().oneOf(['none', 'low', 'medium', 'high']).required('Required'),
})

export default validationSchema