import { useSelector } from "react-redux";
import "./confirmation.css";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userSliceActions } from "../../redux/userSlice";

const Confirmation = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const navigate = useNavigate();

  function deleteItem() {
    dispatch(userSliceActions.deleteUser(this));
  }

  return (
    <div className="container">
      <h2 className="h">List Of Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>

            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        {userData.users.map((data, id) => (
          <tbody key={id} className="tbody">
            <tr>
              <td>{data.name}</td>

              <td>{data.email}</td>
              <span className="btn">
                <NavLink to="/edit" state={data}>
                  Edit
                </NavLink>
                <button className="del" onClick={deleteItem.bind(data.email)}>
                  Delete
                </button>
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
