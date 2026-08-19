import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </BaseIcon>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4v12M6 12l6 6 6-6M5 20h14" />
    </BaseIcon>
  );
}

export function IconMail(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </BaseIcon>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 11v5M8 8.5v.01M12 16v-5M16 16v-3.2A2.2 2.2 0 0 0 13.8 10.6c-.7 0-1.3.3-1.8.9" />
    </BaseIcon>
  );
}

export function IconGitHub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </BaseIcon>
  );
}

export function IconClose(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </BaseIcon>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12.5 9.5 17 19 7" />
    </BaseIcon>
  );
}

export function IconChevronLeft(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M15 6 9 12l6 6" />
    </BaseIcon>
  );
}

export function IconChevronRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m9 6 6 6-6 6" />
    </BaseIcon>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </BaseIcon>
  );
}

export function IconPerson(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 19.5c.8-3.4 3.3-5 6.5-5s5.7 1.6 6.5 5" />
    </BaseIcon>
  );
}

export function IconFolder(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7.5h5l1.5 2H20v9.5H4V7.5Z" />
      <path d="M4 9.5V6.5h5l1.2 1.6" />
    </BaseIcon>
  );
}

export function IconBriefcase(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="8" width="17" height="11.5" rx="1.25" />
      <path d="M9 8V6.2A1.2 1.2 0 0 1 10.2 5h3.6A1.2 1.2 0 0 1 15 6.2V8M3.5 12.5h17" />
    </BaseIcon>
  );
}

export function IconWrench(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14.2 6.2a3.6 3.6 0 0 0-4.9 4.1L4.5 15.1v4.4H9l4.8-4.8a3.6 3.6 0 0 0 4.1-4.9l-2.4 2.4-1.8-1.8 2.5-2.2Z" />
    </BaseIcon>
  );
}

export function IconChat(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 6.5h14v9.5H9.5L5 19.5V6.5Z" />
    </BaseIcon>
  );
}

export function IconSpark(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 4.5 13.2 9l4.8 1.2L13.2 11.4 12 16l-1.2-4.6L6 10.2 10.8 9 12 4.5Z" />
    </BaseIcon>
  );
}

export function IconSend(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4.5 12h15M13.5 6.5 19.5 12l-6 5.5" />
    </BaseIcon>
  );
}

export function IconSun(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="3.25" />
      <path d="M12 4.5v1.5M12 18v1.5M4.5 12H6M18 12h1.5M6.6 6.6l1.1 1.1M16.3 16.3l1.1 1.1M17.4 6.6l-1.1 1.1M7.7 16.3l-1.1 1.1" />
    </BaseIcon>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 7 7 0 0 0 20 14.5Z" />
    </BaseIcon>
  );
}
