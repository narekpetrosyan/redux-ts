import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

export const UserList: React.FC = () => {
    const {users,error,loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(() => {
        fetchUsers()
    },[])


    if (loading){
        return <h1>Loading...</h1>
    }

    if (error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map((user,index) => (
                <div key={index}>
                    <h3>{user.name}</h3>
                </div>
            ))}
        </div>
    );
};
