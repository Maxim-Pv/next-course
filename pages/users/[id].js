import { useRouter } from "next/router"
import st from '../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer"

export default function User({user}) {
  const {query} = useRouter()
  
  return (
    <MainContainer keywords={user.name}>
      <h1 className={st.user}>User with id: {query.id}</h1> 
      <div>User name - {user.name}</div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()

  return {
    props: {user},
  }
}