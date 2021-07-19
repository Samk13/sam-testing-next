import { NextPage } from 'next'
import { UserProps } from '../types'

const User: NextPage<UserProps> = ({userData}) => {
    return (
        <div>
            <div>name: {userData.name}</div>
            <div>phone number: {userData.phone}</div>
            <div>user name: {userData.username}</div>
            <div>website: {userData.website}</div>
            <div>phone number: {userData.phone}</div>
            <div>address {userData.address.city}</div>
            <hr />
        </div>
    )
}

export default User