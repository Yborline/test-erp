import Button from "../Button/Button";
import InputClientProject from "../InputClientProject/InputClientProject";
import { DivButton, Form } from "./FormCreateProject.styled";

const FormCreateProject = () => {
  return (
    <Form>
      <InputClientProject text={"Client №"} />
      <DivButton>
        <Button>Create Project</Button>
      </DivButton>
    </Form>
  );
};

export default FormCreateProject;
