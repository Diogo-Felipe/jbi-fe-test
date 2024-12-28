import { SearchBar } from './styled';

const SearchBarComponent = ({ value, onChange, placeholder }) => {

  return (
    <SearchBar
      placeholder={placeholder}
      value={value}
      onChange={onChange} />
  );
};

export default SearchBarComponent;
