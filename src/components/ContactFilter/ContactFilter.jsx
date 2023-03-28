import PropTypes from 'prop-types';

import { Container, Input } from './ContactFilter';

export const ContactFilter = ({ value, changeFilter }) => {
  const handleChange = ({ currentTarget }) => {
    changeFilter(currentTarget.value);
  };
  return (
    <Container>
      <Input value={value} onChange={handleChange}></Input>
    </Container>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
