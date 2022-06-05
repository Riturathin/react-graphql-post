
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../mutations';
import './user-form.css';

const UserForm = () => {   
    let username, email, name,address, city, suite, street, zipcode, phone, website, company ;
    const [ createUser, {loading , error, data } ] = useMutation( CREATE_USER );
    return (
        <>{ !data && 
        <div className="todo-adder left-aligned">
            <div className="add-todos">
                
                <div className="col-4 offset-md-4">
                    <form className="form-control fixed-overlay-form" 
                        onSubmit={ e => {
                            e.preventDefault();
                            createUser({ variables: { 
                                username: username.value,
                                email: email.value,
                                name: name.value,
                                address: address.value,
                                city: city.value,
                                suite: suite.value,
                                street: street.value,
                                zipcode: zipcode.value,
                                phone: phone.value,
                                website: website.value,
                                company: company.value,

                             } });
                        }}
                        >
                       <h6 className='mt-2'><b>CREATE USER</b></h6>
                       <br />
                       <label htmlFor="username"><small>USERNAME</small></label>
                        <input ref={ value => username = value}
                                type="text" 
                                name="username" 
                                className="form-control" />
                        <br/>
                        <label htmlFor="name"><small>NAME</small></label>
                        <input ref={ value => name = value}
                                type="text" 
                                name={"name"} 
                                className="form-control" />
                        <br/>
                        <label htmlFor={"email"}><small>EMAIL</small></label>
                        <input ref={ value => email = value}
                                type="text" 
                                name={"email"} 
                                className="form-control" />
                        <br/>
                        <label htmlFor={"address"}><small>ADDRESS</small></label>
                        <input ref={ value => address = value}
                                type="text" 
                                name={"address"} 
                                className="form-control" />
                        <br/>
                        <label htmlFor={"street"}><small>STREET</small></label>
                        <input ref={ value => street = value}
                                type="text" 
                                name={"street"} 
                                className="form-control" />
                        <br/>
                        <label htmlFor={"suite"}><small>SUITE</small></label>
                        <input ref={ value => suite = value}
                                type="text" 
                                name={"suite"} 
                                className="form-control" />
                        <br/>
                        <label htmlFor={"city"}><small>CITY</small></label>
                        <input ref={ value => city = value}
                                type="text" 
                                name={"city"} 
                                className="form-control" />
                        <br/>
                        <label htmlFor={"zipcode"}><small>ZIPCODE</small></label>
                        <input ref={ value => zipcode = value}
                                type="text" 
                                name={"zipcode"} 
                                className="form-control" />
                        <br/>
                        <label htmlFor={"phone"}><small>PHONE</small></label>
                        <input ref={ value => phone = value}
                                type="text" 
                                name={"phone"} 
                                className="form-control" />
                        <br/>
                        <label htmlFor={"website"}><small>WEBSITE</small></label>
                        <input ref={ value => website = value}
                                type="text" 
                                name={"website"} 
                                className="form-control" />
                        <br/>
                        <label htmlFor={"company"}><small>COMPANY</small></label>
                        <input ref={ value => company = value}
                                type="text" 
                                name={"company"} 
                                className="form-control" />
                        <br/>
                        
                       <button type="submit" className="btn btn-primary btn-small">SUBMIT</button>
                      
                    </form>
       
                    { data && <h1>hello</h1>}
                </div>
            </div>
        </div>
         }</>
    )
}

export default UserForm;