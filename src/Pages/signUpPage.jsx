import FormSignup from "../components/Fragments/FormSignup";
import AuthLayout from "../components/Layouts/AuthLayout";

const SignUpPage = () => {
  return (
    <AuthLayout type="signup">
      <FormSignup></FormSignup>
    </AuthLayout>
  );
};
export default SignUpPage;
