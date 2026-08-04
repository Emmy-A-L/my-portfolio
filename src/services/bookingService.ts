import type { Booking } from "../data/Types";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";

const bookingsCollection = collection(db,"booking")

// CREATE a new booking
export const createBooking = async (bookingData: Booking) => {
  try {
    const docRef = await addDoc(bookingsCollection, {
      ...bookingData,
      createdAt: Timestamp.now(),
      status: "pending", // pending, confirmed, cancelled
    });
    return { id: docRef.id, ...bookingData };
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

// FETCH all bookings
export const getAllBookings = async () => {
  try {
    const q = query(bookingsCollection, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};

// FETCH a single booking by ID
export const getBookingById = async (bookingId: string) => {
  try {
    const docRef = doc(db, "bookings", bookingId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Booking not found");
    }
  } catch (error) {
    console.error("Error fetching booking:", error);
    throw error;
  }
};

// FETCH bookings by date (check availability)
export const getBookingsByDate = async (date: string) => {
  try {
    const q = query(bookingsCollection, where("date", "==", date));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching bookings by date:", error);
    throw error;
  }
};

// FETCH bookings by user email
export const getBookingsByEmail = async (email: string) => {
  try {
    const q = query(bookingsCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching bookings by email:", error);
    throw error;
  }
};

// UPDATE a booking
export const updateBooking = async (bookingId: string, updatedData: Booking) => {
  try {
    const docRef = doc(db, "bookings", bookingId);
    await updateDoc(docRef, {
      ...updatedData,
      updatedAt: Timestamp.now(),
    });
    return { id: bookingId, ...updatedData };
  } catch (error) {
    console.error("Error updating booking:", error);
    throw error;
  }
};

// UPDATE booking status
export const updateBookingStatus = async (bookingId: string, status: string) => {
  try {
    const docRef = doc(db, "bookings", bookingId);
    await updateDoc(docRef, {
      status,
      updatedAt: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error updating booking status:", error);
    throw error;
  }
};

// DELETE a booking
export const deleteBooking = async (bookingId: string) => {
  try {
    const docRef = doc(db, "bookings", bookingId);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting booking:", error);
    throw error;
  }
};