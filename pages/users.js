import Link from "next/link"
import MainContainer from "../components/MainContainer"

const Users = ({users}) => {

  return (
    <MainContainer keywords={'users page'}>
      <h1>Users list</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <span>{user.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default Users

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return {
    props: {users}
  }
}