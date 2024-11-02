/* eslint-disable react/prop-types */
const Label = (props) => {
  const { children, name, classname = "" } = props;
  return (
    <label
      className={`block text-black font-medium ${classname}`}
      htmlFor={name}
    >
      {children}
    </label>
  );
};
export default Label;
