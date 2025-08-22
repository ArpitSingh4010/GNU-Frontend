"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { extractUserDetailsFromEmail } from '../../utils/userUtils';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  // Mock: Check if already logged in
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('loggedIn')) {
      router.replace('/');
    }
  }, [router]);


  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
      <div style={{ padding: '2rem 0 0 2rem' }}>
        <Image src="/srm-institute-of-science-and-technology-logo-png_seeklogo-381994.webp" alt="SRM Logo" width={80} height={40} />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 56, alignItems: 'center', background: 'white', borderRadius: 20, boxShadow: '0 2px 24px #0002', padding: '4rem 5rem', minWidth: 540, minHeight: 320 }}>
          <div style={{ textAlign: 'left', maxWidth: 360 }}>
            <h2 style={{ fontWeight: 700, marginBottom: 16 }}>Welcome to Virtual Lab</h2>
            <p style={{ color: '#444', marginBottom: 0 }}>
              Experience hands-on learning and experimentation in the GNU Processing Virtual Lab. Explore open-source tools, simulate real-world scenarios, and enhance your understanding of GNU-based processing systems.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, minWidth: 240 }}>
            <form onSubmit={e => {
              e.preventDefault();
              setError('');
              const id = (e.currentTarget.elements.namedItem('id') as HTMLInputElement).value;
              const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
              if (!id.endsWith('@srmist.edu.in')) {
                setError('Only SRM email addresses are allowed.');
                return;
              }
              if (id && password) {
                try {
                  const userDetails = extractUserDetailsFromEmail(id);
                  localStorage.setItem('loggedIn', 'true');
                  localStorage.setItem('userEmail', id);
                  localStorage.setItem('userName', userDetails.name);
                  localStorage.setItem('userRegistrationNumber', userDetails.registrationNumber);
                } catch (error) {
                  console.error('Error extracting user details:', error);
                  localStorage.setItem('loggedIn', 'true');
                  localStorage.setItem('userEmail', id);
                  localStorage.setItem('userName', 'User');
                  localStorage.setItem('userRegistrationNumber', 'N/A');
                }
                window.location.replace('/lab');
              }
            }} style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
              <input name="id" type="email" placeholder="SRM Email ID" style={{ padding: '0.5rem', borderRadius: 5, border: '1px solid #ccc', fontSize: 15 }} required />
              <input name="password" type="password" placeholder="Password" style={{ padding: '0.5rem', borderRadius: 5, border: '1px solid #ccc', fontSize: 15 }} required />
              <button type="submit" style={{ marginTop: 6, background: '#0070f3', color: '#fff', border: 'none', borderRadius: 5, padding: '0.5rem', fontSize: 16, cursor: 'pointer' }}>Login</button>
              {error && <span style={{ color: 'red', fontSize: 14, marginTop: 4 }}>{error}</span>}
            </form>
            <div style={{ width: '100%', borderTop: '1px solid #eee', margin: '12px 0' }}></div>
            <button onClick={() => alert('Please use the email form above to login with your SRM email ID')} style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #ccc', borderRadius: 6, padding: '0.5rem 1.5rem', background: '#f5f5f5', cursor: 'pointer', fontSize: 16, height: 48, width: '100%', justifyContent: 'center', color: '#666' }}>
              <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width={24} height={24} />
              Sign in with Google (Use form above)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
