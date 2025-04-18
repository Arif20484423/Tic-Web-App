import React from 'react'
import AllTodo from './AllTodo'
import Completed from './Completed'
import Today from './Today'
import Create from './create'
const Tabhandler = ({tab}) => {
  switch(tab){
    case 'today':
      return <Today/>
    case 'all':
      return <AllTodo/>
    case 'completed':
      return <Completed/>
    case 'create':
      return <Create/>
    default:
      return <Today/>
  }
}

export default Tabhandler