import React from 'react';
import Contact from '../models/Contact';
import styled from 'styled-components';

type Props = {
    contact: Contact;
}

const Card = styled.li`
    padding: 16px;
    border-radius: 20px;
    background-color: #eee;

    & + & {
        margin-top: 16px;
    }
`;

const ContactItem = ({ contact }: Props) => (
    <Card>
        <p>Nome: {contact.name}</p>
        <p>E-mail: {contact.email}</p>
        <p>Telefpne: {contact.phoneNumber}</p>
    </Card>
);

export default ContactItem;