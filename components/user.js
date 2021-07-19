
export default function User({user}) {
    return (
        <div>
            <div>name: {user.name}</div>
            <div>phone number: {user.phone}</div>
            <div>user name: {user.username}</div>
            <div>website: {user.website}</div>
            <div>phone number: {user.phone}</div>
            <div>address {user.address.city}</div>
            <hr />
        </div>
    )
}
