import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [data, setData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [completedData, setCompletedData] = useState([]);
  const [restData, setRest] = useState([]);
  const handlSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.Name.value;
    const status = form.status.value;
    let priority;
    if (status === "Active") {
      priority = 1;
    } else if (status === "Completed") {
      priority = 2;
    } else {
      priority = 3;
    }
    const formData = {
      name,
      status,
      priority,
    };

    setData([formData, ...data]);
    console.log(data);
    if (data.length > 1) {
      data.sort((a, b) => a.priority - b.priority);
    }
    console.log(data);
    //setData([...data]);
  };

  const handleClick = (val) => {
    setShow(val);
    if (val === "active") {
      getActive();
    } else if (val === "completed") {
      getCompleted();
    }
  };
  const filter = (setter, query) => {
    const filterData = data.filter((dat) => dat.status === query);
    setter(filterData);
  };
  const getActive = () => {
    filter(setActiveData, "Active");
  };

  const getCompleted = () => {
    filter(setCompletedData, "Completed");
  };

  const getAll = () => {
    filter(setActiveData, "Active");
    filter(setCompletedData, "Completed");
    setRest(
      data.filter(
        (dat) => dat.status !== "Active" && dat.status !== "Completed"
      )
    );
    setData([...activeData, ...completedData, ...restData]);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            className="row gy-2 gx-3 align-items-center mb-4"
            onSubmit={handlSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                name="Name"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                name="status"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {show === "all" &&
                data.map((dat, index) => {
                  return (
                    <tr key={index}>
                      <td>{dat.name}</td>
                      <td>{dat.status}</td>
                    </tr>
                  );
                })}
              {show === "active" &&
                activeData.map((dat, index) => {
                  return (
                    <tr key={index}>
                      <td>{dat.name}</td>
                      <td>{dat.status}</td>
                    </tr>
                  );
                })}
              {show === "completed" &&
                completedData.map((dat, index) => {
                  return (
                    <tr key={index}>
                      <td>{dat.name}</td>
                      <td>{dat.status}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
