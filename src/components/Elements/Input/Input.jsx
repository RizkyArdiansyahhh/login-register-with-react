/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, name, classname } = props;
  return (
    <input
      type={type}
      id={name}
      name={name}
      className={`border-2 rounded-lg divide-black px-3 py-2 ${classname}`}
    />
  );
};
export default Input;
