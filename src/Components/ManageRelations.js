import React, { useState, useEffect } from "react";

const ManageRelations = () => {
  const [user, setUser] = useState(["user"]);
  const [relations, setRelations] = useState(["Friend"]);
  const [p1, setP1] = useState("No");
  const [p2, setP2] = useState("No");
  const [r, setR] = useState("No");
  const [responce, setResponce] = useState("");

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setUser(dataFromServer.users);
      setRelations(dataFromServer.relationType);
      setP1(dataFromServer.users[0]);
      setP2(dataFromServer.users[0]);
      setR(dataFromServer.relationType[0]);
    };
    getData();
  }, []);

  //fetching tasks
  const fetchData = async () => {
    const res = await fetch("https://relation-tracker.glitch.me/users/");
    const data = await res.json();
    return data;
  };

  const submit = (e) => {
    e.preventDefault();
    const addRelation = async (send) => {
      const res = await fetch(
        "https://relation-tracker.glitch.me/addrelation/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(send),
        }
      );
      const data = await res.json();
      console.log(data);
      setResponce(data);
    };
    addRelation({ p1, p2, r });
  };
  return (
    <div>
      <h1>Manage Relations Here 🙌 </h1>
      <form className="add-form" method="POST" onSubmit={submit}>
        <div className="form-control selectinput">
          <label>
            Person 1 :
            <select value={p1} onChange={(e) => setP1(e.currentTarget.value)}>
              {user.map((user) => (
                <option value={user}>{user}</option>
              ))}
            </select>
          </label>
          <label>
            Relation:
            <select value={r} onChange={(e) => setR(e.currentTarget.value)}>
              {relations.map((relation) => (
                <option value={relation}>{relation}</option>
              ))}
            </select>
          </label>
          <label>
            Person 2 :
            <select value={p2} onChange={(e) => setP2(e.currentTarget.value)}>
              {user.map((user) => (
                <option value={user}>{user}</option>
              ))}
            </select>
          </label>
        </div>
        <input type="submit" value="Add Relation" className="btn btn-block" />
      </form>
      {responce && (
        <h3>
          {" "}
          {JSON.stringify(responce.msg)} : {JSON.stringify(responce.relation)}
        </h3>
      )}
    </div>
  );
};
export default ManageRelations;
