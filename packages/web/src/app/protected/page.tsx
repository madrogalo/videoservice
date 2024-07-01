"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from "./protected.module.css";

interface User {
  id: number;
  email: string;
  name: string;
  surname: string;
}

const Protected: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axios.get<{ user: User }>(
          "http://localhost:8080/protected",
          { withCredentials: true }
        );
        setUser(response.data.user);
      } catch (error) {
        // @ts-ignore
        setError(error.response ? error.response.data.message : error.message);
        router.push("/login");
      }
    };

    fetchProtectedData();
  }, [router]);

  console.log("render /protected route");

  return (
    <article className={styles.root}>
      <h2>Protected</h2>
      {user ? (
        <div>
          <h2>Welcome, {user.email}</h2>
          <h2>Get and Delete Users</h2>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {error && <div>Error: {error}</div>}
      <div className={styles.container}></div>
      <div style={{ height: 900 }}></div>
    </article>
  );
};

export default Protected;
