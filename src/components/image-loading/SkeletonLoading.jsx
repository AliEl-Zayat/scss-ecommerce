import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonLoading = ({ src }) => {
  const [loading, setLoading] = useState(true);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = function () {
      setHeight(image.naturalHeight);
    };
  }, []);

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
          display: loading ? "none" : "block",
          animation: "fadeIn 0.5s",
        }}
        onLoad={(e) => {
          setLoading(false);
        }}
      />
      {loading ? (
        <Skeleton
          variant="rectangular"
          style={{
            width: "100%",
            height: `${height}px`,
          }}
        />
      ) : null}
    </div>
  );
};
export default SkeletonLoading;
