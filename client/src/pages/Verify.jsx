import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Verify = () => {

  const { token } = useParams();
  const [status, setStatus] = useState("Verifying...");
  const navigate = useNavigate();

  useEffect(() => {

    const verifyEmail = async () => {

      try {

        const res = await axios.post(
          "http://localhost:8000/user/verify",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.success) {

          setStatus("Email verified successfully! Redirecting to login...");

          setTimeout(() => {
            navigate("/login");
          }, 2000);

        } else {

          setStatus("Verification failed. Please try again later.");

        }

      } catch (error) {

        console.error(error);
        setStatus("Verification failed. Please try again later.");

      }
    };

    verifyEmail();

  }, [token, navigate]);

  return (

    <div className="relative w-full h-[760px] bg-green-100 overflow-hidden">

      <div className="min-h-screen flex items-center justify-center bg-green-100">

        <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">

          <h2 className="text-2xl font-semibold text-green-500">
            ✅ Email Verification
          </h2>

          <p className="mt-4 text-gray-600">
            {status}
          </p>

        </div>

      </div>

    </div>
  );
};

export default Verify;