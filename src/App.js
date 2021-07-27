import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/Form';

import ContactList from './components/ContactList';

import Filter from './components/Filter';

import Title from './components/Title';

// import initialContacts from './data/contacts.json';

import { FormContainer } from './App.styles';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in the contact list`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts(contacts => [contact, ...contacts]);
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');

    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <FormContainer>
      <Title text={'Phonebook'} />
      <ContactForm onSubmit={addContact} />
      <Title text={'Contacts'} />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </FormContainer>
  );
};

export default App;
