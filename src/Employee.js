import React from 'react'
import { AddForm } from './AddForm'
import { UserList } from './UserList'

export function Employee() {
  return (
    <div className="container">
        <AddForm />
        <UserList />
    </div>
  )
}
