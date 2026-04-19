import Navbar from "../components/navbar";

export default function RootLayout({ children }) {
  const NAV_LIST = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Contact", link: "/contact" },
    { id: 4, name: "Cart", link: "/cart" },
  ];

  return (
    <html lang="en">
      <body>
        <Navbar list={NAV_LIST} />
        {children}
      </body>
    </html>
  );
}
