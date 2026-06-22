import React, { useState } from 'react'


const App = () => {

  const [tittle, setTittle] = useState("")
  const [details, setDetails] = useState("")
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("checked");
    const copyTask = [...task]
    copyTask.push({ tittle, details })
    setTask(copyTask)

    // console.log(task);

    setTittle('')
    setDetails('')
  }
  const deleteHandler = (idx) => {
    console.log(idx);
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }


  return (
    <div className=' bg-black h-screen w-full text-white flex flex-wrap'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='w-full lg:w-1/2 flex flex-col gap-5 p-10'>
        <h1 className='text-center font-bold text-4xl p-2'>Add Your Notes</h1>
        <input
          className='border-2 outline-none h-12 m-2 px-4 py-6'
          type="text"
          placeholder='Enter the Heading'
          value={tittle}
          onChange={(e) => {
            setTittle(e.target.value)
          }}
        />
        <textarea
          className='border-2 outline-none h-22 m-2 px-4 py-6'
          placeholder="Enter description"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 m-2 border border-gray-400 rounded shadow">
          Button
        </button>
      </form>
      <div className='lg:w-1/2 w-full  h-full lg:border-l-2'>
        <h1 className='text-center font-bold text-4xl p-10'>Your Notes</h1>
        <div className="px-14 py-8 flex gap-10 flex-wrap justify-start ">
          {task.map((elem, idx) => (
            <div
              key={idx}
              className="text-black w-72 h-80 flex flex-col items-center justify-between p-6 bg-[url('https://static.vecteezy.com/system/resources/previews/022/354/042/non_2x/sticky-note-yellow-free-png.png')] bg-cover bg-center bg-no-repeat"
            >
              <div>
                <h1 className="text-center p-6 font-bold text-2xl">
                  {elem.tittle}
                </h1>
                <p className="text-center text-base leading-tight">
                  {elem.details}
                </p>
              </div>

              <button 
                onClick={() => {
                  deleteHandler(idx)    
                }}
                className="bg-red-500 rounded text-xl px-4 py-1 cursor-pointer">
                Delete
              </button>
            </div>
          ))}
        </div>
        {/* {task.map(function (elem, idx) {
          return <div key={idx} className=' px-14 py-8 flex gap-10 shrink-0 flex-wrap justify-start'>
            <div className="text-black w-72 h-80 flex flex-col  items-center justify-between p-6 bg-[url('https://static.vecteezy.com/system/resources/previews/022/354/042/non_2x/sticky-note-yellow-free-png.png')] bg-cover bg-center bg-no-repeat">
              <div>
                <h1 className='text-center  p-6 font-bold text-2xl'>{elem.tittle}</h1>
                <p className='text-center text-base leading-tight'>{elem.details}</p>
              </div>
              <button className='bg-red-500 rounded text-xl px-4 py-1 cursor-pointer'>Delete</button>
            </div>
          </div>
        })} */}


      </div>
    </div>
  )
}

export default App
