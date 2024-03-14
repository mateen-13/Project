import { useSelector } from "react-redux";
import "./confirmation.css";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userSliceActions } from "../../redux/userSlice";
import axios from "axios";
import { useEffect } from "react";

const Confirmation = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      await axios({
        method: "GET",
        url: "http://localhost:5000/getAllUsers",
      }).then(
        (data) => {
          console.log(data);
        },
        () => {}
      );
    };
    fetchUsers();
  }, []);

  async function deleteItem() {
    await axios({
      method: "DELETE",
      url: "http://localhost:5000/delUser",
      data: { email: this },
    }).then(
      (res) => {
        console.log("DELETED");
        dispatch(userSliceActions.deleteUser(this));
      },
      (err) => {
        console.log(err);
      }
    );
  }

  return (
    <div className="container">
      <h2 className="h">List Of Users logged In</h2>
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
