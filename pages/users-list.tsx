import User from '../components/user'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { Users, UsersProps } from '../types'

 const UsersList:NextPage<UsersProps> = ({users}) => {
    return (
        <div>
            <h1>List of users</h1>
            {users.map((userdata) => (
                <div key={userdata.id}>
                    <User userData={userdata} />
                </div>
                ))}
        </div>
    )
}
  const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: Users[] = await response.json();
    return {
        props: {
            users
        },
    }
}
export default UsersList
export {getStaticProps }