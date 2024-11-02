import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";
import Input from "../Elements/Input/Input";
import Label from "../Elements/Input/Label";

const FormSignup = () => {
  return (
    <form action="" className="flex flex-col gap-y-5">
      <div className="flex gap-x-2 w-full">
        <div className="w-1/2">
          <InputForm
            type="text"
            name="firstName"
            label="First Name"
            classname="w-full"
          ></InputForm>
        </div>
        <div className="w-1/2">
          <InputForm
            type="text"
            name="lastName"
            label="Last Name"
            classname="w-full"
          ></InputForm>
        </div>
      </div>
      <div>
        <InputForm
          type="email"
          name="email"
          label="Email"
          classname="w-full"
        ></InputForm>
      </div>
      <div>
        <InputForm
          type="password"
          name="password"
          label="Password"
          classname="w-full"
        ></InputForm>
      </div>
      <div>
        <InputForm
          type="password"
          name="repassword"
          label="Re-enter Password"
          classname="w-full"
        ></InputForm>
      </div>
      <div className="flex gap-x-2 items-center">
        <Input name="checkbox" type="checkbox"></Input>
        <Label name="checkbox">
          I&apos;ve read and agree with Terms of services and our Privacy Policy
        </Label>
      </div>
      <Button>Sign Up</Button>
    </form>
  );
};
export default FormSignup;
