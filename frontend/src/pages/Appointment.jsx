import React, { useState } from "react";
import { useEffect } from "react";
import moment from "moment";

function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    enquiry_type: "",
    appointment_date: "",
    appointment_time: "",
  });

  const [appointmentSlots, setAppointmentSlots] = useState();
  const [hasValidationError, setHasValidationError] = useState();
  const [appointmentConfirmed, setAppointmentConfirmed] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAppointmentChange = (event) => {
    const { id } = event.target;
    setFormData({
      ...formData,
      ["appointment_date"]: moment(id, "YYYYMMDDHHmm").format("DD-MM-YYYY"),
      ["appointment_time"]: moment(id, "YYYYMMDDHHmm").format("hh:mm A"),
    });
    setHasValidationError(false);
    setAppointmentConfirmed(false);
  };

  const saveAppointment = async (e) => {
    e.preventDefault();
    console.log("saveAppointment : ", formData);
    if (
      formData.appointment_date === null ||
      formData.appointment_date === ""
    ) {
      setHasValidationError(true);
      return;
    } else {
      setHasValidationError(false);
    }
    try {
      const res = await fetch("http://localhost:3000/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("saveAppointment : ", res);
      if (res.ok) {
        console.log("saveAppointment : ", data);
        setAppointmentConfirmed(true);
      }
    } catch (err) {
      console.log("saveAppointment : err : ", err);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3000/slot/slot1")
      .then((response) => response.json())
      .then((data) => setAppointmentSlots(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex justify-center min-h-screen pb-18">
      <div className="container max-w-5xl w-full backdrop-blur-md drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] rounded-md rounded-xl px-4 sm:px-8">
        <main>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div class="flex items-center justify-center">
              <div class="mx-auto w-full bg-white">
                <div class="text-2xl font-bold mt-6 mb-6 text-[#022366]">
                  Make an Appointment
                </div>
                <form onSubmit={saveAppointment}>
                  <div class="mb-5">
                    <label
                      for="name"
                      class="mb-2 block text-base font-medium text-[#07074D]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="phone"
                      class="mb-2 block text-base font-medium text-[#07074D]"
                    >
                      Mobile
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      required
                      placeholder="Enter your mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="email"
                      class="mb-2 block text-base font-medium text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                  <div class="mb-5">
                    <label
                      for="email"
                      class="mb-2 block text-base font-medium text-[#07074D]"
                    >
                      Appointment Enquiry
                    </label>
                    <select
                      name="enquiry_type"
                      id="enquiry_type"
                      required
                      value={formData.enquiry_type}
                      onChange={handleChange}
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option class="font-semibold" value=""></option>
                      <option class="font-semibold" value="Free Consultation">
                        Free Consultation
                      </option>
                      <option class="font-semibold" value="General Dentistry">
                        General Dentistry
                      </option>
                      <option class="font-semibold" value="Cosmetic Dentistry">
                        Cosmetic Dentistry
                      </option>
                    </select>
                  </div>

                  {appointmentSlots && (
                    <div class="mb-5">
                      <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                        Select Appointment Timeslot
                      </label>
                      {hasValidationError && (
                        <div
                          class="mb-2 text-center text-sm text-red-800 rounded-lg"
                          role="alert"
                        >
                          Please select any appointment timeslot
                        </div>
                      )}
                      {appointmentConfirmed && (
                        <div class="px-3 mb-2">
                          <div
                            class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-sm"
                            role="alert"
                          >
                            <div class="block mb-2">
                              Your appoinment booked on{" "}
                              <strong class="font-bold mr-1">
                                {formData.appointment_date}{" "}
                                {formData.appointment_time}.
                              </strong>{" "}
                              We will contact you for confirmation.
                            </div>
                          </div>
                        </div>
                      )}
                      <table class="table-fixed border-none">
                        <thead>
                          <tr>
                            {appointmentSlots.map((appointmentSlot) => (
                              <th>
                                <label class="flex flex-col rounded-lg border border-gray-300 p-4">
                                  <span class="text-xs font-semibold uppercase">
                                    {appointmentSlot.label}
                                  </span>
                                  <span class="text-sm font-bold">
                                    {appointmentSlot.day}
                                  </span>
                                  <span class="mt-1 text-xs font-semibold uppercase">
                                    {appointmentSlot.date}
                                  </span>
                                </label>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {appointmentSlots.map((appointmentSlot) => (
                              <td class="align-top">
                                <div class="mx-auto bg-white flex flex-col gap-3 rounded-md">
                                  {appointmentSlot.slots.map((slot) => (
                                    <label
                                      for={slot.id}
                                      name="status"
                                      class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                                    >
                                      {slot.value}
                                      <input
                                        type="radio"
                                        name="status"
                                        class="w-4 h-4 absolute accent-blue-500 right-3 appearance-none"
                                        id={slot.id}
                                        value={slot.value}
                                        onChange={handleAppointmentChange}
                                      />
                                    </label>
                                  ))}
                                </div>
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div class="mb-5">
                    <button
                      type="submit"
                      class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      Book Appointment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppointmentPage;
