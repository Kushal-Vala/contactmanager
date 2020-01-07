import React, { Component } from 'react'
import { Consumer } from './Context'
import { TextInputGroup } from '../Layout/TextInputGroup'
import axios from 'axios'



export default class Addcontact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors:{}
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

        const newContact = {
            name,
            email,
            phone
        }
            // USING async AND await  TO ADD  DATA USIN TEMPORARY ID 11       
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        
        dispatch({ type: 'ADD_CONTACT', payload: res.data });
        
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
                                <div className="card-header ">Add Contact</div>
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
                                            className="btn btn-block btn-dark"
                                            value="Submit"
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
