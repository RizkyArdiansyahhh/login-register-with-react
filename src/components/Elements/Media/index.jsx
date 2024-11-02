/* eslint-disable react/prop-types */
const Media = (props) => {
  const { type, media, image } = props;

  const text = type === "signup" ? "Sign Up" : "Sign In";

  return (
    <button className="flex items-center justify-center gap-2 w-1/2 border-2 rounded-md p-2">
      <img src={image} alt={media} />
      <span>
        {text} With {media}
      </span>
    </button>
  );
};
export default Media;
