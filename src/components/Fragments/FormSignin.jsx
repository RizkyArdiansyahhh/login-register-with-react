import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";
import Input from "../Elements/Input/Input";
import Label from "../Elements/Input/Label";

const FormSignin = () => {
  return (
    <form action="" className="flex flex-col gap-y-5">
      <InputForm
        label="Email"
        name="email"
        type="email"
        classname="w-full"
      ></InputForm>
      <InputForm
        label="Password"
        name="password"
        type="password"
        classname="w-full"
      ></InputForm>
      <div className="flex gap-x-2 items-center">
        <Input name="checkbox" type="checkbox"></Input>
        <Label name="checkbox">Remember me</Label>
      </div>
      <Button>Sign In</Button>
    </form>
  );
};
export default FormSignin;
