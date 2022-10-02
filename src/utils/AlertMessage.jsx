import Swal from "sweetalert2";

export default {
  success: async () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    await Toast.fire({
      icon: "success",
      title: "successfully...",
    });
  },
  unsuccess: (error) => {
    Swal.fire({
      icon: 'error',
      title: error.title,
      text: error.text,
    })
  }
};
