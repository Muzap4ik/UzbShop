import {React, useEffect} from "react";
import "./LoginPage.css";
import { useState } from "react";
const LoginPage = () => {
    
    const [name, setName] = useState('')
    const [nameFoul, setNameFoul] = useState(false)
    const [nameError, setNameError] = useState("Ism qismi bo'sh turmasligi kerak!")
    const [email, setEmail] = useState('')
    const [emailFoul, setEmailFoul] = useState(false)
    const [emailError, setEmailError] = useState("Pochta qismi bo'sh turmasligi kerak!")
    const [age, setAge] = useState('')
    const [ageFoul, setAgeFoul] = useState(false)
    const [ageError, setAgeError] = useState("Yosh qismi bo'sh turmasligi kerak!")
    const [formValid, setFormValid] = useState(false)


    useEffect(() =>{
        if(nameError || emailError || ageError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError, ageError])

    const nameHandler = (e) => {
        setName(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 30) {
            setNameError('Ism qismiga 3 tadan 30 tagacha yozish mumkun!')
            if (!e.target.value) {
                setNameError("Ism qismi bo'sh turmasligi kerak!")
            }
        } else {
            setNameError('')
        }
    }


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError(`Noto'g'ri pochta kiritdingiz!`)
            if (!e.target.value) {
                setEmailError("Pochta qismi bo'sh turmasligi kerak!")
            }
        } else {
            setEmailError("")
        }
    }

    const ageHandler = (e) => {
        setAge(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setAgeError(`Yozish mumkun 3 tadan 10 tagacha simvol!`)
            if (!e.target.value) {
                setAgeError("Yosh qismi bo'sh turmasligi kerak!")
            }
        } else {
            setAgeError("")
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameFoul(true)
                break
            case 'email':
                setEmailFoul(true)
                break
            case 'age':
                setAgeFoul(true)
                break
        }
    }


    const submitHandler = (e) => {
        e.preventDefault()
        console.log(`Ismingiz ${name}\nPochtangiz: ${email}\nYoshingiz: ${age}`)
        window.location.replace("https://muzap4ik.github.io/UzbShop/#/home")
    }

  return (
    <div className="login-container">
      <div className="left-container">

      </div>
      <div className="right-container">
            <div className="main-title">
                <h1>Bizga qo'shiling!</h1>
                <p>Siz uchun kerak bo'lgan barcha Uzb toza mahsulotlari shu yerda faqatgina ro'yxatdan o'tsangiz bas!</p>
            </div>
            <div className="input-container">
                <form className="form-signUp">
                    <p>Ismingiz:</p>
                    {(nameFoul && nameError) && <div style={{ color: 'gold' }}>{nameError}</div>}
                    <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text" name="name" placeholder="masalan: Muzaffar"/>
                    <p>Email Pochtangiz:</p>
                    {(emailFoul && emailError) && <div style={{ color: 'gold' }}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} type="email" name="email" placeholder="masalan: Muzaffar@gmail.com"/>
                    <p>Yoshingiz:</p>
                    {(ageFoul && ageError) && <div style={{ color: 'gold' }}>{ageError}</div>}
                    <input onChange={e => ageHandler(e)} value={age} onBlur={e => blurHandler(e)} type="text" name="age" placeholder="masalan: 17 yosh"/>
                    <button onClick={submitHandler} disabled={!formValid} type="submit" id="signUp-btn">
                        Ro'yxatdan o'tish
                    </button>
                </form>
            </div>
      </div>

    </div>
  );
};

export default LoginPage;
