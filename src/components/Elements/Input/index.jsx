/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./Input";
const InputForm = (props) => {
  const { label, name, type, classname } = props;
  return (
    <div>
      <Label name={name}>{label}</Label>
      <Input type={type} id={name} name={name} classname={classname} />
    </div>
  );
};

export default InputForm;
