export default function Layout({ modal, children }: { modal: React.ReactNode; children: React.ReactNode }) {
  return (
    <>
      <div>{modal}</div>
      <div>{children}</div>
    </>
  );
}
