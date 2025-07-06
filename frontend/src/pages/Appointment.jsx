function AppointmentPage() {
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
                <form>
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
                      name="phone"
                      id="phone"
                      placeholder="Enter your mobile"
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
                    <select name="select" id="select" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                      <option class="font-semibold"></option>
                      <option class="font-semibold">Free Consultation</option>
                      <option class="font-semibold">General Dentistry</option>
                      <option class="font-semibold">Cosmetic Dentistry</option>
                      <option class="font-semibold"></option>
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
                    <button class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
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
