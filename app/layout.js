
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>this is a header</header>

        {children}
        <footer>this is a footer</footer>
      </body>
    </html>
  );
}
