import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0d0d0d',
      color: 'white',
      fontFamily: 'ui-serif, Georgia, serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
        The page you are looking for could not be found.
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
        <Link href="/" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link>
        <Link href="/product" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}>Product</Link>
        <Link href="/solutions" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}>Solutions</Link>
        <Link href="/contact" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</Link>
      </div>
    </div>
  );
}
