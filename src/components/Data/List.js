import React, { useEffect, useState } from "react";
import "./List.css";

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((data) => setList(data.data));
  }, []);

  return (
    <div className="list">
      <h2 className="list__title">Details</h2>
      <div className="list__cards">
        {list && list.length > 0 ? (
          list.map((item) => {
            return (
              <div className="cards">
                <img src={`https://reqres.in/img/faces/${item.id}-image.jpg`} />
                <div>
                  <div>Id: {item.id}</div>
                  
                  <div>
                    {`${item.first_name}
                      ${item.last_name}`}
                  </div>
                  <div>{item.email}</div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No data Found</h1>
        )}
      </div>
    </div>
  );
};

export default List;
