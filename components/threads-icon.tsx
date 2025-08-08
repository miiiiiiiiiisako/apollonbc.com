export const ThreadsIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 5.5c-1.7 1.3-3.6 2.2-5.7 2.5V16.8c2.1.3 4.1 1.2 5.7 2.5"></path>
    <path d="M3 18.3c1.7-1.3 3.6-2.2 5.7-2.5V7.2C6.6 6.9 4.6 6 2.9 4.7"></path>
    <line x1="9.4" y1="7.2" x2="14.6" y2="7.2"></line>
    <line x1="9.4" y1="16.8" x2="14.6" y2="16.8"></line>
  </svg>
)
