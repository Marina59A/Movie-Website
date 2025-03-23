import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import './login.css'

export default function Login() {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

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
                </Form>
            </div>
        </>
    )
}
