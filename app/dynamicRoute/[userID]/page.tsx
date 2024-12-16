
import React from 'react'

interface User { // Defining the shape of user objects
  id: number;
  name: string;
  email: string;
}

const UserDetails = async ({ params }: { params: { userID?: string } }) => {
  let users: User[];

  if (params?.userID) {
    // Fetch a single user if the userID is provided
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`);
    const user = await res.json();
    users = [user]; // Ensure we still work with an array
  } else {
    // Fetch all users if no userID is provided
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    users = await res.json();
  }

  return (
    <>
      <h1>User with number {params.userID}</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </>
  );
};


export default UserDetails