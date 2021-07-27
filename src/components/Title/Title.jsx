import PropTypes from 'prop-types';
import { Heading } from './Title.styles';

const Title = ({ text }) => {
  return <Heading>{text}</Heading>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
