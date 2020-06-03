import React from 'react';

class UserProfile extends React.Component {
    render() {
        const {id, user, email, avatar} = this.props.user

        return (
            <div className="user-Profile">
                <p> {id}</p>
                <p> {user}</p>
                <p>{email}</p>
                <img src={avatar}></img>
            </div>
        );
    }
}

export default UserProfile;
