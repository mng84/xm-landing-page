import { useState, useEffect } from "react"
import SuccessFormMessage from "./SuccessFormMessage"
import Loader from "./Loader"

const RegistrationForm = () => {
    // Variables
    // Inputs
    const [fullName, setFullName] = useState("")
    const [dob, setDob] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Validation messages
    const [fullNameMessage, setFullNameMessage] = useState("")
    const [emailMessage, setEmailMessage] = useState("")
    const [validInput, setValidInput] = useState(false)

    // Password validation
    const [passChars, setPassChars] = useState(false)
    const [passNumber, setPassNumber] = useState(false)
    const [passLowerChar, setPassLowerChar] = useState(false)
    const [passUpperChar, setPassUpperChar] = useState(false)
    const [passSpecialChars, setPassSpecialChars] = useState(false)

    // Regex fullname, email, password
    const regFullName = /^[a-zA-Z -]+$/
    const regEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\)\(\?\|\.,\/+\-_]).{8,15}$/

    // DOB
    const [age, setAge] = useState(0)
    const [isUnder18, setIsUnder18] = useState(false)
    const [isOver60, setIsOver60] = useState(false)

    // Form steps
    const [showFormTwo, setShowFormTwo] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const [isButtonDisabledSubmit, setIsButtonDisabledSubmit] = useState(true)

    // Form loader and success message
    const [isLoading, setIsLoading] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)


    const nextStep = (e) => {
        e.preventDefault()
        setShowFormTwo(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setHasSubmitted(true)
        }, 3000)
    }

    useEffect(() => {
        const isFormValid =
            fullName.trim() !== "" && fullNameMessage === "" && dob !== "" && !isUnder18 && !isOver60

        const isFormValidSubmit = email !== "" && emailMessage === "" && password !== ""

        // Update isButtonDisabled based on isFormValid
        setIsButtonDisabled(!isFormValid)
        setIsButtonDisabledSubmit(!isFormValidSubmit)

        // Name check
        if (fullName.trim().length > 0 && !regFullName.test(fullName)) {
            setFullNameMessage("Please Enter Valid Name")
        } else {
            setFullNameMessage('')
        }

        // DOB check
        if (dob) {
            const dobDate = new Date(dob)
            const today = new Date()
            const ageInYears = Math.floor((today - dobDate) / (365.25 * 24 * 60 * 60 * 1000))
            setAge(ageInYears)
            setIsUnder18(ageInYears < 18)
            setIsOver60(ageInYears > 60)
        }

        // Email check
        if (regEmail.test(email)) {
            setEmailMessage("")
        } else if (!regEmail.test(email) && email !== "") {
            setEmailMessage("Please Enter Valid Email")
        } else {
            setEmailMessage("")
        }

        // Password check
        if (password.trim().length < 8 || password.trim().length > 15) {
            setPassChars(true)
        } else {
            setPassChars(false)
        }
        // 1 or more uppercase letters
        if ((/[A-Z]+/.test(password.trim()))) {
            setPassUpperChar(true)
        } else {
            setPassUpperChar(false)
        }
        // 1 or more lower case letters
        if ((/[a-z]/.test(password.trim()))) {
            setPassLowerChar(true)
        } else {
            setPassLowerChar(false)
        }
        // 1 or more numbers
        if ((/[0-9]+/.test(password.trim()))) {
            setPassNumber(true)
        } else {
            setPassNumber(false)
        }
        // Special character
        if ((/[!@#\$%\^&\*\)\(\?\|\.,\/+\-_]+/.test(password))) {
            setPassSpecialChars(true)
        } else {
            setPassSpecialChars(false)
        }


    }, [fullName, dob, password, regEmail, email, regFullName, regPassword, fullNameMessage, isOver60, isUnder18, emailMessage])

    return (
        <section className="form">
            {/* Steps container */}
            <div className="form-steps-progress-container grid grid-cols-2 mb-[50px] w-[80%] mx-auto lg:w-[100%]">
                <div className="form-step-left-container flex flex-col">
                    <div className="flex items-center">
                        <span className="form-step-icon"></span>
                        <h4 className="relative left-[14px] leading-[14px] text-[20px]">Step 1</h4>
                    </div>
                    <div className="w-full h-[2px] bg-[#29A643] relative top-[20px]"></div>
                </div>

                <div className="form-step-left-container flex flex-col">
                    <div className="flex items-center">
                        <span className="form-step-icon-2"></span>
                        <h4 className="relative left-[14px] leading-[14px] text-[20px]">Step 2</h4>
                    </div>
                    <div className="w-full h-[2px] bg-[grey] relative top-[20px]"></div>
                </div>
            </div>

            {/* Form */}
            <form className="" autoComplete="off">
                <div className="form-wrapper">
                    {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-[50px]"> */}
                    <div className={showFormTwo ? "hidden" : "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-[50px]"}>

                        <div className="w-[80%] mx-auto lg:w-[100%]">
                            <label htmlFor="fullName" className="block text-[14px] text-[#FFFFFF] leading-[16px] font-[700] my-[10px]">Full Name</label>
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="border-[2px] p-[10px] block w-full mb-[30px]" id="fullName" type="text" name="fullName" placeholder="Full Name" />
                            {fullNameMessage && <p className="error-message-text">{fullNameMessage}</p>}
                        </div>

                        <div className="w-[80%] mx-auto lg:w-[100%]">
                            <label htmlFor="dob" className="block text-[14px] text-[#FFFFFF] leading-[16px] font-[700] my-[10px]">Date Of Birth</label>
                            <input
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className="date-input p-[10px] w-full text-[#B1B1B1] mb-[30px]" id="dob" type="date" name="dob" placeholder="Date of Birth" />
                            {isUnder18 && <p className="error-message-text">Minimum age requirements, 18 years old</p>}
                            {isOver60 && <p className="error-message-text">Maximum age requirements, 60 years old</p>}
                        </div>
                    </div>

                    {/* <button
                        onClick={nextStep}
                        disabled={isButtonDisabled ? true : false}
                        className={showFormTwo ? "hidden" : "w-[80%] mx-auto block p-[20px] text-[#FFFFFF] text-[24px] text-center font-[700] mb-[30px] bg-[#CCCCCC] lg:w-[50%] lg:mx-auto"}>CONTINUE</button> */}

                    <button
                        onClick={nextStep}
                        disabled={isButtonDisabled}
                        className={`${showFormTwo ? 'hidden' : ''} ${isButtonDisabled ? 'bg-[grey]' : 'bg-[green]'} w-[80%] mx-auto block p-[20px] text-[#FFFFFF] text-[24px] text-center font-[700] mb-[30px] lg:w-[50%] lg:mx-auto`}>CONTINUE</button>


                    <div className={showFormTwo ? "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-[50px]" : "hidden"}>
                        <div className="w-[80%] mx-auto lg:w-[100%]">
                            <label htmlFor="email" className="block text-[14px] text-[#FFFFFF] leading-[16px] font-[700] my-[10px]">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-[10px] w-full mb-[30px]" id="email" type="email" name="email" placeholder="Email Address" />
                            {emailMessage && <p className="error-message-text">{emailMessage}</p>}
                        </div>
                        <div className="w-[80%] mx-auto lg:w-[100%]">
                            <label htmlFor="password" className="block text-[14px] text-[#FFFFFF] leading-[16px] font-[700] my-[10px]">Password</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-[10px] w-full mb-[30px]" id="password" name="password" type="password" placeholder="Password" />
                            <p className={passChars ? "success-message-text" : "error-message-text"}>8 - 15 characters</p>
                            <p className={passNumber ? "success-message-text" : "error-message-text"}>1 or more numbers</p>
                            <p className={passLowerChar ? "success-message-text" : "error-message-text"}>1 or more lower case letters</p>
                            <p className={passUpperChar ? "success-message-text" : "error-message-text"}>1 or more upper case letters</p>
                            <p className={passSpecialChars ? "success-message-text" : "error-message-text"}>1 or more special characters (#[]()@$&*!?|,.^/\+_-)</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={isButtonDisabledSubmit ? true : false}
                        className={showFormTwo ? "w-[80%] mx-auto block p-[20px] text-[#FFFFFF] text-[24px] text-center font-[700] mb-[30px] bg-[#29A643] lg:w-[50%] lg:mx-auto" : "hidden"}>REGISTER NOW</button>

                    {/* { isLoading ? <Loader /> : "" } */}
                    {/* {isLoading ? <Loader /> : <SuccessFormMessage />} */}

                    {isLoading ? (<Loader />) : hasSubmitted ? (<SuccessFormMessage />) : ("")}
                </div>
            </form>

            <div className="form-accounts">
                <p className="text-center text-[14px] leading-[16px] font-[400] my-[50px] lg:text-[14px] lg:leading-[16px] lg:font-[700]">Don’t have an account? <a className="text-[#D51820]" href="https://www.xm.com/register/profile-account?lang=en" target="_blank" rel="noopener noreferrer">Create one here</a> and register for the event</p>
                <p className="text-center text-[12px] leading-[14px] font-[400] lg:text-[14px] lg:leading-[16px] lg:font-[700]">Terms and Conditions apply*. To read the full T&Cs, <a className="text-[#D51820]" href="https://www.xm.com/register/profile-account?lang=en" target="_blank" rel="noopener noreferrer">click here</a> </p>
            </div>
        </section>
    )
}

export default RegistrationForm