"use client";

import toast from "react-hot-toast";
import { XCircle } from "lucide-react";

const CancelModal = ({ item }) => {

  const modalId = `cancel_modal_${item._id}`;

  const handleCancel = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/booking/${item._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        toast.success("Booking Cancelled Successfully!");

        document.getElementById(modalId).close();

        window.location.reload();
      } else {
        toast.error("Cancel Failed!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server Error!");
    }
  };

  return (
    <div>

      {/* OPEN BUTTON */}
      <button
        className="btn btn-sm bg-transparent border border-red-500 hover:bg-red-600 text-red-500 hover:text-white"
        onClick={() =>
          document.getElementById(modalId).showModal()
        }
      >
        <XCircle size={16} />
        Cancel
      </button>

      {/* MODAL */}
      <dialog id={modalId} className="modal">

        <div className="modal-box rounded-3xl bg-white p-6">

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
              ✕
            </button>
          </form>

          <div className="flex flex-col items-center text-center">

            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <XCircle className="text-red-600" size={40} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Cancel Booking?
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Are you sure you want to cancel booking for{" "}
              <span className="font-semibold text-gray-700">
                {item?.facilityName}
              </span>
              ?
            </p>

            <p className="mt-1 text-xs text-red-500">
              This action cannot be undone.
            </p>

            <div className="mt-6 flex w-full gap-3">

              <form method="dialog" className="w-1/2">
                <button className="btn w-full rounded-xl border-none bg-gray-200 text-gray-700 hover:bg-gray-300">
                  Keep Booking
                </button>
              </form>

              <button
                onClick={handleCancel}
                className="btn w-1/2 rounded-xl border-none bg-red-600 text-white hover:bg-red-700"
              >
                Cancel Now
              </button>

            </div>

          </div>

        </div>

      </dialog>
    </div>
  );
};

export default CancelModal;