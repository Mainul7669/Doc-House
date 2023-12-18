import AuthProvider from "@components/providers/AuthProvider";
import "./globals.css";

export const metadata = {
  title: "Doc House",
  description: "Your Best Medical Help Center",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <html lang="en">
      <body>
        <div>
          <AuthProvider>
          <main>{children}</main>
          </AuthProvider>
        </div>
      </body>
    </html>
  </html>
);

export default RootLayout;
