import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          this is a header
          <Link href={'/'}>Home </Link>
          <Link href={'/products'}>Products </Link>
          </header>

        {children}
        <footer>this is a footer</footer>
      </body>
    </html>
  );
}
