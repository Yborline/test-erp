import { Label, Select } from './SelectProject.styled';

const SelectProject = ({ oneProject, text, items, handleChange }) => {
  const normalIdProject = item => {
    if (item) {
      return `${item.id}-${item.id_project}`;
    }
    return '';
  };
  return (
    <>
      <Label htmlFor="department-select">
        {text}
        <Select
          onChange={e => handleChange(e)}
          name="project"
          id="department-select"
          value={normalIdProject(oneProject)}
        >
          <option value="" defaultValue={'Choose here'} disabled hidden>
            Choose here
          </option>
          {items &&
            items.map(item => (
              <option key={item._id} value={normalIdProject(item)}>
                {normalIdProject(item)}
              </option>
            ))}
        </Select>
      </Label>
    </>
  );
};

export default SelectProject;

// import { Label, Select } from "./InputProject.styled";

// const InputProject = ({ oneProject, text, items, handleChange }) => {
//   return (
//     <>
//       <Label htmlFor="department-select">
//         {text}
//         <Select
//           onChange={(e) => handleChange(e)}
//           name="project"
//           id="department-select"
//           value={oneProject?.id_project ? oneProject.id_project : oneProject}
//         >
//           <option value="" defaultValue={"Choose here"} disabled hidden>
//             Choose here
//           </option>
//           {items &&
//             items.map((item) => (
//               <option key={item._id} value={item.id_project}>
//                 {item.id_project}
//               </option>
//             ))}
//         </Select>
//       </Label>
//     </>
//   );
// };

// export default InputProject;
