import React from 'react'

interface User {   //Defining the shape of our user objects, to be able to access user.name and so on
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name} {user.email}</li>)}
      </ul>
    </>
  )
}

export default UsersPage