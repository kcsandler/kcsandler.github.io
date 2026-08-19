import { site } from "@/content/site";

export function OpenToWorkRibbon() {
  return (
    <p
      role="status"
      className="open-ribbon pointer-events-auto absolute top-0 z-10 flex h-[10.25rem] w-8 justify-center right-3 lg:right-[max(6.5rem,14%)] lg:h-[12.25rem] lg:w-10"
    >
      <span className="open-ribbon-sway flex h-full w-full justify-center">
        <span className="open-ribbon-face relative flex h-full w-full justify-center pt-4 lg:pt-[1.35rem]">
          <svg
            viewBox="0 0 40 196"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path
              d="M0 0h40v168L20 196 0 168V0Z"
              className="fill-status"
            />
            <path
              d="M5 7.5h30v155.5L20 183 5 163V7.5Z"
              fill="none"
              className="stroke-bg"
              strokeWidth="1.15"
              strokeDasharray="3.25 2.4"
              strokeLinejoin="miter"
            />
          </svg>
          <span className="relative font-mono text-[9px] uppercase leading-none tracking-[0.16em] text-bg [writing-mode:vertical-rl] lg:text-[10px] lg:tracking-[0.18em]">
            {site.availability}
          </span>
        </span>
      </span>
    </p>
  );
}
