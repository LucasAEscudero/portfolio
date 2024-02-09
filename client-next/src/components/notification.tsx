import toast from "react-hot-toast";

export function successNotification(message: string) {
  return toast.success(message, {
    style: {
      background:
        "linear-gradient(135deg,rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0))",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      boxShadow: "0 0 32px 0 rgba(0, 0, 0, 0.37)",
      color: "white",
    },
    iconTheme: {
      primary: "#1a355b",
      secondary: "#fff",
    },
  });
}

export function errorNotification(message: string) {
  return toast.error(message, {
    style: {
      background:
        "linear-gradient(135deg,rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0))",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      boxShadow: "0 0 32px 0 rgba(0, 0, 0, 0.37)",
      color: "white",
    },
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
  });
}
