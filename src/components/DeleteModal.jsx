"use client";

import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";

const DeleteModal = ({ facility }) => {

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/destination/${facility._id}`,
        {
          method: "DELETE",
          headers:{
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        toast.success("Facility Deleted Successfully!");

        document.getElementById("delete_modal").close();

        // optional refresh
        window.location.href = "/facilities";
      } else {
        toast.error("Delete Failed!");
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
        className="btn btn-sm bg-red-600 hover:bg-red-700 text-white border-none"
        onClick={() =>
          document.getElementById("delete_modal").showModal()
        }
      >
        <Trash2 size={16} />
        Delete
      </button>

      {/* MODAL */}
      <dialog id="delete_modal" className="modal">
        <div className="modal-box rounded-3xl bg-white p-6">

          {/* CLOSE BUTTON */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
              ✕
            </button>
          </form>

          {/* CONTENT */}
          <div className="flex flex-col items-center text-center">

            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <Trash2 className="text-red-600" size={40} />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Delete Facility?
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Are you sure you want to delete
              <span className="font-semibold text-gray-700">
                {" "}
                {facility?.name}
              </span>
              ?
            </p>

            <p className="mt-1 text-xs text-red-500">
              This action cannot be undone.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex w-full gap-3">

              <form method="dialog" className="w-1/2">
                <button className="btn w-full rounded-xl border-none bg-gray-200 text-gray-700 hover:bg-gray-300">
                  Cancel
                </button>
              </form>

              <button
                onClick={handleDelete}
                className="btn w-1/2 rounded-xl border-none bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>

            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteModal;