import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './registerpage.module.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            username: ''
        },
        onSubmit: async (values) => {
            try {
                const res = await axios.post("https://gentle-ridge-36337.herokuapp.com/api/auth/register", values)
                console.log(res) 
                toast("Пользователь зарегистрирован")  
            } catch (err) {
                toast(err.response.data)
            }
        } 
    })

    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>
                Регистрация
            </h1>
            <form className={styles.form} onSubmit={formik.handleSubmit} >
                <TextField 
                    label="Ваш email" 
                    variant="filled" 
                    type="email"
                    name="email"
                    fullWidth
                    required
                    style={{ marginBottom: "20px" }}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <TextField 
                    label="Ваше имя" 
                    variant="filled" 
                    type="text"
                    name="username"
                    fullWidth
                    required
                    style={{ marginBottom: "20px" }}
                    value={formik.values.username}
                    onChange={formik.handleChange}
                />
                <TextField 
                    label="Ваш пароль" 
                    variant="filled" 
                    type="password"
                    name="password"
                    fullWidth
                    required
                    style={{ marginBottom: "40px" }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <Button 
                    fullWidth 
                    type="submit" 
                    variant="contained"
                    style={{backgroundColor: "#BF94E8", fontSize: "24px"}}
                    >
                    Зарегистрироваться
                </Button>
            </form>
            <ToastContainer />
        </section>
    );
};

export default RegisterPage;

// При отправке формы, в консоли отобразить объект
// {email: "Введенный email", name: "Введенное имя", password: "Введенный пароль"}