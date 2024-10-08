import React from 'react';
import '../Style/Form.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    async function handleOnSubmit(data) {
        const formData = new FormData();
        formData.append("access_key", "b89476b0-3710-4fd1-9b60-333855b7ea79");
        formData.append("name", data.Name);
        formData.append("email", data.Email);
        formData.append("message", data.Message);

        try {
            const response = await axios.post("https://api.web3forms.com/submit", formData);
            if (response.data.success) {
                Swal.fire({
                    title: "Done",
                    text: "Your message is successfully delivered ",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Download Resume"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "THANK YOU",
                            text: "Resume is downloading",
                            icon: "success"
                        });
                        
                    }
                });

            } else {
                console.log("Error occurred");
            }
        } catch (error) {
            console.error("Submission error:", error);
        }
    }

    return (
        <div className='formDiv'>
            <div className='formArea'>
                <div className='forPhoto'>
                    <h1 className="pulse">CONTACT US</h1>
                </div>
                <div className='forForm'>
                    <div className='formm'>
                        <form onSubmit={handleSubmit(handleOnSubmit)}>
                            <input
                                className='inputSpace'
                                placeholder='Name'
                                {...register('Name', {
                                    required: "Name is required"
                                })}
                            />
                            {errors.Name && <p style={{ color: "red" }}>{errors.Name.message}</p>}
                            <br /><br />

                            <input
                                className='inputSpace'
                                placeholder='Email'
                                type='email'
                                {...register('Email', {
                                    required: "Email is required"
                                })}
                            />
                            {errors.Email && <p style={{ color: "red" }}>{errors.Email.message}</p>}
                            <br /><br />

                            <textarea
                                rows="10"
                                cols="36"
                                placeholder='Write your message'
                                {...register('Message', {
                                    required: "Message is required"
                                })}
                            />
                            {errors.Message && <p style={{ color: "red" }}>{errors.Message.message}</p>}
                            <br />

                            <button className='btn-submit' type='submit'>SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
