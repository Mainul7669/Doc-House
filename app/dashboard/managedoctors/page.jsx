import "../../Styles/app.css";

const page = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-black mb-5">Manage Doctors: 09</h1>

      <div className="overflow-x-auto card">
        <table
          className="table table-xs table-pin-rows table-pin-cols bg-white text-[#898989] font-semibold
    lg:w-[850px]"
        >
          <thead>
            <tr className="bg-[#E6E6E6] text-black">
              <th></th>
              <td>Avatar</td>
              <td>Name</td>
              <td>SPECIALTY</td>
              <td>Action</td>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>01</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Cy Ganderton</td>
              <td>Cavity Protection</td>
              <td>
                <button
                  className="bg-[#E11244] py-2 px-4 rounded-md text-white font-semibold
         hover:bg-[#e95275]"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th>02</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Hart Hagerty</td>

              <td>Cavity Protection</td>
              <td>
                <button
                  className="bg-[#E11244] py-2 px-4 rounded-md text-white font-semibold
         hover:bg-[#e95275]"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th>03</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Brice Swyre</td>

              <td>Cavity Protection</td>
              <td>
                <button
                  className="bg-[#E11244] py-2 px-4 rounded-md text-white font-semibold
         hover:bg-[#e95275]"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th>04</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Marjy Ferencz</td>

              <td>Cavity Protection</td>
              <td>
                <button
                  className="bg-[#E11244] py-2 px-4 rounded-md text-white font-semibold
         hover:bg-[#e95275]"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th>05</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Yancy Tear</td>

              <td>Cavity Protection</td>
              <td>
                <button
                  className="bg-[#E11244] py-2 px-4 rounded-md text-white font-semibold
         hover:bg-[#e95275]"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th>06</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Irma Vasilik</td>

              <td>Cavity Protection</td>
              <td>
                <button
                  className="bg-[#E11244] py-2 px-4 rounded-md text-white font-semibold
         hover:bg-[#e95275]"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th>07</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Meghann Durtnal</td>

              <td>Cavity Protection</td>
              <td>
                <button
                  className="bg-[#E11244] py-2 px-4 rounded-md text-white font-semibold
         hover:bg-[#e95275]"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th>08</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Sammy Seston</td>

              <td>Cavity Protection</td>
              <td>
                <button
                  className="bg-[#E11244] py-2 px-4 rounded-md text-white font-semibold
         hover:bg-[#e95275]"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th>09</th>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://img.freepik.com/premium-photo/close-up-portrait-confident-indian-financial-expert-office-worker-sitting-table-formal-suit_769609-327.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Lesya Tinham</td>

              <td>Cavity Protection</td>
              <td>
                <button
                  className="bg-[#E11244] py-2 px-4 rounded-md text-white font-semibold
         hover:bg-[#e95275]"
                >
                  Delete
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
