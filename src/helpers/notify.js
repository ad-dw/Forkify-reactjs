import { toast } from "react-toastify";

const toastConfig = {
  hideProgressBar: true,
  autoClose: 4000,
};

export const notifySuccess = (message) => {
  toast.success(message, {
    ...toastConfig,
    className: "custom-success-toast custom-toast",
  });
};

export const notifyError = (message) => {
  toast.error(message, {
    className: "custom-error-toast custom-toast",
    ...toastConfig,
  });
};
