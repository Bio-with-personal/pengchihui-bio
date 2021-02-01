import React, { useState } from 'react'

export const RefetchContext = React.createContext([{}, () => {}])

export const RefetchProvider = (props) => {
  const [state, setState] = useState({})

  const setLazyState = (newState) => {
    setState({
      ...state,
      ...newState
    })
  }

  return (
    <RefetchContext.Provider value={[state, setLazyState]}>
      {props.children}
    </RefetchContext.Provider>
  )
}
