import { GetStaticProps } from 'next'
import React from 'react'

interface ProfileProps {
    response: any
}

const Profile: React.FC<ProfileProps> = ({response}) => {
    const [res, setRes] = React.useState([])
    const [errors, setErrors] = React.useState([])
        const registerUser = async event => {
          event.preventDefault()
          console.log(event.target.name.value);
          const res = await fetch(
            'http://localhost:3000/api/hello',
            {
              body: JSON.stringify({
                name: event.target.name.value
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }
          )

          const result = await res.json()
          console.log(result);
          setErrors([])
        if (result.errorMessage) {
            setErrors(result.errorMessage)
        } else setRes([...result.name])
        }
        console.log(res);


    return (
        <div>
            <h1>Merge and sort</h1>
            <p>call the next API</p>
            <div>{response.name}</div>
            <form onSubmit={registerUser}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" autoComplete="name" required />
                <button type="submit">Register</button>
            </form>
            <p>result:</p>
            <ul>
                errors: {errors ? errors: ""}
            {res.map((item, index) => (<li key={index}>{item}<hr/></li>))}
            </ul>
        </div>
    )
}
const getStaticProps: GetStaticProps = async () => {
    const posts = await fetch('http://localhost:3000/api/hello')
    const data = await posts.json()
    return {
      props: {
        response: data
      },
    }
  }

export default Profile
export {getStaticProps}