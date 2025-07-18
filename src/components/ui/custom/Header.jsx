import React, { useEffect, useState } from "react";
import { Button } from "../button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

function Header() {
  const [user, setUser] = useState(null); // State for user
  const [openDialog, setOpenDialog] = useState(false); // State for dialog

  // Load user from localStorage on component mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // Google login hook
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.error("Login Error:", error),
  });

  // Fetch user profile from Google API
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((resp) => {
        console.log("User Profile:", resp.data);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setUser(resp.data); // Update state with user data
        setOpenDialog(false);
      })
      .catch((err) => {
        console.error("Error fetching user profile:", err);
      });
  };

  // Logout functionality
  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setUser(null); // Clear user state
    window.location.reload();
  };

  return (
    <div className="p-2 shadow-sm flex justify-between items-center px-5">
      {/* Logo */}
      <img src="/logo.svg" alt="App Logo" />

      {/* Right Section */}
      <div>
        {user ? (
          <div className="flex items-center gap-3">
            {/* My Trips Button */}
            <a href="/create-trip">
              <Button className="rounded-full">+ Create Trip</Button>
            </a>
            <a href="/my-trips">
              <Button className="rounded-full">My Trips</Button>
            </a>

            {/* User Profile Popover */}
            <Popover>
              <PopoverTrigger>
                <img
                  src={user?.picture}
                  alt="User Avatar"
                  className="h-[30px] w-[30px] rounded-full"
                />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          // Sign In Button
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>

      {/* Dialog for Google Sign-In */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src="/logo.svg" alt="App Logo" />
              <h2 className="font-bold text-lg mt-7">Sign in with Google</h2>
              <p>Sign in to the App with Google Authentication security</p>
              {/* Google Sign-In Button */}
              <Button
                onClick={login}
                className="w-full mt-5 gap-4 items-center"
              >
                <FcGoogle /> Sign In
              </Button>
              {/* Close Dialog Button */}
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="w-full mt-3"
                  onClick={() => setOpenDialog(false)}
                >
                  Close
                </Button>
              </DialogClose>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
