import ReusableInput from "../../components/ReusableInput";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[70%] w-[50%] rounded bg-gray-200">
            <h1 className="text-3xl font-bold text-red-500">Login Page</h1>
            <ReusableInput/>

        </div>
    );
}

export default Login;