import React, { Component } from 'react'
import { Consumer } from './Context'
import { TextInputGroup } from '../Layout/TextInputGroup'
import axios from 'axios';



export default class Editcontact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors:{}
    }
        // USE componentDidMount() TO UPDATE CONTACT
        
    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }
    

        //  MULTIPLE EVENT HANDLER FOR ALLOW TYPING IN INPUT FIELDS
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = async (dispatch,e) => {
        e.preventDefault();
        // console.log(this.state)
        const { name, email, phone } = this.state;
        
        // CHECK FOR ERRORS AND VALIDATIONS
        if (name === '') {
            this.setState({ errors: { name: 'Name is Required...!!' } });
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Email is Required...!!' }});
            return;

        }
        if (phone === '') {
            this.setState({ errors: { phone:  'Phone is Required...!!' }});
        
            return;
        }
            // UPDATE CONTACT partS
        const updateContact = {
            name,
            email,
            phone
        }
        const { id } = this.props.match.params;
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

        dispatch({ type: 'UPDATE_CONTACT', payload: res.data });


            //for clear the textbox after submit 
        this.setState({
            name: "",
            email: "",
            phone: "",
            errors:{}
        })

            // to Redirect ID or params
        this.props.history.push('/')
    }

    render() {
        const { name, email, phone, errors } = this.state;
        // console.log(errors);
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <>
                            <div className="card">
                                <div className="card-header ">Edit Contact</div>
                                    <div className="card-body">
                                        <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                            <TextInputGroup
                                                label="Name"
                                                name="name"
                                                placeholder="Enter Name..."
                                                value={name}
                                                onChange={this.onChange}
                                                error={errors.name}
                                            />
                                            <TextInputGroup
                                                label="Email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter Email..."
                                                value={email}
                                                onChange={this.onChange}
                                                error={errors.email}

                                            />
                                            <TextInputGroup
                                                label="Phone"
                                                name="phone"
                                                placeholder="Enter Phone..."
                                                value={phone}
                                                onChange={this.onChange}
                                                error={errors.phone}
                                            />
                                            
                                        <input
                                            type="submit"
                                            className="btn btn-block bg-dark text-white"
                                            value="Update Contact"
                                        />
                                        </form>
                                    </div>
                            </div>
                        </>
                    )
                }}
            </Consumer>
        )
        
    }
}
