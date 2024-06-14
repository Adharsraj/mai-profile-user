import AuthFooter from "@/components/auth/AuthFooter";
import AuthHeader from "@/components/auth/AuthHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <AuthHeader />
      {children}
      <AuthFooter/>
    </main>
  );
}
