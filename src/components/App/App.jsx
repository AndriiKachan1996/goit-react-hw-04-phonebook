import { useState } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from 'components/ContactsList/ContactsList.jsx';
import { ContactForm } from '../ContactForm/ContactForm.jsx';
import { Container, Title } from './App.styled.js';
import { ContactFilter } from '../ContactFilter/ContactFilter.jsx';
import { useLocalStorage } from 'components/Hooks/LocalStorageService.jsx';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contactList', []);
  const [filter, setFilter] = useState('');

  const handleOnsubmitForm = contact => {
    if (!findContact(contact.name)) {
      createNewContact(contact);
      return true;
    } else return false;
  };

  const createNewContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };

    setContacts(ps => [...ps, newContact]);
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const findContact = name => {
    const toFind = name.toLowerCase();
    if (contacts.find(({ name }) => name.toLowerCase() === toFind)) return true;
    else return false;
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = contactId => {
    setContacts(ps => contacts.filter(({ id }) => id !== contactId));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm handleOnsubmitForm={handleOnsubmitForm} />

      <Title>Contacts</Title>
      <ContactFilter changeFilter={changeFilter} value={filter} />

      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={onDeleteContact}
      />
    </Container>
  );
};
