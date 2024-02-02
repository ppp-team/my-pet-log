"use client";

import AppLayout from "@/components/Layout/AppLayout";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout>
      {children}
      <div id="portal"></div>
    </AppLayout>
  );
}
