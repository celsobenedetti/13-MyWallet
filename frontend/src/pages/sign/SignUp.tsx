import { FC } from "react";
import { Link } from "react-router-dom";
import SignForm from "../../components/form/SignForm";
import TextInput from "../../components/input/TextInput";
import SubmitButton from "../../components/submit/SubmitButton";
import { SignPageProps } from "../../global/types";

const SignUp: FC<SignPageProps> = (props) => {
  const { handleInput, handleSubmit, clearForm } = props;
  return (
    <main className="base-container gap-4">
      <h1 className="text-2xl">MyWallet</h1>
      <SignForm>
        <TextInput type="text" placeholder="Name" name="name" onChange={handleInput} required />
        <TextInput type="text" placeholder="E-mail" name="email" onChange={handleInput} required />
        <TextInput
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInput}
          required
        />
        <TextInput
          type="password"
          placeholder="Confirm Password"
          name="passwordconfirm"
          onChange={handleInput}
          required
        />
        <SubmitButton handleSubmit={handleSubmit} text="Sign Up" />
      </SignForm>
      <Link to="/signin" onClick={clearForm} className="text-xs font-bold">
        Have an account? Log in
      </Link>
    </main>
  );
};

export default SignUp;