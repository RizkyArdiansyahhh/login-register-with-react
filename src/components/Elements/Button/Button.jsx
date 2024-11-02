/* eslint-disable react/prop-types */
const Button = (props) => {
  const { children } = props;
  return (
    <button className="w-full bg-sky-600 font-semibold text-white rounded-md p-2 ">
      {children}
    </button>
  );
};
export default Button;
