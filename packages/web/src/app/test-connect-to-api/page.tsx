"use client";
import React from "react";
import styles from "./about.module.css";
import { Button, TextField } from "@mui/material";

type User = {
  name: string;
  surname: string;
  email: string;
  id: number | string;
};

export const AboutPage = () => {
  const [users, setUsers] = React.useState<User[] | null>(null);
  const [form, setForm] = React.useState<User>({
    name: "",
    surname: "",
    email: "",
    id: "",
  });

  function getUsers() {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }

  const handlePostForm = () => {
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        surname: form.surname,
        email: form.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(getUsers)
      .then(() => setForm({ name: "", surname: "", email: "", id: "" }))
      .catch((error) => alert(error));
  };

  function deleteUser(id: string | number) {
    fetch(`http://localhost:8080/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(getUsers)
      .catch((error) => alert(error));
  }

  const handleSetForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  React.useEffect(getUsers, []);

  return (
    <article className={styles.root}>
      <h2>Test Connect To Api</h2>
      <h2>Get and Delete Users</h2>
      {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              {user.name} {user.surname} ({user.email})
              <Button onClick={() => deleteUser(user.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}

      <h2>Post Users</h2>

      <div className={styles.container}>
        <TextField
          sx={{ mt: 2.5 }}
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          value={form.name}
          autoComplete="name"
          autoFocus
          color="primary"
          onChange={handleSetForm}
        />
        <TextField
          sx={{ mt: 2.5 }}
          required
          fullWidth
          id="surname"
          value={form.surname}
          label="Surname"
          name="surname"
          autoComplete="surname"
          autoFocus
          color="primary"
          onChange={handleSetForm}
        />

        <TextField
          sx={{ mt: 2.5 }}
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={form.email}
          autoComplete="email"
          autoFocus
          color="primary"
          onChange={handleSetForm}
        />
        <Button type="button" color="secondary" onClick={handlePostForm}>
          Create New User
        </Button>
      </div>
      <div style={{ height: 900 }}></div>
    </article>
  );
};

export default AboutPage;
