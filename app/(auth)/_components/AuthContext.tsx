"use client";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session?: Session | null;
};

export default function AuthContext({ session, children }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
