import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'
// import ReactPaginate from 'react-paginate';
// import * as RP from "react-paginate";
import ReactPaginate from "react-paginate/dist/react-paginate.js";

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const data = async () => {
    let response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
  }
  useEffect(function () {
    data()
  }, [index])
  const handlePageClick = (e) => {
    setIndex(e.selected + 1)
  }


// console.log(typeof ReactPaginate);
// console.log(ReactPaginate);

// console.log(RP);
// console.log(RP.default);

  let printData = <h2 className='font-semibold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h2>

  if (userData.length > 0) {
    printData = userData.map(function (elem, idx) {
      return <div key={idx}>
          <Card elem={elem}/>
      </div>
    })
  }
  
  return (
    <div>
      
    <div className='bg-black text-white h-screen overflow-auto'>
      <div className='flex flex-wrap gap-8 justify-items-start px-10 py-8 justify-between'>
        {printData}
      </div>
            <ReactPaginate
  previousLabel={"Previous"}
  nextLabel={"Next"}
  breakLabel={"..."}
  pageCount={10}
  marginPagesDisplayed={2}
  pageRangeDisplayed={5}
  onPageChange={handlePageClick}
  containerClassName="pagination"
  activeClassName="active"
/>
    </div>
    </div>
    
  )
}

export default App
