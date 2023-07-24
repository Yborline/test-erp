import { Label, Select } from "./InputClientProject.styled";

const InputClientProject = ({ text }) => {
  return (
    <>
      <Label htmlFor="department-select">
        {text}:
        <Select name="client" id="department-select">
          <option value="">--Please choose an option--</option>
        </Select>
      </Label>
    </>
  );
};

export default InputClientProject;
