import React, { Component } from 'react'
import Contact from '../Contact/Contact';
import { Consumer } from './Context';

class Contacts extends Component {   
     render() {
         return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <>
                            <h6 className="display-4 mb-2"><span className="text-danger"> Contact</span> List</h6>
                            {contacts.map(contact => (

                                <Contact                    
                                    // destructuring calling type-2
                                    key={contact.id}
                                    contact={contact}            
                                />
                            ))
                            }
                        </>
                    )
                }}
            </Consumer>
        )
    }
}
export default Contacts;