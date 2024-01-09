import { useEffect, useState } from "react";

function Teacher() {
  const [teachers, setTeachers] = useState([
    { id: 1, name: "ruchit", craatedAt: "123" },
    { id: 2, name: "sumil", craatedAt: "12rt3" },
  ]);

  useEffect(() => {
    fetch(` http://localhost:1337/api/teachers `)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let newdata = data.data.map((cv, idx, arr) => {
          return {
            id: cv.id,
            name: cv.attributes.name,
            createdAt: cv.attributes.createdAt,
          };
        });

        setTeachers(newdata);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <>
        <div className="container">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <br></br>
          <hr></hr>
          <hr></hr>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">createdAT</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((cv, idx, arr) => {
                return (
                  <tr>
                    <th>{cv.id}</th>
                    <td>{cv.name}</td>
                    <td>{cv.createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}

export default Teacher;
