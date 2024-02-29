function Todobody({ listNo, input, date, time, RemoveList}) {
  return (
    <>
      <center>
        <div className="container text-center ">
          <div className="row ">
            <div className=" col-4 m-2 p-3 bg-info bg-gradienttext-white" >
              <p>{input}</p>
            </div>
            <div className="col-2 p-3 m-2 bg-warning text-black">
              Date - {date}
            </div>
            <div className="col-2 p-3 m-2 bg-warning text-black">
              Time - {time}
            </div>
            <div onClick={()=>RemoveList(listNo)}
            className="col-2 p-3 m-2 btn btn-danger text-white">
              Remove
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default Todobody;