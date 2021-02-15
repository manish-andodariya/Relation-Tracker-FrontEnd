import React, { useState, useEffect } from "react";

const TrackRelation = () => {
  const [user, setUser] = useState(["user"]);
  const [p1, setP1] = useState("No");
  const [p2, setP2] = useState("No");
  const [res, setRes] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setUser(dataFromServer.users);
      setP1(dataFromServer.users[0]);
      setP2(dataFromServer.users[0]);
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
    const checkRelation = async (send) => {
      const res = await fetch(
        "https://relation-tracker.glitch.me/trackrelation/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(send),
        }
      );
      const data = await res.json();
      setRes(data);
    };
    checkRelation({ p1, p2 });
  };
  return (
    <div>
      <h1>Track Relations Here 🙌 </h1>
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
            Person 2 :
            <select value={p2} onChange={(e) => setP2(e.currentTarget.value)}>
              {user.map((user) => (
                <option value={user}>{user}</option>
              ))}
            </select>
          </label>
        </div>
        <input type="submit" value="Check Relation" className="btn btn-block" />
      </form>
      {res.found != false && res.visitedArray
        ? res.visitedArray.map((link) =>
            res.visitedArray[res.visitedArray.length - 1] != link
              ? link + " => "
              : link
          )
        : "No Relation"}
    </div>
  );
};

export default TrackRelation;
