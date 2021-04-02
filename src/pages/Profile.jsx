import React from "react"
import AccountViewer from '../pubcomp/AccountViewer';

function Profile({ user }) {
    const { email, name } = user || {}
    return (
        <AccountViewer>
            <div>여행자 프로필</div>
            <div>이름 : {name} </div>
            <div>이메일 : {email}</div>
        </AccountViewer>
    )
}

export default Profile