"use client";

import EditPetRegisterForm from "@/app/settings/_components/EditPetRegisterForm";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const petId = Number(segments[segments.length - 1]);

  return (
    <div>
      <EditPetRegisterForm petId={petId} />;
    </div>
  );
};

export default Page;
