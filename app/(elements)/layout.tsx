import Header1 from "@/components/headers/Header2";
import Footer10 from "@/components/footers/Footer10";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
        <Header1 sticky={true} />
        {children}
      
      <Footer10 />
    </>
  );
}
