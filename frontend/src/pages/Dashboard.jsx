import { useEffect, useState } from "react";

const Dashboard = () => {
  const [appointmentList, setAppointmentList] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/appointments")
      .then((response) => response.json())
      .then((data) => setAppointmentList(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex justify-center min-h-screen pb-18">
      <div className="container max-w-7xl w-full backdrop-blur-md drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] rounded-md rounded-xl px-4 sm:px-8">
        <main>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div class="flex items-center justify-center">
              <div class="mx-auto w-full bg-white">
                <div class="text-2xl font-bold mt-6 mb-6 text-[#022366]">
                  Appointments Summary
                </div>
                <div class="mb-10">
                  <label
                    for="email"
                    class="mb-2 block text-base font-medium text-[#07074D]"
                  >
                    Select Clinic
                  </label>
                  <select
                    name="enquiry_type"
                    id="enquiry_type"
                    class="w-md rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option class="font-semibold" value=""></option>
                    <option class="font-semibold" selected value="Clinic 1">
                      Clinic 1
                    </option>
                    <option class="font-semibold" value="Clinic 2">
                      Clinic 2
                    </option>
                    <option class="font-semibold" value="Clinic 3">
                      Clinic 3
                    </option>
                  </select>
                </div>
                {appointmentList && (
                  <div class="mb-5">
                    <label class="mb-5 block text-base font-semibold text-[#07074D]">
                      Appointment Details
                    </label>
                    <table class="table-fixed border-none text-sm">
                      <thead class="text-[#07074D]">
                        <tr class="bg-blue-50">
                          <th class="text-left">
                            <span class="text-sm font-bold">Name</span>
                          </th>
                          <th class="text-left">
                            <span class="text-sm font-bold">Mobile</span>
                          </th>
                          <th class="text-left">
                            <span class="text-sm font-bold">Email</span>
                          </th>
                          <th class="text-left">
                            <span class="text-sm font-bold">Enquiry Type</span>
                          </th>
                          <th>
                            <span class="text-sm font-bold">
                              Appointment Date
                            </span>
                          </th>
                          <th>
                            <span class="text-sm font-bold">
                              Appointment Time
                            </span>
                          </th>
                          <th>
                            <span class="text-sm font-bold">Status</span>
                          </th>
                          <th>
                            <span class="text-sm font-bold">Action</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointmentList.map((appointment) => (
                          <tr class="even:bg-blue-50 odd:bg-white h-28">
                            <td class="align-center">{appointment.name}</td>
                            <td class="align-center">{appointment.mobile}</td>
                            <td class="align-center">{appointment.email}</td>
                            <td class="align-center">
                              {appointment.enquiry_type}
                            </td>
                            <td class="align-center text-center">
                              {appointment.appointment_date}
                            </td>
                            <td class="align-center text-center">
                              {appointment.appointment_time}
                            </td>
                            <td class="align-center text-center">
                              {(() => {
                                if (appointment.status === "Pending") {
                                  return <span>Pending Verification</span>;
                                } else {
                                  return <span>{appointment.status}</span>;
                                }
                              })()}
                            </td>
                            <td class="align-center text-center">
                              {(() => {
                                if (appointment.status === "Pending") {
                                  return (
                                    <div class="grid h-auto grid-cols-1 content-center gap-2 ">
                                      <button class="button__action text-white font-bold rounded">
                                        Confirm
                                      </button>
                                      <button class="button__action text-white font-bold rounded">
                                        Reject
                                      </button>
                                    </div>
                                  );
                                }
                              })()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
