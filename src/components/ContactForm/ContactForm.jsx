import PropTypes from 'prop-types';

import {
  Button,
  Container,
  Div,
  Form,
  Input,
  Label,
} from './ContactForm.styled';

export const ContactForm = ({ handleOnsubmitForm }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (handleOnsubmitForm({ name, number })) form.reset();
    else alert(`${name} is alreadyin contacts.`);
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Div>
            <Label htmlFor="exampleInputEmail1">Name</Label>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <Label htmlFor="exampleInputEmail1">Phone number</Label>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Div>

          <Button type="submit">Add contact</Button>
        </Form>
      </Container>
    </>
  );
};

ContactForm.propTypes = {
  handleOnsubmitForm: PropTypes.func.isRequired,
};
