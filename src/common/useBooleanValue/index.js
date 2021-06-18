import { useState } from 'react'

function useBooleanValue(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const setFalse = () => setValue(false)
  const setTrue = () => setValue(true)
  return {
    value,
    setFalse,
    setTrue,
  }
}

export default useBooleanValue
