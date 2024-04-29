import React, {useState} from 'react'
import MainImage from "../../../../assets/mainImage.png";
import '../main.css'
import {Link, useNavigate} from "react-router-dom";
import Service from "../../../../repository/Service";

function MainRegister() {

    const history = useNavigate()
    const [formData, setFormData] = useState({
        fullName: '',
        instagramUsername: '',
        phone: '',
        email: '',
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        Service.registerUser(formData)
            .then(response => {
                console.log("User successfully registered: ", response)

                history("/login");
            })
            .catch(error => {
                console.error("Error: ", error);
            })

    }


    return (
        <div className="container-fluid position-relative"
             style={{paddingTop: "100px", paddingLeft: "0", paddingRight: "0"}}>
            <img
                src={MainImage}
                alt="Image"
                style={{
                    width: "100%",
                    height: "1200px",
                    objectFit: "cover"
                }}
            />

            <div className="popup-container popup-large">
                <div className="popup-content">
                    <h1 className="text-center pt-4" style={{fontWeight: "bold", fontSize: "50px"}}>Register</h1>

                    <div className="container-fluid d-flex justify-content-center align-items-center">
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                marginTop: "60px",
                                marginBottom: "100px"
                            }}
                        >
                            <div className="form-group">
                                <input type="text"
                                       className="form-control" id="exampleInputFullname"
                                       name="fullName"
                                       placeholder="Fullname"
                                       value={formData.fullName}
                                       onChange={handleChange}
                                       required
                                       style={{
                                           marginBottom: "40px",
                                           padding: "15px",
                                           width: "300px",
                                       }}
                                />
                            </div>
                            <div className="form-group">
                                <input type="text"
                                       className="form-control" id="exampleInputInstagram"
                                       name="instagramUsername"
                                       placeholder="Instagram Username"
                                       value={formData.instagramUsername}
                                       onChange={handleChange}
                                       style={{
                                           marginBottom: "40px",
                                           padding: "15px",
                                           width: "300px"
                                       }}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputPhone"
                                       placeholder="Phone number"
                                       name="phone"
                                       value={formData.phone}
                                       onChange={handleChange}
                                       style={{
                                           marginBottom: "40px",
                                           padding: "15px",
                                           width: "300px"
                                       }}
                                />
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail"
                                       placeholder="Email"
                                       name="email"
                                       value={formData.email}
                                       onChange={handleChange}
                                       required
                                       style={{
                                           marginBottom: "40px",
                                           padding: "15px",
                                           width: "300px"
                                       }}
                                />
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputPassword"
                                       placeholder="Username"
                                       name="username"
                                       value={formData.username}
                                       onChange={handleChange}
                                       required
                                       style={{
                                           marginBottom: "40px",
                                           padding: "15px",
                                           width: "300px"
                                       }}
                                />
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"
                                       name="password"
                                       value={formData.password}
                                       onChange={handleChange}
                                       style={{
                                           marginBottom: "40px",
                                           padding: "15px",
                                           width: "300px"
                                       }}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary d-block mx-auto"
                                    style={{
                                        backgroundColor: "#4064FF",
                                        width: "65%",
                                        padding: "10px",
                                        fontSize: "17px",
                                        transition: "transform 0.3s, color 0.3s, font-weight 0.3s, box-shadow 0.3s",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0)"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "scale(1.05)";
                                        e.target.style.color = "black";
                                        e.target.style.fontWeight = "bold";
                                        e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.6)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "scale(1)";
                                        e.target.style.color = "";
                                        e.target.style.fontWeight = "";
                                        e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0)";
                                    }}
                            >Register
                            </button>
                        </form>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h4 style={{
                            fontWeight: "bold",
                            fontSize: "35px"
                        }}>You already have one?</h4>

                        <Link to={"/login"} style={{textDecoration: "none", width: "100%", boxShadow: "none"}}>
                            <button type="submit" className="btn btn-primary d-block mx-auto"
                                    style={{
                                        backgroundColor: "#FF4040",
                                        width: "65%",
                                        padding: "10px",
                                        fontSize: "20px",
                                        transition: "transform 0.5s, color 0.3s, font-weight 0.3s, box-shadow 0.3s",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0)"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "scale(1.05)";
                                        e.target.style.color = "black";
                                        e.target.style.fontWeight = "bold";
                                        e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.6)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "scale(1)";
                                        e.target.style.color = "";
                                        e.target.style.fontWeight = "";
                                        e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0)";
                                    }}
                            >Login!
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainRegister;