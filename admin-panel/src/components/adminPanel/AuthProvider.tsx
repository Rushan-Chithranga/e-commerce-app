"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface PropsTypes {
  children: ReactNode;
}
const AuthProvider = ({ children }: PropsTypes) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
