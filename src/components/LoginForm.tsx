
import { socialLogin } from "@/app/actions";


const LoginForm = () => {
  return (
    <form action={socialLogin}>
      <button
        className="bg-red-300 text-stone-50 p-1 rounded-md m-1 text-lg"
        type="submit"
        name="action"
        value="google"
      >
        Sign In with Google
      </button>

      <button
        className="bg-black text-stone-50 p-1 rounded-md m-1 text-lg"
        type="submit"
        name="action"
        value="github"
      >
        Sign In with GitHub
      </button>
    </form>
  );
};

export default LoginForm;
