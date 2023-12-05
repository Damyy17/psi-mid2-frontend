import { useState, useEffect } from "react";
import '../assets/styles/apointments.scss'
import api from "../api/axios";

function Appointments() {
    const [appointments, setAppointments] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await api.get(`/Appointments/future/${id}`);
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProfileData();
    }, [])

    console.log(appointments);

    const staticAppointments = [
        {
            date: "12.06.2012",
            location: "Spitalul Nr. 1, Criuleni",
            doctor: "Dr. Grigore Munteanu",
            startTime: "11:30 am",
            endTime: "12:30 pm",
            description: "Lorem ipsum lorem ipsum"
        },
        {
            date: "15.06.2012",
            location: "Spitalul Nr. 2, Chisinau",
            doctor: "Dr. Ana Popescu",
            startTime: "2:00 pm",
            endTime: "3:00 pm",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            date: "20.06.2012",
            location: "Spitalul Nr. 3, Balti",
            doctor: "Dr. Ion Ionescu",
            startTime: "9:00 am",
            endTime: "10:00 am",
            description: "Consectetur adipiscing elit"
        }
    ];

    return (
        <>
            <div className="container-apointments">
                <div className="title-section">
                    <p>Appointments</p>
                </div >
                <div className="appointments-list">
                    <p>Upcoming appointments</p>
                    {/* Map through the appointments and render each appointment */}
                    {staticAppointments.map((appointment, index) => (
                        <div key={index} className="appointment-element">
                            <div className="appointment-fields">
                                <span>{appointment.date}</span>
                                <span>{appointment.location}</span>
                                <span>{appointment.doctor}</span>
                                <span>{appointment.startTime}</span>
                                <span>{appointment.endTime}</span>
                                <span>{appointment.description}</span>
                            </div>
                            <button className="cancel-button">
                                Cancel Appointment
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Appointments;