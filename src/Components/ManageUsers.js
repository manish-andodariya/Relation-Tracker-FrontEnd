import React, { useState, useEffect } from 'react'
import FormAddUser from './FormAddUser'

const ManageUsers = () => {
    const [res, setRes] = useState('');
    const [users, setUsers] = useState('');

    useEffect(() => {
        const getData = async () => {
            const dataFromServer = await fetchData();
            setUsers(dataFromServer.users);
        };
        getData();
    }, [res]);

    //fetching tasks
    const fetchData = async () => {
        const res = await fetch("https://relation-tracker.glitch.me/users/");
        const data = await res.json();
        console.log(data);
        return data;
    };

    const addUser = async (user) => {
        const res = await fetch(
            "https://relation-tracker.glitch.me/addUser/",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            }
        );
        const data = await res.json();
        console.log(data);
        setRes(data);
        setUsers([...users], data.users)
    };

    return (
        <div>
            <h1>Manage Users Here 🙌 </h1>
            <br />
            <FormAddUser addUsers={addUser} />
            <h3>{res.msg}</h3>
            <br />
            <h3>Available Users : {JSON.stringify(users)}</h3>
        </div>
    )
}

export default ManageUsers
