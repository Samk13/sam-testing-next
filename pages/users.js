import User from '../components/user'
export default function Users({data}) {
    return (
        <div>
            <h1>List of users</h1>
            {data.map(user => (
                <div key={user.id}>
                    <User user={user} />
                </div>
                ))}
        </div>
    )
}
export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props: {data},
    }
}
