import Footer from "@/components/Footer";

export default function CVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
