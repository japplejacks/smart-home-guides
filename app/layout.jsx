import './globals.css';

export const metadata = {
  title: 'Smart Home Guides | Setup Tutorials & Product Reviews',
  description: 'Step-by-step smart home setup tutorials, product comparisons, and network optimization guides. By Apple Core Tech.',
  openGraph: {
    title: 'Smart Home Guides',
    description: 'Smart home setup tutorials and product reviews',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body>
        <header>
          <nav>
            <a href="/" className="logo">Smart Home Guides</a>
            <div className="nav-links">
              <a href="/">Home</a>
              <a href="https://applecoreatl.com" target="_blank" rel="noopener">Apple Core Tech</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; {new Date().getFullYear()} Smart Home Guides — A project by <a href="https://applecoreatl.com">Apple Core Tech</a></p>
          <p className="affiliate-disclosure">Some links on this site are affiliate links. We may earn a commission at no extra cost to you.</p>
        </footer>
      </body>
    </html>
  );
}
