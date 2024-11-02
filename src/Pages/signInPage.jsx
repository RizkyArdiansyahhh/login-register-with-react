import FormSignin from "../components/Fragments/FormSignin";
import AuthLayout from "../components/Layouts/AuthLayout";

const SignInPage = () => {
  return (
    <AuthLayout type="signin">
      <FormSignin></FormSignin>
    </AuthLayout>
  );
};
export default SignInPage;
