import { Spinner } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import "./styles.css";

const Loading = () => {
  return (
    <div className="loading-plus">
      <h1>
        <Spinner style={{ color: "deepskyblue" }}>
          <span className="sr-only">
            <FiPlus />
          </span>
        </Spinner>
      </h1>
    </div>
  );
};

export { Loading };
