import {useState} from "react";
import "../assets/styles/login.scss"
function Login() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    // const navigate = useNavigate();


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // const response = await loginUser(name, surname);
    //         // const user = response.data; 
    //         localStorage.setItem("user", JSON.stringify(user));
    //         navigate("/home");
    //     } catch (error) {
    //         console.log(error.response);
    //     }
    //   };

    //   const loginUser = async (name, surname) => {
    //         const response = await api.post(
    //             "/users",
    //             {
    //                 data: {
    //                     name: name,
    //                     surname: surname,
    //                 },
    //             },
    //             {
    //                 headers: {
    //                     "X-Access-Token": token,
    //                 },
    //             }
    //         );
    //         return response;
    //   };

    return (
        <>
            <div className="login-container">
                <div className="login-container-information">
                    <p className="title">
                        Sign Up
                    </p>
                    <form >
                        <label>
                            IDNP
                            <br />
                            <input
                                placeholder="Place your IDNP here"
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>

                        <br />

                        <label>
                            Password
                            <br />
                            <input
                                placeholder="Place your password here"
                                type="name"
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
                            />
                        </label>

                        <br />

                        <button type='submit' className="login-button">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login