import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase"; // Adjust the import path as necessary
import styles from "./Auth.module.css"; // Import CSS module

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // Track whether the user wants to sign up or sign in

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Signed in!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <div className={styles.formContainer}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        {isSignUp ? (
          <button onClick={handleSignUp} className={styles.button}>
            Sign Up
          </button>
        ) : (
          <button onClick={handleSignIn} className={styles.button}>
            Sign In
          </button>
        )}
        {auth.currentUser && (
          <button onClick={handleSignOut} className={styles.button}>
            Sign Out
          </button>
        )}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className={styles.switchButton}
        >
          {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
