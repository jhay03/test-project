import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import roomsApi from "../api/roomsApi";
import roomsColumns from "./const";

const RoomsList = () => {
  const [data, setData] = useState([]);
  const columns = roomsColumns();
  const [sortedField, setSortedField] = useState(null);

  useEffect(() => {
    setData(roomsApi);
  }, []);

  const handleClickRoomNo = () => {
    alert("123");
  };

  return (
    <Fragment>
      <div className="col-md-12">
        <h3>Manual Table w/o special function like sorting</h3>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <span className="primary" onClick={handleClickRoomNo}>
                Room No
              </span>
            </th>
            <th scope="col">Room Name</th>
            <th scope="col">Room Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((room, key) => {
            return (
              <tr key={room.room_id}>
                <td>{room.room_id}</td>
                <td>{room.name}</td>
                <td>{room.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="col-md-12">
        <h3>With Package ( sorting etc )</h3>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        autoHeight
      />
    </Fragment>
  );
};

export default RoomsList;
