import Loader from "../loader/Loader";
import { STATUS } from "../../utils/status";
import { useState } from "react";

const ImageLoading = ({ src }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={src}
        style={{
          width: "100%",
          animation: "fadeIn 0.5s",
        }}
        onLoad={(e) => {
          setLoading(false);
        }}
      />
      <div
        className="spinner"
        style={
          {
            // display: loading ? "block" : "none",
          }
        }
      >
        <Loader />
      </div>
    </div>
  );
};
export default ImageLoading;
