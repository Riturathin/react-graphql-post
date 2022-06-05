
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../queries';
import { Link, useParams } from 'react-router-dom';
import Posts from '../posts/posts';

import './user-detail.css';
import { useState } from 'react';

const Users = () => {
    const [postsDisplay, setPostsDisplay ] = useState(false);
    const params = useParams();
    const { data, loading, error } = useQuery(GET_USER, {
        variables: { userId: params.id}
    });
    if( loading ) return 'Loading...';
    if( error ) return 'Error';

    return (
        <div className=''>
            <div className='container'>
                <h1 className='text-left'>User Profile</h1>
                <div className='row'>
               
                    <div className='col-12'>
                        <div className='user-detail'>
                            <div className='row'>
                                <div className='col-4 right-bordered left-aligned'>
                                <h4>{data.user.name}</h4>
                                
                                    <p><b>email: </b>{ data.user.email }</p>
                                    <p><b>Phone: </b>{ data.user.phone }</p>
                                    <p><b>Company: </b>{ data.user.company.name }</p>
                                    <p><b>Website: </b>{ data.user.website }</p>
                                    <p><b>Business target: </b>{ data.user.company.bs }</p>
                                    <p><b>About: </b>{ data.user.company.catchPhrase }</p>
                                </div>
                                

                                <div className='col-8 left-aligned'>
                                    <p><b>City: </b>{ data.user.address.city }</p>
                                    <p><b>Address: </b>{ data.user.address.street }, { data.user.address.suite }  </p>
                                    <p><b>ZIP: </b>{ data.user.address.zipcode }</p>
                                    <p><b>Website: </b>{ data.user.website }</p>
                                    <p><b>Business target: </b>{ data.user.company.bs }</p>
                                    <p><b>About: </b>{ data.user.company.catchPhrase }</p>
                                </div>
                                
                                <div className='view-posts col-12'>
                                    <button className={`btn ${!postsDisplay ? 'btn-primary': 'btn-success'} col-2 btn-small`} onClick={() => setPostsDisplay(!postsDisplay)}>
                                        { postsDisplay ? 'Hide Posts' : 'View all posts' }
                                    </button>
                                </div>
                                { postsDisplay && <div className='submitted-posts col-12'>
                                    <Posts data={data.user.posts.data } />
                                </div>}
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;