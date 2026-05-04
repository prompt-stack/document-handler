import { useState } from 'react';
import ReusableInput from "../../components/ReusableInput";
import ReusableButton from '../../components/ReusableButton';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit=(e: any)=>{
        e.prevent
        alert("Button is clicked! Username: " +email+" Password: "+password);
    }

    return (
        <div className="flex flex-col items-center justify-center h-[70%] w-[50%] rounded bg-gray-500/50">
            <h1 className="text-3xl font-bold text-red-500">Login Page</h1>
            <div className='container px-6 py-10 w-150'>
                <div className='bg-blue-100/70 px-6 py-8 shadow-md rounded-md border m-4 md:m-0'>
                    <ReusableInput label="Username" type="email" value={email} placeholder="Enter your username." onChange={setEmail}/>
                    <ReusableInput label="Password" type="password" value={password} placeholder="Enter your password." onChange={setPassword}/>
                    <ReusableButton label={'Login'} type={'button'} onClickHandler={handleSubmit} className={'bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 rounded-full w-50 focus:outline-none focus:shadow-outline ml-75 btn'}/>
                </div>
            </div>
        </div>
    );
}

export default Login;