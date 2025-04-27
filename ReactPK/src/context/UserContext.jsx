import React from 'react'

const UserContext = ({children}) => {

  const username = 'Sarthak'

  return (
    <div>
      {children}
    </div>
  )
}

export default UserContext