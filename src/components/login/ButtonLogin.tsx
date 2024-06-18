import { ReactNode } from "react";

interface IButtonLoginProps {
  onClick: () => void;
  isLoading: boolean;
  children: ReactNode;
}
function ButtonLogin({ onClick, isLoading, children }: IButtonLoginProps) {
  return (
    <button
      onClick={onClick}
      className="mt-4  bg-yellow-300 w-full text-black rounded-full border-2 text-lg leading-tight border-black transform transition-transform"
    >
      <div className="flex items-center justify-center">
        {isLoading ? (
          <svg
            fill="none"
            className="w-10 h-10 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        ) : null}
        {!isLoading ? <span className="py-2">{children}</span> : null}
      </div>
    </button>
  );
}

export { ButtonLogin };
