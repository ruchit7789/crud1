import { useEffect, useState } from "react";

function Teacher() {
  const [teachers, setTeachers] = useState([]);
  const [payload, setPayLoad] = useState({
    data: {
      name: "deepak",
    },
  });

  const [nameop, setNameop] = useState("");

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

  //////for update a api teacher/////

  let sendData = () => {
    fetch(`  http://localhost:1337/api/teachers  `, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          alert("teacher added ");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let changevalue = (e) => {
    console.log(e.target.value);
    setNameop(e.target.value);
    console.log(" HOOK name", nameop);
    setPayLoad({
      ...payload,
      data: {
        name: document.querySelector("input#teachername").value,
      },
    });
  };

  return (
    <div className="App">
      <>
        <div className="container">
          <form>
            <div className="mb-3">
              <label htmlFor="teachername" className="form-label">
                Teacher Name
              </label>
              <input
                type="text"
                className="form-control"
                id="teachername"
                name="name"
                onKeyUp={(e) => {
                  changevalue(e);
                }}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary  "
              onClick={() => {
                sendData();
              }}
            >
              click me
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
