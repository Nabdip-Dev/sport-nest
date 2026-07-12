"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import {
  User,
  Settings,
  ShieldCheck,
  Pencil,
  Trash2,
  Camera,
  Mail,
  Calendar,
  MapPin,
  Phone,
  LogOut,
} from "lucide-react";



const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const [openEdit, setOpenEdit] = useState(false);

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fbff]">
        <span className="loading loading-spinner loading-lg text-[#2563eb]"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-10 text-center">

          <User
            size={70}
            className="mx-auto text-[#2563eb]"
          />

          <h2 className="text-3xl font-black mt-5 text-[#001136]">
            Please Login
          </h2>

          <p className="text-slate-500 mt-2">
            Login to access your profile.
          </p>

        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#ffffff] via-[#f6f9ff] to-[#eef5ff] py-10">

      <div className="w-11/12 max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <ProfileHeader
          user={user}
          setOpenEdit={setOpenEdit}
        />

        {/* BODY */}

        <div className="grid xl:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="xl:col-span-2 space-y-8">

            <ProfileInfo user={user} />

          </div>

          {/* RIGHT */}

          <div className="space-y-8">

            <ProfileStats />

            <QuickActions
              handleLogout={handleLogout}
            />

          </div>

        </div>

      </div>

      {/* Edit Modal */}

      {openEdit && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center">

          <div className="bg-white rounded-[30px] p-8 w-[95%] max-w-lg shadow-2xl">

            <h2 className="text-3xl font-black text-[#001136]">
              Edit Profile
            </h2>

            <p className="text-slate-500 mt-2">
              This feature will be connected with database.
            </p>

            <div className="mt-8 space-y-5">

              <input
                defaultValue={user.name}
                className="input input-bordered w-full rounded-2xl"
              />

              <input
                defaultValue={user.email}
                disabled
                className="input input-bordered w-full rounded-2xl"
              />

              <input
                placeholder="Photo URL"
                className="input input-bordered w-full rounded-2xl"
              />

            </div>

            <div className="flex gap-4 mt-8">

              <button
                className="btn flex-1 bg-[#2563eb] text-white rounded-2xl"
              >
                Save Changes
              </button>

              <button
                onClick={() => setOpenEdit(false)}
                className="btn flex-1 rounded-2xl"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
};

export default MyProfilePage;