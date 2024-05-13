class HealthcareSystem {
    constructor() {
        this.doctors = [];
        this.patients = [];
        this.appointments = [];
    }
    addDoctor(name, skills, availability) {
        this.doctors.push({ name, skills, availability });
    }
    addPatient(name, age, condition, preference) {
        this.patients.push({ name, age, condition, preference });
    }
    isDoctorAvailable(doctor, day) {
        return doctor.availability.includes(day);
    }
    scheduleAppointment(doctorIndex, patientIndex, day, time) {
        const doctor = this.doctors[doctorIndex];
        const patient = this.patients[patientIndex];
        if (!this.isDoctorAvailable(doctor, day)) {
            return `${doctor.name} is not available on ${day}.`;
        }
        this.appointments.push({ doctor, patient, day, time });
        this.sendReminder(doctor, patient, day, time);
        return "Appointment scheduled successfully!";
    }
    sendReminder(doctor, patient, day, time) {
        console.log(`Reminder: Your appointment with ${doctor.name} is scheduled for ${day} at ${time}.`);
    }
}
const system = new HealthcareSystem();
system.addDoctor('Dr. Smith', ['General Medicine'], ['Monday', 'Wednesday']);
system.addPatient('John Doe', 35, 'Fever', 'Monday');
console.log(system.scheduleAppointment(0, 0, 'Monday', '10:00 AM'));











