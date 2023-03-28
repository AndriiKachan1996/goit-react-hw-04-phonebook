import PropTypes from 'prop-types';

import { Btn, Li, Name, Num } from './ContactItem.styled';

export const ContactItem = ({ contact: { name, number }, onDeleteContact }) => {
  return (
    <>
      <Li>
        <Name>{name} : </Name>
        <Num>{number}</Num>
        <Btn type="button" onClick={onDeleteContact}>
          delete
        </Btn>
      </Li>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
