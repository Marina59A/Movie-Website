import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import './login.css'
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../Services/UserService/auth';
import toast, { Toaster } from 'react-hot-toast';

export default function Login() {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
        setError
    } = useForm()

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const loginUser = await userLogin(data.email, data.password);
            console.log(loginUser.user.accessToken);
            localStorage.setItem('accessToken', loginUser.user.accessToken);
            toast.success('Login Successful');
            window.location.replace('/Movie');
        } catch (error) {
            console.error(error);
            toast.error('Invalid Email or Password!');
            setError('email', { type: 'manual', message: 'Invalid Email or Password!' })
            setError('password', { type: 'manual', message: 'Invalid Email or Password!' })
        }
    }

    // console.log(watch("example"))

    return (
        <>
            <div className='container login mt-5'>
                <Form className='m-5' onSubmit={handleSubmit(onSubmit)} >
                    <Form.Group className="mb-3" id="exampleForm.ControlInput1">
                        <Form.Label htmlFor='email-input'>Email:</Form.Label>
                        <Form.Control id="email-input"
                            type="email" placeholder="Enter Your Email"
                            name='email'
                            {...register('email', { required: "Email is Required" })} />
                        {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" id="exampleForm.ControlInput2">
                        <Form.Label htmlFor='password-input'>Password:</Form.Label>
                        <Form.Control id='password-input'
                            type="password" placeholder="Enter Your Password"
                            name='password'
                            {...register('password', { required: "Password is Required" })} />
                        {errors.password && <p className="text-danger">{errors.password.message}</p>}
                    </Form.Group>
                    <button className='btn btn-success'>Submit</button>
                    <Toaster position='top-center' />
                </Form>
            </div>
        </>
    )
}
