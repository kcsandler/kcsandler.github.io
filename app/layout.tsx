import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { EditorialCursor } from "@/components/layout/EditorialCursor";
import { Footer } from "@/components/layout/Footer";
import {
  AssistantHost,
  FloatingUiProvider,
  SideNavHost,
  ThemeHost,
} from "@/components/layout/FloatingChrome";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  keywords: [
    "software developer",
    "computer science graduate",
    "RAG",
    "NLP",
    "full-stack",
    "AI",
  ],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#141210" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.legalName,
  alternateName: site.name,
  email: site.email,
  url: site.url,
  jobTitle: "Software Developer",
  description: site.description,
  sameAs: [site.linkedin, site.github],
};

const bootScript = `(function(){try{var stored=window.localStorage.getItem("pw-theme");var theme=stored==="dark"||stored==="light"?stored:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;}catch(e){document.documentElement.dataset.theme="light";}try{var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;document.documentElement.dataset.motion=r?"off":"on";document.documentElement.dataset.entrance=r?"done":"play";}catch(e){document.documentElement.dataset.motion="off";document.documentElement.dataset.entrance="done";}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-bg font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <FloatingUiProvider>
          <ThemeHost />
          <SideNavHost />
          {children}
          <Footer />
          <AssistantHost />
          <EditorialCursor />
        </FloatingUiProvider>
      </body>
    </html>
  );
}
