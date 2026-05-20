import { useSyncExternalStore, type ReactNode } from 'react';

type PreviewGateProps = {
	children: ReactNode;
};

function subscribe() {
	return () => {};
}

function getClientSnapshot() {
	return true;
}

function getServerSnapshot() {
	return false;
}

/**
 * Defers rendering until the client so browser-only library code
 * (portals, WebGL, phone input, etc.) never runs during SSR.
 */
export default function PreviewGate({ children }: PreviewGateProps) {
	const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

	if (!mounted) {
		return (
			<div className="vega-preview vega-preview--loading" aria-busy="true">
				<span className="vega-preview__placeholder">Loading preview…</span>
			</div>
		);
	}

	return children;
}
