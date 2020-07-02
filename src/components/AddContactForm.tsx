import React, { useState, FormEvent } from 'react';
import Contact from '../models/Contact';
import uuid from 'uuid';
import styled from 'styled-components';

type Props = {
    onAddContact: (contact: Contact) => void;
}

const Card = styled.div`
    padding: 20px;
    border-radius: 20px;
    background-color: #ddd;
    margin-top: 16px;
`;

const AddContactForm = ({ onAddContact }: Props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddContact({
            id: uuid.v4(),
            name,
            email,
            phoneNumber
        });
    };

    return (
        <form onSubmit={handleSubmit} >
            <Card>
                <div>
                    <label htmlFor="input-name">Nome:</label>
                </div>
                <div>
                    <input
                        id="input-name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="input-email">Email:</label>
                </div>
                <div>
                    <input
                        id="input-email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="input-phoneNumber">Telefone:</label>
                </div>
                <div>
                    <input
                        id="input-phoneNumber"
                        type="number"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </div>
            </Card>
            <button type="submit" >Criar contato</button>
        </form>
    );
};

export default AddContactForm;