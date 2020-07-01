import React from 'react';
import styled from 'styled-components';
import CONTACTS from '../contacts';
import ContactItem from '../components/ContactItem';

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    width: 768px;
    height: 100px;
    background-color: #eee;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

const Contacts = () => {

    return <Wrapper>
        <Card />
        <ul>
            {CONTACTS.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </ul>
    </Wrapper>
};

export default Contacts;