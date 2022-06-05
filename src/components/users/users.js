
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../queries';
import { Link } from 'react-router-dom';
import './users.css';
import { usersConfig } from '../../config';
import { CREATE_USER } from '../../mutations';
import UserForm from './userForm';
import { useState } from 'react';

const Users = () => {
    const [ createUser, setCreateUser ] = useState(false);
    const { data, loading, error } = useQuery(GET_ALL_USERS, {
        pollInterval: 100
    });
    if( loading ) return 'Loading...';
    if( error ) return 'Error';

    return (
        <div className=''>
            <div className='container'>
                <div className='row'>
                    <h3 className='left-aligned mt-4 col-8'>Users</h3>
                    <div className='col-4 mt-4 right-aligned'>
                        <button className='btn btn-primary btn-sm' onClick={() => setCreateUser(!createUser)}>
                            USER+
                        </button>
                    </div>
                </div>
                <br></br>
                <br />

                <div className='row'>
                { data.users.data.map((user, index) => (
                    <div className='col-3' key={index}>
                        <div className='users'>
                        <Link to={`/user/${user.id}`}>
                            <h4>{user.name}</h4>
                            
                            <p><b>email: </b>{ user.email }</p>
                            <p><b>Phone: </b>{ user.phone }</p>
                            <p><b>Company: </b>{ user.company.name }</p>
                            <p><b>Website: </b>{ user.website }</p>
                            <p><b>Business target: </b>{ user.company.bs }</p>
                            <p><b>About: </b>{ user.company.catchPhrase }</p>
                            </Link>
                            </div>
                       
                    </div>
                ))}

                { createUser &&  <UserForm /> }
                </div>
            </div>
        </div>
    )
}

export default Users;