import { useSelector } from "react-redux";
const Confirmation = () => {
  const userData = useSelector((state) => state.user);

  return (
    <div>
      <h1>{userData.name}</h1>
      <h1>{userData.age}</h1>
      <h1>{userData.email}</h1>
      <h1>{userData.password}</h1>
    </div>
  );
};

export default Confirmation;
