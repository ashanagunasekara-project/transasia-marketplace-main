import Header6 from "@/components/headers/Header6";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
        <Header6 sticky={true} />
        {children}
      
    </>
  );
}
