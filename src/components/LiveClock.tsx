// components/LiveClock.tsx
'use client';

import Clock from 'react-live-clock';

export default function LiveClock() {
	return <Clock format='dddd, MMMM Mo, YYYY, h:mm:ss A' ticking />;
}
