import toast from "react-hot-toast";

const notify = (message, type) =>
  toast[type](message, {
    style: {
      borderRadius: "10px",
      fontFamily: "Inter, sans-serif",
    },
  });

export default notify;
