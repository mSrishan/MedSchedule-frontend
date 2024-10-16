import axios from "axios";

export default class ApiService {

    static BASE_URL = "http://localhost:8080";

    static getHeader() {
        const token = localStorage.getItem("token");
        return {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        };
    }

    /**AUTH */

    /* This registers a new user */
    static async registerUser(registration) {
        const response = await axios.post(`${this.BASE_URL}/auth/register`, registration);
        return response.data;
    }

    /* This logs in a registered user */
    static async loginUser(loginDetails) {
        const response = await axios.post(`${this.BASE_URL}/auth/login`, loginDetails);
        return response.data;
    }

    /***USERS */


    /* This is to get all users */
    static async getAllUsers() {
        const response = await axios.get(`${this.BASE_URL}/users/all`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    static async getUserProfile() {
        const response = await axios.get(`${this.BASE_URL}/users/get-logged-in-profile-info`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    /* This is to get a single user by ID */
    static async getUser(userId) {
        const response = await axios.get(`${this.BASE_URL}/users/get-by-id/${userId}`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    /* This is to get user appointments by the user ID */
    static async getUserAppointments(userId) {
        const response = await axios.get(`${this.BASE_URL}/users/get-user-appointments/${userId}`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    /* This is to delete a user */
    static async deleteUser(userId) {
        const response = await axios.delete(`${this.BASE_URL}/users/delete/${userId}`, {
            headers: this.getHeader()
        });
        return response.data;
    }

    /**DOCTOR */
    /* This adds a new doctor to the database */
    static async addDoctor(formData) {
        const result = await axios.post(`${this.BASE_URL}/doctors/add`, formData, {
            headers: {
                ...this.getHeader(),
                'Content-Type': 'multipart/form-data'
            }
        });
        return result.data;
    }

    /* This gets all available doctors */
    static async getAllAvailableDoctors() {
        const result = await axios.get(`${this.BASE_URL}/doctors/all-available-doctors`);
        return result.data;
    }

    /* This gets available doctors by date and specialization */
    static async getAvailableDoctorsByDateAndSpecialization(checkInDate, checkOutDate, specialization) {
        const result = await axios.get(
            `${this.BASE_URL}/doctors/available-doctors-by-date-and-specialization?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&specialization=${specialization}`
        );
        return result.data;
    }

    /* This gets all specializations from the database */
    static async getDoctorSpecializations() {
        const response = await axios.get(`${this.BASE_URL}/doctors/specializations`);
        return response.data;
    }

    /* This gets all doctors from the database */
    static async getAllDoctors() {
        const result = await axios.get(`${this.BASE_URL}/doctors/all`);
        return result.data;
    }

    /* This gets a doctor by their ID */
    static async getDoctorById(doctorId) {
        const result = await axios.get(`${this.BASE_URL}/doctors/doctor-by-id/${doctorId}`);
        return result.data;
    }

    /* This deletes a doctor by their ID */
    static async deleteDoctor(doctorId) {
        const result = await axios.delete(`${this.BASE_URL}/doctors/delete/${doctorId}`, {
            headers: this.getHeader()
        });
        return result.data;
    }

    /* This updates a doctor's information */
    static async updateDoctor(doctorId, formData) {
        const result = await axios.put(`${this.BASE_URL}/doctors/update/${doctorId}`, formData, {
            headers: {
                ...this.getHeader(),
                'Content-Type': 'multipart/form-data'
            }
        });
        return result.data;
    }

    /**APPOINTMENT */
    /* This saves a new appointment to the database */
    static async bookAppointment(doctorId, userId, appointment) {
        const response = await axios.post(`${this.BASE_URL}/appointments/book-appointment/${doctorId}/${userId}`, appointment, {
            headers: this.getHeader()
        });
        return response.data;
    }

    /* This gets all appointments from the database */
    static async getAllAppointments() {
        const result = await axios.get(`${this.BASE_URL}/appointments/all`, {
            headers: this.getHeader()
        });
        return result.data;
    }

    /* This gets an appointment by confirmation code */
    static async getAppointmentByConfirmationCode(appointmentCode) {
        const result = await axios.get(`${this.BASE_URL}/appointments/get-by-confirmation-code/${appointmentCode}`);
        return result.data;
    }

    /* This cancels a user appointment */
    static async cancelAppointment(appointmentId) {
        const result = await axios.delete(`${this.BASE_URL}/appointments/cancel/${appointmentId}`, {
            headers: this.getHeader()
        });
        return result.data;
    }

    /**AUTHENTICATION CHECKER */
    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    }

    static isAuthenticated() {
        const token = localStorage.getItem('token');
        return !!token;
    }

    static isAdmin() {
        const role = localStorage.getItem('role');
        return role === 'ADMIN';
    }

    static isUser() {
        const role = localStorage.getItem('role');
        return role === 'USER';
    }
}
