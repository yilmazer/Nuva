import Link from "next/link";

export const Header = () => {
  return (
    <div className="fixed right-0 left-0 w-full top-0 bg-white dark:bg-zinc-950 z-10">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-row items-center gap-2 shrink-0">
          <span className="flex flex-row items-center gap-2 home-links">
            <Link
              className="flex flex-row items-center font-bold text-2xl tracking-tight select-none"
              target="_blank"
              href="https://nuva.vercel.app"
              style={{ textDecoration: "none" }}
            >
              <svg
                width="140"
                height="36"
                viewBox="0 0 140 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block align-middle"
              >
                <g>
                  <circle cx="18" cy="18" r="16" fill="url(#circle-gradient)" />
                  <path
                    d="M11 26V10L25 26V10"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <text
                  x="38"
                  y="22"
                  fontFamily="'Inter', 'Segoe UI', Arial, sans-serif"
                  fontWeight="900"
                  fontSize="22"
                  fill="url(#nuva-gradient)"
                  letterSpacing="3"
                  dominantBaseline="middle"
                  style={{ textTransform: "uppercase" }}
                >
                  uva
                </text>
                <defs>
                  <linearGradient id="circle-gradient" x1="2" y1="2" x2="34" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="1" stopColor="#A21CAF" />
                  </linearGradient>
                  <linearGradient id="nuva-gradient" x1="38" y1="18" x2="130" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="0.5" stopColor="#A21CAF" />
                    <stop offset="1" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
