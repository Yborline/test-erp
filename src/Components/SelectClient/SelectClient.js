import { Label, Select } from './SelectClient.styled';

const SelectClient = ({ value, text, items, handleChange }) => {
  return (
    <>
      <Label htmlFor="client-select">
        {text}:
        <Select
          onChange={e => handleChange(e)}
          name="client"
          id="client-select"
          value={value}
        >
          <option value={''} defaultValue={'Choose here'} disabled hidden>
            Choose here
          </option>
          {items &&
            items.map(item => (
              <option key={item._id} value={item.id_dep_client}>
                {item.id_dep_client}
              </option>
            ))}
        </Select>
      </Label>
    </>
  );
};

export default SelectClient;
