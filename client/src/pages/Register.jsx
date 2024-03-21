import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function RegisterPage() {

  const { register, handleSubmit, formState: {
    errors
  } } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
      if (isAuthenticated) navigate("/")
    }, [isAuthenticated])



  const onSubmit = handleSubmit(async (values) => {
    signup(values)

  })

  return (
    <div className="container mx-auto py-24">
      <div className="max-w-md mx-auto bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-medium mb-4 text-center">Sign Up</h2>
        {
          RegisterErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white rounded-m my-2" key={i}>
              {error}
            </div>
          ))
        }
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <input type="text" {...register("username", { required: true })} className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out  'border-red-500' : ''}`} placeholder="Username" />
            {
              errors.username && (
                <p className="text-red-500">Nombre de usuario es requerido</p>
              )
            }
          </div>
          <div className="mb-4">
            <input type="email" {...register("email", { required: true })} className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out 'border-red-500' : ''}`} placeholder="Email" />
            {
              errors.email && (
                <p className="text-red-500">Email es requerido</p>
              )
            }
          </div>
          <div className="mb-4">
            <input type="password" {...register("password", { required: true })} className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out 'border-red-500' : ''}`} placeholder="Password" />
            {
              errors.password && (
                <p className="text-red-500">Contraseña es requerido</p>
              )
            }
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-200">Register</button>
          <p className="flex gap-x-2 justify-between">¿Ya tienes una cuenta? <Link to="/login" className="text-sky-500">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
