import {useState, useEffect} from "react";
import "../assets/styles/profile.scss"
import api from '../api/axios'

function Profile() {

    const [profileDetails, SetProfileDetails] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get('/account/info');
                SetProfileDetails(response.data)
            } catch (error) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        }

        fetchProfile();
    }, [])

    console.log(profileDetails);

    return (
        <>
            <div className="container-profile">
                <div className="title-section">
                    <p>Profile</p>
                </div >

                <div className="profile-details">
                    <p>Profile Details</p>
                    <div className="profile-details-section">
                        <div className="fields">
                            <span>Name</span>
                            <span>Surname</span>
                            <span>IDNP</span>
                            <span>Date of Birth</span>
                            <span>Password</span>
                        </div>
                        <div className="fields-values"> 
                            <span>PatientName</span>
                            <span>PatientSurname</span>
                            <span>PatientIDNP</span>
                            <span>01.01.2012</span>
                            <span>*******</span>
                        </div>  
                    </div>  
                </div >

                <div className="apointment-history">
                    <p>Apointment History</p>
                    <div className="apointment-history-section">
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Hospital</th>
                                <th>Doctor</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>12.06.2012</td>
                                <td>Spitalul Nr. 1, Criuleni</td>
                                <td>Dr. Grigore Munteanu</td>
                                <td>11.30 am</td>
                                <td>12.30 pm</td>
                                <td>Ipsum lorem lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>12.06.2012</td>
                                <td>Spitalul Nr. 1, Criuleni</td>
                                <td>Dr. Grigore Munteanu</td>
                                <td>11.30 am</td>
                                <td>12.30 pm</td>
                                <td>Ipsum lorem lorem ipsum</td>
                            </tr>
                        </table>
                    </div >
                </div>
            </div>
        </>
    )
}

export default Profile;