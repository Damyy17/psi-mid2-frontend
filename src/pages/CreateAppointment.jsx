import { useState, useEffect } from "react";
import '../assets/styles/apointmentcreation.scss';
import api from "../api/axios";

function CreateAppointment() {

    // const [selectedMonth, setSelectedMonth] = useState(0); // Initial value is January (0-based index)
    // const [selectedDay, setSelectedDay] = useState(0); // Initial value is Sunday (0-based index)
    // const [daysInMonth, setDaysInMonth] = useState(31); // Initial value (this will be updated based on the selected month)
    const [appointmentDescription, setAppointmentDescription] = useState('');


    // // Static data for months
    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // // Function to handle month selection
    // const handleMonthChange = (event) => {
    //     const monthIndex = parseInt(event.target.value, 10);
    //     setSelectedMonth(monthIndex);

    //     // Update the number of days in the selected month
    //     const daysInSelectedMonth = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
    //     setDaysInMonth(daysInSelectedMonth);

    //     // Adjust the selected day if it exceeds the number of days in the selected month
    //     if (selectedDay >= daysInSelectedMonth) {
    //         setSelectedDay(daysInSelectedMonth - 1);
    //     }
    // };

    // Function to handle day selection
    // const handleDayChange = (event) => {
    //     setSelectedDay(parseInt(event.target.value, 10));
    // };

    // Function to handle description input and auto-resize
    const handleDescriptionChange = (event) => {
        setAppointmentDescription(event.target.value);
        autoResizeTextarea(event.target);
    };

    // Function to auto-resize the textarea
    const autoResizeTextarea = (element) => {
        element.style.height = "auto";
        element.style.height = (element.scrollHeight) + "px";
    };


    // const staticSpecialties = ['Endocrinolog', 'Neurolog', 'Cardiologist', 'Surgeon'];
    // const staticDoctors = [
    //     {
    //         name: "John",
    //         surname: "Doe",
    //         specialty: "Endocrinologist"
    //     },
    //     {
    //         name: "Jane",
    //         surname: "Smith",
    //         specialty: "Neurologist"
    //     },
    //     {
    //         name: "Robert",
    //         surname: "Johnson",
    //         specialty: "Cardiologist"
    //     },
    //     {
    //         name: "Emily",
    //         surname: "Williams",
    //         specialty: "Surgeon"
    //     },
    // ];

    // const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    // const [selectedDoctor, setSelectedDoctor] = useState(null);
    // const [filteredDoctors, setFilteredDoctors] = useState([]);

    // Update filtered doctors when the selected specialty changes
    // useEffect(() => {
    //     if (selectedSpecialty) {
    //         const doctorsFilteredBySpecialty = staticDoctors.filter(doctor => doctor.specialty === selectedSpecialty);
    //         setFilteredDoctors(doctorsFilteredBySpecialty);
    //     } else {
    //         setFilteredDoctors(staticDoctors);
    //     }
    // }, [selectedSpecialty]);


    const [specialties, setSpecialties] = useState([]);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    useEffect(() => {
        const fetchSpecialties = async () => {
            try {
                const response = await api.get('/Specialities');
                setSpecialties(response.data)
            } catch (error) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
        }

        fetchSpecialties();
    }, [])

    // Update doctors when the selected specialty changes
    useEffect(() => {
        if (selectedSpecialty) {
            //fetch doctors dat based on specialty
            const fetchDoctors = async () => {
                try {
                    const response = await api.get(`/Specialities/${selectedSpecialty}/doctors`);
                    setDoctors(response.data)
                } catch (error) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            }
            fetchDoctors();
        } else {
            setDoctors([]);
        }
    }, [selectedSpecialty]);

     // Update timeslots when the selected doctor
    useEffect(() => {
        if(selectedDoctor) {
            //fetch the timeslots for the selected doctor
            const fetchTimeSlots = async () => {
                try {
                    const response = await api.get(`/TimeSlots/doctors/${selectedDoctor.doctorId}`);
                    setTimeSlots(response.data);   
                } catch (error) {
                    console.log(error.response);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            }
            fetchTimeSlots();
        } else {
            setTimeSlots([]);
        }
    }, [selectedDoctor])

    return (
        <>
            <div className="container-create-apointment">
                <div className="title-section">
                    <p>Create an appointment</p>
                </div>
                <div className="chose-specialty-container">
                    <div className="title-container-specialty">
                        Choose specialty
                    </div>
                    <div className="list-of-specialties">
                        {specialties.map((specialty, index) => (
                            <div
                                key={index}
                                className={`specialty-item ${selectedSpecialty === specialty ? 'active' : ''}`}
                                onClick={() => setSelectedSpecialty(specialty)}
                            >
                                {specialty.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chose-doctor-container">
                    <div className="title-container-doctor">
                        Choose doctor
                    </div>
                    <div className="list-of-doctors">
                        {doctors.map((doctor, index) => (
                            <div
                                key={index}
                                className={`doctor-card ${selectedDoctor && selectedDoctor.doctorId === doctor.doctorId ? 'active' : ''}`}
                                onClick={() => setSelectedDoctor(doctor)}
                            >
                                <div className="profile-photo"></div>
                                <div className="name-surname">{doctor.name} {doctor.surname}</div>
                                <div className="specialty">{doctor.specialty}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chose-date-hour-appointment-container">
                    <div className="title-container-appointment">
                        Book an appointment
                    </div>
                    {/* <div className="choose-month-day">
                        <div className="month-choose">
                            <label>Select Month:</label>
                            <select value={selectedMonth} onChange={handleMonthChange}>
                                {months.map((month, index) => (
                                    <option key={index} value={index}>{month}</option>
                                ))}
                            </select>
                        </div>
                        <div className="day-choose">
                            <label>Select Day:</label>
                            <select value={selectedDay} onChange={handleDayChange}>
                                {[...Array(daysInMonth).keys()].map((day) => (
                                    <option key={day} value={day}>{day + 1}</option>
                                ))}
                            </select>
                        </div>

                        <div className="choose-hour">
                        </div>

                    </div> */}
                    <div className="time-slot-cards">
                        {timeSlots.map((slot) => (
                            <div key={slot.id} className="time-slot-card">
                            <div>{slot.date}</div>
                            <div>{slot.startTime} - {slot.endTime}</div>
                            <div>ID: {slot.id}</div>
                            </div>
                        ))}
                    </div>


                    <div className="description">
                        <textarea value={appointmentDescription}
                            onChange={handleDescriptionChange}
                            rows={1} 
                            ref={(textarea) => textarea && autoResizeTextarea(textarea)} 
                            placeholder="Description..">
                        </textarea>
                    </div>

                    {/* <div className="book-appointment">
                        <div className="book-button-data">
                            <div className="date">{selectedDay} {months[selectedMonth]}</div>
                            <div className="start-end-time">11:30 pm</div>
                        </div>
                        <button className="book-appointment">Book</button>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default CreateAppointment;
