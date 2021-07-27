import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styles';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange}></FilterInput>
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
