/* eslint-disable react/prop-types */
import Image from "../../assets/bg.jpg";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Media from "../Elements/Media";
const AuthLayout = (props) => {
  const { children, type } = props;
  return (
    <div className=" w-screen h-screen bg-black py-12 px-24">
      <div className="bg-white w-full h-full mx-auto rounded-3xl flex overflow-hidden">
        <div
          className="w-1/2 overflow-hidden h-full object-cover object-center"
          style={{ backgroundImage: `url(${Image})` }}
        ></div>
        <div className="w-1/2 px-32 flex flex-col justify-center">
          <h1 className="text-sky-600 font-bold text-3xl mb-5">{type}</h1>
          {children}

          <Navigation></Navigation>
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  const text =
    type === "signup" ? "Already have an account ?" : "Don't have an account ?";
  const link = type === "signup" ? " Sign in" : " Sign up";
  return (
    <div className="flex flex-col gap-y-5 mt-5">
      <h3 className="text-xl text-slate-600 font-medium text-center ">OR</h3>
      <div className="flex w-full gap-x-4 ">
        <Media type={type} media={"Google"} image={Google}></Media>
        <Media type={type} media={"Facebook"} image={Facebook}></Media>
      </div>
      <div className="text-center">
        <p className="font-bold">
          {text}{" "}
          <a className="font-bold text-sky-600" htmlFor="">
            {link}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
