export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 bg-neutral-950 text-neutral-400 flex justify-center gap-6">
      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/YOUR_HANDLE"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        className="hover:text-indigo-400 transition"
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 5 3.95 6 2.5 6S0 5 0 3.5 1.05 1 2.5 1s2.48 1 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.28 2.31-2.62 4.76-2.62 5.09 0 6.02 3.35 6.02 7.69V24h-5V15.1c0-2.12-.04-4.86-2.97-4.86-2.98 0-3.44 2.33-3.44 4.72V24h-5V8z" />
        </svg>
      </a>
      {/* GitHub */}
      <a
        href="https://github.com/YOUR_HANDLE"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        className="hover:text-indigo-400 transition"
      >
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.41 7.86 10.94.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.37-1.3-1.73-1.3-1.73-1.06-.73.08-.71.08-.71 1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.73 1.27 3.4.97.1-.75.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 2.9-.39c.99.01 1.99.13 2.92.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.75.81 1.19 1.83 1.19 3.09 0 4.44-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.23 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
        </svg>
      </a>
    </footer>
  );
}
