import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from './Context'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
    state = {
        showContactInfo: false
    }
        // IN THE ()=>{} WE HAVE TO PUT async BEFORE THE FUNCTION PARAMETERS
    onDeleteClick = async (id, dispatch) => {
        
        // DELETE DATA FROM URL USING "async" AND "await"
        // IF error OCCURES DURING delete AND IT CAN'T DELETE FROM DOM, USE THE try()... catch() 
        
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'DELETE_CONTACT', payload: id });
    };
    
    render() {
                    // DESTRUCTURING TYPE 2
        const { id,name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                { value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-2 w-50 bg-light">
                            <h4>
                                    {/* CHANGING STATE */}
                                {name}
                                <i className="fas fa-caret-down text-dark float-left mr-2"
                                    onClick={() => this.setState({ showContactInfo: !this.state.showContactInfo })}
                                    style={{cursor:'pointer'}}
                                />

                                    {/* DELETE EVENT CLICKING */}
                                <i className="fas fa-times float-right"
                                    onClick={this.onDeleteClick.bind(this,id,dispatch)}
                                    style={{ cursor: 'pointer', color: 'red' }} />
                                
                                <Link to={`contact/edit/${id}`}>
                                <i className="fas fa-pencil-alt float-right text-dark mr-3"/>
                            </Link>
                            </h4>

                            

                                {/* // CHANGING STATE ID STATEMENT */}
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Contact : {phone}</li>
                                </ul>
                            ) : null}
                        </div>
                    )
                }}
            </Consumer>            
        )
    }
}


Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};
