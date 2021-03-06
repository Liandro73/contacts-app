import React, { useState } from 'react';
import styled from 'styled-components';
import CONTACTS from '../contacts';
import ContactItem from '../components/ContactItem';
import AddContactForm from '../components/AddContactForm';
import Contact from '../models/Contact';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    width: 768px;
    padding: 16px;
    background-color: #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
`;

const ContactList = styled.ul`
    margin: 0;
    padding: 16px;
    list-style: none;
`;

const Contacts = () => {

    const [isAddindContact, setAddingContact] = useState(false);
    const [contacts, setContacts] = useState(CONTACTS);

    const handleRemoveContact = (removeContactId: string) => {
        setContacts(contacts =>
            contacts.filter(contact => contact.id !== removeContactId)
        );
    };

    const handleAddContent = (contact: Contact) => {
        setContacts(contacts => contacts.concat(contact));
        setAddingContact(false);
    };

    return (
        <Wrapper>
            <Card>
                <header>
                    {isAddindContact &&
                        <AddContactForm onAddContact={handleAddContent} />}
                    <button onClick={() => setAddingContact(true)}>
                        Adicionar contato
                    </button>
                </header>
                <ContactList>
                    {contacts.map(contact => (
                        <ContactItem
                            key={contact.id}
                            contact={contact}
                            onRemoveContact={handleRemoveContact}
                        />
                    ))}
                </ContactList>
            </Card>
        </Wrapper>
    );
};

export default Contacts;