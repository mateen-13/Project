import { useSelector } from "react-redux";
import "./confirmation.css";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const userData = useSelector((state) => state.user);

  const navigate = useNavigate();
  // const dispatch = useDispath();
  const gotoback = (e) => {
    e.preventDefault();
    navigate("./Form");
  };
  const deleteItem = (e) => {
    e.preventDefault();
    return {};
  };
  return (
    // <div id="container">
    //   <div id="list">
    // <span id="l1" class="li">
    //   <span className="place">Name:</span>
    //   {userData.name}
    // </span>

    // <span id="l2" class="li">
    //   <span className="place">Age:</span> {userData.age}
    // </span>

    // <span id="l3" class="li">
    //   <span className="place">Email:</span> {userData.email}
    // </span>
    //   </div>
    // </div>

    ////////NEW

    <div className="container">
      <h2 class="h">List Of Users</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userData.name}</td>
            <td>{userData.age}</td>
            <td>{userData.email}</td>
            <td>
              <span>
                <button class="edit" onClick={gotoback}>
                  Edit
                </button>
              </span>
              <span>
                <button class="del" onClick={deleteItem}>
                  Delete
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn">Create +</button>
    </div>
  );
};

export default Confirmation;
