import { useLocation } from "react-router-dom";
import Form from "../Form/Form";

const EditUser = () => {
  const { state: user } = useLocation();

  return <Form user={user} />;
};

export default EditUser;
