


"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginPage() {
	const router = useRouter();
	const [error, setError] = useState('');


		// If already logged in and on /, log out automatically
		useEffect(() => {
			if (typeof window !== 'undefined') {
				const loggedIn = localStorage.getItem('loggedIn');
				if (loggedIn) {
					// If not on /lab, log out and stay on login
					if (window.location.pathname !== '/lab') {
						localStorage.removeItem('loggedIn');
					} else {
						router.replace('/lab');
					}
				}
			}
		}, [router]);

		// Log out on tab close or refresh if on / (login page)
		useEffect(() => {
			const handleUnload = () => {
				if (window.location.pathname === '/') {
					localStorage.removeItem('loggedIn');
				}
			};
			window.addEventListener('beforeunload', handleUnload);
			return () => window.removeEventListener('beforeunload', handleUnload);
		}, []);


		// Google OAuth login using next-auth

		// Remove Google OAuth for now. Only manual login remains.

	return (
		<div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f8f9fa' }}>
					<div style={{ padding: '2rem 0 0 2rem' }}>
						<Image src="/srm-logo.png" alt="SRM Logo" width={80} height={40} />
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
								localStorage.setItem('loggedIn', 'true');
								router.replace('/lab');
							}
						}} style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
							<input name="id" type="email" placeholder="SRM Email ID" style={{ padding: '0.5rem', borderRadius: 5, border: '1px solid #ccc', fontSize: 15 }} required />
							<input name="password" type="password" placeholder="Password" style={{ padding: '0.5rem', borderRadius: 5, border: '1px solid #ccc', fontSize: 15 }} required />
							<button type="submit" style={{ marginTop: 6, background: '#0070f3', color: '#fff', border: 'none', borderRadius: 5, padding: '0.5rem', fontSize: 16, cursor: 'pointer' }}>Login</button>
							{error && <span style={{ color: 'red', fontSize: 14, marginTop: 4 }}>{error}</span>}
						</form>
						<div style={{ width: '100%', borderTop: '1px solid #eee', margin: '12px 0' }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

