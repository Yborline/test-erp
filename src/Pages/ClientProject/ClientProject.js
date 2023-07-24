import FormCreateProject from "../../Components/FormCreateProject/FormCreateProject";
import InputClientProject from "../../Components/InputClientProject/InputClientProject";

export default function ClientProject() {
  return (
    <>
      <FormCreateProject />
      <InputClientProject text={"Project №"} />
    </>
  );
}
