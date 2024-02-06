import { useSelector } from "react-redux";
import "./confirmation.css";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const userData = useSelector((state) => state.user);
  console.log(userData);

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
        {userData.users.map((data, id) => (
          <tbody key={id} className="tbody">
            <tr>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.email}</td>
              <span className="btn">
                <button className="edit">Edit</button>
                <button className="del">Delete</button>
              </span>
            </tr>
          </tbody>
        ))}
      </table>

      <button className="create" onClick={() => navigate("/")}>
        Create +
      </button>
    </div>
  );
};

export default Confirmation;
