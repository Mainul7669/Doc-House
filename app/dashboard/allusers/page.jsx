import "../../Styles/app.css";

const page = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-black mb-5">All Users: 09</h1>

      <div className="overflow-x-auto card">
        <table
          className="table table-xs table-pin-rows table-pin-cols bg-white text-[#898989] font-semibold
    lg:w-[850px]"
        >
          <thead>
            <tr className="bg-[#E6E6E6] text-black">
              <th></th>
              <td>Name</td>
              <td>Admin</td>
              <td>Users</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>01</th>
              <td>Cy Ganderton</td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Remove User
                </button>
              </td>
            </tr>
            <tr>
              <th>02</th>
              <td>Hart Hagerty</td>
              <td>
                <button
                  className="bg-[#07332F] py-2 px-4  rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  className="bg-[#07332F] py-2 px-4  rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                 Remove User
                </button>
              </td>
            </tr>
            <tr>
              <th>03</th>
              <td>Brice Swyre</td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Remove User
                </button>
              </td>
            </tr>
            <tr>
              <th>04</th>
              <td>Marjy Ferencz</td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Remove User
                </button>
              </td>
            </tr>
            <tr>
              <th>05</th>
              <td>Yancy Tear</td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Remove User
                </button>
              </td>
            </tr>
            <tr>
              <th>06</th>
              <td>Irma Vasilik</td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Remove User
                </button>
              </td>
            </tr>
            <tr>
              <th>07</th>
              <td>Meghann Durtnal</td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Remove User
                </button>
              </td>
            </tr>
            <tr>
              <th>08</th>
              <td>Sammy Seston</td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Remove User
                </button>
              </td>
            </tr>
            <tr>
              <th>09</th>
              <td>Meghann Durtnal</td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button
                  className="bg-[#07332F] lg:py-2 lg:px-4 p-[7px] rounded-md text-white font-semibold
         hover:bg-[#184844]"
                >
                  Remove User
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
