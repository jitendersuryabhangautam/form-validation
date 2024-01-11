import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-white">
        <form className="container">
          <h1 className='text-center bg-blue-400 py-2 rounded
            font-semibold  tracking-[3px]'>Registration Form</h1>
          <div className="h-2 bg-red w-full"></div>
          <div className="field">
            <label className='h-full bg-orange-500 py-[10px] text-center'>Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;