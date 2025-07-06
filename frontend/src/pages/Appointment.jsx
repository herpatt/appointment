import React, { useState } from "react";

function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    enquiry_type: "",
    appointment_date: "",
    appointment_time: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAppointmentChange = (event) => {
    const { value } = event.target;
    const appointment = value.split("_");
    setFormData({
      ...formData,
      ["appointment_date"]: appointment[0],
      ["appointment_time"]: appointment[1],
    });
  };

  const saveAppointment = async (e) => {
    console.log('saveAppointment : ', formData);
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log('saveAppointment : ', res);
      if (res.ok) {
        console.log('saveAppointment : ', data);
      }
    } catch (err) {
      console.log('saveAppointment : err : ', err);
    }
  };  

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

                <div class="mb-5">
                  <label class="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    Select Appointment Timeslot
                  </label>
                  <table class="table-fixed border-none">
                    <thead>
                      <tr>
                        <th>
                          <label class="flex flex-col rounded-lg border border-gray-300 p-4">
                            <span class="text-xs font-semibold uppercase">
                              Today
                            </span>
                            <span class="text-sm font-bold">Wednesday</span>
                            <span class="mt-1 text-xs font-semibold uppercase">
                              July 09
                            </span>
                          </label>
                        </th>
                        <th>
                          <label class="flex flex-col rounded-lg border border-gray-300 p-4">
                            <span class="text-xs font-semibold uppercase">
                              Tomorrow
                            </span>
                            <span class="text-sm font-bold">Thursday</span>
                            <span class="mt-1 text-xs font-semibold uppercase">
                              July 10
                            </span>
                          </label>
                        </th>
                        <th>
                          <label class="flex flex-col rounded-lg border border-gray-300 p-4">
                            <span class="text-xs font-semibold uppercase">
                              Next Week
                            </span>
                            <span class="text-sm font-bold">Tuesday</span>
                            <span class="mt-1 text-xs font-semibold uppercase">
                              July 15
                            </span>
                          </label>
                        </th>
                        <th>
                          <label class="flex flex-col rounded-lg border border-gray-300 p-4">
                            <span class="text-xs font-semibold uppercase">
                              Next Week
                            </span>
                            <span class="text-sm font-bold">Wednesday</span>
                            <span class="mt-1 text-xs font-semibold uppercase">
                              July 17
                            </span>
                          </label>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="align-top">
                          <div class="mx-auto bg-white flex flex-col gap-3 rounded-md">
                            <label
                              for="row_1_1"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              8:00 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-2 h-2 absolute accent-current right-3 appearance-none"
                                id="row_1_1"
                                value="20250709_0800"
                                onChange={handleAppointmentChange}
                              />
                            </label>
                            <label
                              for="row_1_2"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              8:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-current right-3 appearance-none"
                                id="row_1_2"
                                value="20250709_0830"
                                onChange={handleAppointmentChange}
                              />
                            </label>
                            <label
                              for="row_1_3"
                              name="status"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              9:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-blue-500 right-3 appearance-none"
                                id="row_1_3"
                                value="20250709_0930"
                                onChange={handleAppointmentChange}
                              />
                            </label>
                            <label
                              for="row_1_4"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              10:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-current right-3 appearance-none"
                                id="row_1_4"
                                value="20250709_1030"
                                onChange={handleAppointmentChange}
                              />
                            </label>
                            <label
                              for="row_1_5"
                              name="status"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              11:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-blue-500 right-3 appearance-none"
                                id="row_1_5"
                                value="20250709_1130"
                                onChange={handleAppointmentChange}
                              />
                            </label>
                          </div>
                        </td>
                        <td class="align-top">
                          <div class="mx-auto  bg-white flex flex-col gap-3 rounded-md">
                            <label
                              for="row_2_3"
                              name="status"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              9:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-blue-500 right-3 appearance-none"
                                id="row_2_3"
                              />
                            </label>
                            <label
                              for="row_2_4"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              10:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-current right-3 appearance-none"
                                id="row_2_4"
                              />
                            </label>
                            <label
                              for="row_2_5"
                              name="status"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              11:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-blue-500 right-3 appearance-none"
                                id="row_2_5"
                              />
                            </label>
                          </div>
                        </td>
                        <td class="align-top">
                          <div class="mx-auto  bg-white flex flex-col gap-3 rounded-md">
                            <label
                              for="row_3_1"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              8:00 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-2 h-2 absolute accent-current right-3 appearance-none"
                                id="row_3_1"
                              />
                            </label>
                            <label
                              for="row_3_2"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              8:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-current right-3 appearance-none"
                                id="row_3_2"
                              />
                            </label>
                            <label
                              for="row_3_3"
                              name="status"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              9:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-blue-500 right-3 appearance-none"
                                id="row_3_3"
                              />
                            </label>
                          </div>
                        </td>
                        <td class="align-top">
                          <div class="mx-auto  bg-white flex flex-col gap-3 rounded-md">
                            <label
                              for="row_4_4"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              10:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-current right-3 appearance-none"
                                id="row_4_4"
                              />
                            </label>
                            <label
                              for="row_4_5"
                              name="status"
                              class="h-14 text-sm font-bold border border-gray-300 relative hover:bg-zinc-100 flex justify-center cursor-pointer  items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
                            >
                              11:30 AM
                              <input
                                type="radio"
                                name="status"
                                class="w-4 h-4 absolute accent-blue-500 right-3 appearance-none"
                                id="row_4_5"
                              />
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="mb-5">
                  <button
                    onClick={saveAppointment}
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AppointmentPage;
