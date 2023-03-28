import PropTypes from 'prop-types';

import { ContactItem } from 'components/ContactsList/ContactItem/ContactItem';
import { Container, UL } from './ContactsList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Container>
      <UL>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        ))}
      </UL>
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
