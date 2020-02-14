import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import ContactContext from '../../contexts/contact/contactContext';
import ContactItem from "./ContactItem";

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (contacts.length === 0) {
        return <h4>Please add contact</h4>
    }
    return (
        <Fragment>
            <TransitionGroup>
            {filtered !== null 
            ? (filtered.length !== 0 ? filtered.map(contact =>(
                <CSSTransition key={contact.id} timeout={1000} classNames="item">
                    <ContactItem contact={contact}/>
                </CSSTransition> 
            )) : <h4>No results</h4>) 
            : contacts.map(contact => (
                <CSSTransition key={contact.id} timeout={1000} classNames="item">
                    <ContactItem contact={contact}/>
                </CSSTransition>
            ))}
            </TransitionGroup>
        </Fragment>
    )
}

export default Contacts
