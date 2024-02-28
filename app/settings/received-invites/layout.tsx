import TitleHeader from "@/app/_components/TitleHeader";

export default function ReceivedInviteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TitleHeader title="초대 받은 내역" />
      {children}
    </>
  );
}
