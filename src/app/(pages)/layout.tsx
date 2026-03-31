import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
