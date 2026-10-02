import axios from "axios";
import { useState } from "react";

const App = () => {
  // const getData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   const dataa = await response.json();
  //   console.log(dataa);
  // }

  const [arr, setArr] = useState([]);

  const getImages = async () => {
    // const response = await axios.get("https://picsum.photos/v2/list");
    const response = await axios.get("https://picsum.photos/v2/list?page=3&limit=30");
    const dataa = await response.data;
    setArr(dataa);
    console.log(dataa)
  }

  return (
    <div className="bg-blue-400 w-full">
      <div className="w-full flex justify-center items-start">
        {/* <button onClick={() => getData()} className="mr-5 mt-5 px-4 py-2 bg-red-500 text-white rounded-md active:scale-95">Get Data</button> */}
        <button onClick={() => getImages()} className="mt-5 px-4 py-2 bg-red-500 text-white rounded-md active:scale-95">Get Images</button>
      </div>
      <div className="w-full flex flex-wrap p-5 gap-5 justify-center">
        {
          arr.map((elem, idx) => {
            return <div key={idx} className="border-2 p-5">
              <div className="w-40 h-40">
                <img src={elem.download_url} alt="photo"
                  className="w-full h-full object-cover" />
              </div>
              <h2 className="text-center text-lg font-semibold"> {elem.author} </h2>
            </div>
          })
        }

      </div>

    </div>
  )
}

export default App