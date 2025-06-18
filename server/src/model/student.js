import mongoose, { Schema } from "mongoose";

// --- Student Blueprint ---
const studentSchema = new Schema({
    // Student's full name (e.g., "Alice Smith")
    fullName: { type: String, required: true },
    // Their unique student ID (e.g., "STU12345")
    studentId: { type: String, required: true, unique: true },
    // Their email (e.g., "alice.s@school.edu")
    email: { type: String, required: true, unique: true },
    // When they were born
    dateOfBirth: { type: Date, required: true },
    // Their gender (e.g., "Female", "Male", "Other")
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    // Their current status (e.g., "active", "graduated")
    status: { type: String, enum: ['active', 'inactive', 'graduated'], default: 'active' }
});

export const Student = mongoose.model('Student', studentSchema);