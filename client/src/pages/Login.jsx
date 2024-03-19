
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function loginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signin, isAuthenticated, errors: signinErrors } = useAuth()


    const navigate = useNavigate()
    useEffect(() => {
        if (isAuthenticated) navigate("/")
    }, [isAuthenticated])


    const onSubmit = handleSubmit((data) => {

        signin(data)
    })
    return (
        <form onSubmit={onSubmit}>

            <div className="container mx-auto py-24">
                <div className="max-w-md mx-auto bg-gray-100 rounded-lg p-8">
                    <h2 className="text-2xl font-medium mb-4 text-center">Login</h2>
                    {
                        signinErrors.map((error, i) => (
                            <div className="bg-red-500 p-2 text-white rounded-m my-2" key={i}>
                                {error}
                            </div>
                        ))
                    }
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

                    <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-200" href="/">Iniciar Sesión </button>
                    <p className="flex gap-x-2 justify-between">¿No tienes una cuenta aún? <Link to="/register" className="text-sky-500">Sign Up</Link></p>
                </div>
            </div>

        </form>

    )
}

export default loginPage