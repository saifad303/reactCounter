import { useState } from "react";

function App() {
  const [values, setValues] = useState([0]);

  function incrementHandler(index) {
    console.log("Incrementing index. = ", index);

    const newValues = values.map((v, indx) => {
      if (indx === index) {
        return v + 1;
      }

      return v;
    });

    setValues(newValues);
  }
  function decrementHandler(index) {
    console.log("Incrementing index. = ", index);

    const newValues = values.map((v, indx) => {
      if (indx === index) {
        return v - 1;
      }

      return v;
    });

    setValues(newValues);
  }
  function moreCounterHandler() {
    console.log("more counter handler");
    setValues(values.concat(0));
  }

  return (
    <div className="w-[100%] text-center">
      <h1 className=" text-3xl mb-4">React Counters</h1>

      {/* counter card start */}
      {values.map((v, index) => {
        return (
          <div key={index} className="mb-10">
            <div className=" inline-block bg-slate-400 p-10">
              <p className=" text-3xl font-bold mb-10">{v}</p>
              <div className=" space-x-4">
                <button
                  className=" bg-indigo-400 p-4 rounded text-white text-xl"
                  onClick={() => incrementHandler(index)}
                >
                  Increment
                </button>
                <button
                  className=" bg-red-400 p-4 rounded text-white text-xl"
                  onClick={() => decrementHandler(index)}
                >
                  decrement
                </button>
              </div>
            </div>
            <br />
          </div>
        );
      })}

      {/* counter card end */}
      <button
        className=" bg-blue-400 p-4 rounded text-white text-xl mt-3"
        onClick={moreCounterHandler}
      >
        More Counter
      </button>
    </div>
  );
}

export default App;
