import type { JSX, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const COMPOUND: Record<string, string[]> = {
  "JavaScript/TypeScript": ["javascript", "typescript"],
  "PHP (Laravel)": ["php", "laravel"],
  "HTML/CSS": ["html", "css"],
  "LangGraph (familiar)": ["langgraph"],
  "Tailwind CSS": ["tailwind"],
  "Next.js": ["nextjs"],
};

const ALIASES: Record<string, string> = {
  python: "python",
  javascript: "javascript",
  typescript: "typescript",
  java: "java",
  php: "php",
  laravel: "laravel",
  react: "react",
  fastapi: "fastapi",
  pydantic: "pydantic",
  "scikit-learn": "sklearn",
  xgboost: "xgboost",
  shap: "shap",
  mysql: "mysql",
  sqlite: "sqlite",
  git: "git",
  docker: "docker",
  html: "html",
  css: "css",
  "next.js": "nextjs",
  nextjs: "nextjs",
  "tailwind css": "tailwind",
  tailwind: "tailwind",
  vercel: "vercel",
  numpy: "numpy",
  pandas: "pandas",
  langchain: "langchain",
  langgraph: "langgraph",
  "sentence-transformers": "huggingface",
  embeddings: "huggingface",
  "similarity search": "huggingface",
  rag: "rag",
  "rest apis": "rest",
  rest: "rest",
  "llm apis": "llm",
  "prompt engineering": "prompt",
  "nlp pipelines": "nlp",
  fts5: "sqlite",
  pypdf: "python",
  pyyaml: "python",
  nlp: "nlp",
  "transformer embeddings": "huggingface",
  bertopic: "python",
  "llm-assisted sentiment analysis": "llm",
  "prompt and context engineering": "prompt",
  "responsible ai and data privacy in system design": "privacy",
};

export function iconKeysForLabel(label: string): string[] {
  if (COMPOUND[label]) {
    return COMPOUND[label];
  }
  const key = ALIASES[label.toLowerCase()];
  return key ? [key] : [];
}

function Mark({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function PythonMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12.3 3c-1.7 0-3.1.4-4.1 1.1C7 4.9 6.5 6 6.5 7.3V9h5.8v.3H5.6c-1.7 0-3.2 1-3.8 2.5-.4 1-.4 2.1 0 3.2C2.4 16.4 4 17.3 5.6 17.3H7v-2.1c0-1.8 1.5-3.4 3.4-3.4h5.1c1.5 0 2.7-1.2 2.7-2.7V7.3c0-2.4-2-4.3-6-4.3Zm-2 1.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
      <path d="M16.9 9.4V11c0 1.9-1.6 3.5-3.5 3.5H8.3c-1.5 0-2.7 1.3-2.7 2.8v1.4c0 2.4 2.2 4.2 6.2 4.2 1.7 0 3.1-.4 4.1-1.1 1.2-.8 1.7-1.9 1.7-3.2V15h-5.7v-.3h6.6c1.7 0 2.9-1 3.5-2.4.4-1 .4-2.2 0-3.3-.6-1.5-1.8-2.4-3.5-2.4h-1.6Zm-1.7 8.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </Mark>
  );
}

function JavaScriptMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M3 3h18v18H3V3Zm10.2 13.6c0 2.1-1.2 3.1-3.4 3.1-1.8 0-3-.9-3.5-2.1l1.9-1.1c.3.6.7 1.1 1.6 1.1.8 0 1.3-.3 1.3-1.5v-6.6h2.1v7.1Zm2.2 3c-2.1 0-3.5-1-4.2-2.4l1.9-1.1c.5.9 1.2 1.5 2.3 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.7-1.1-1.8-1.6l-.6-.3c-1.8-.8-3-1.9-3-4.1 0-2 1.5-3.6 3.9-3.6 1.7 0 2.9.6 3.8 2.1l-1.8 1.2c-.4-.7-.9-1.2-1.9-1.2-.8 0-1.3.5-1.3 1.2 0 .8.5 1.1 1.7 1.6l.6.3c2.1.9 3.3 2.1 3.3 4.2 0 2.4-1.9 3.6-4.5 3.6Z" />
    </Mark>
  );
}

function TypeScriptMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M3 3h18v18H3V3Zm14.2 8.4H12V10h8v1.4h-2.5V19h-2.3V11.4ZM9.7 10H4.9v1.4h1.7V19h2.3v-7.6h1.8V10Z" />
    </Mark>
  );
}

function JavaMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12.8 3.2c.7 1.6-1.8 2.7-2.5 4-.8 1.4.4 2.8.4 2.8S8.4 8.6 8.8 7c.5-1.8 3.2-2.6 4-3.8ZM9.3 11.3s2.2-.6 2.2.8-2.5 1.3-2.5 2.3 2.1 1 2.1.2c0-1.3-2.6-1.3-2.6-3.2 0-1.7 1.8-1.8 1.8-1.8Zm4.5.2s.5 2.9-2.6 4.2c0 0 1.4-2.3.4-3.3-.8-.8 2.2-.9 2.2-.9Zm-6 3.7s2.6 1.1 1.2 3c0 0-1-.7.3-1.6.1-.1-2.3-.6-1.5-1.4Zm8.2-6.4s-4.7 1.2-3.1 5.6c0 0 .4-1.7 1.8-2.4 1.3-.7 2-1.8 1.3-3.2ZM8.2 17.7c.6.7 1.4 1.2 2.4 1.6 2.6 1 5.8.5 6.6-1.3-1.8 1.2-4.1 1.1-6.4.3-1.4-.5-2.2-1-2.6-.6Zm9.3-1.5c-.2 2.6-2.4 4.3-6.6 4.3-3.4 0-5.3-1.3-5.4-3 .8 1.8 3.4 2.8 6.2 2.8 2.4 0 4.8-.8 5.8-2.1.1-.1 0-1.4 0-2Z" />
    </Mark>
  );
}

function PhpMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M2 12c0-3.3 4.5-6 10-6s10 2.7 10 6-4.5 6-10 6-10-2.7-10-6Zm5.4-.9H6.2l-.5 2.6h1.2c.8 0 1.3-.2 1.5-.7.3-.6 0-1.9-3-1.9Zm1.2 1.1c-.1.2-.3.3-.6.3h-.4l.2-1h.4c.4 0 .5.2.4.7Zm3.3-1.1H10l-.8 4h1.2l.2-1.2h.7c1.3 0 2.1-.7 2.3-1.7.3-1.1-.4-1.1-1.7-1.1Zm.4 1.1h-.5l.2-1h.5c.5 0 .8 0 .7.5-.1.4-.4.5-.9.5ZM18 11.1h-1.2l-.5 2.6h1.2c.8 0 1.3-.2 1.5-.7.3-.6 0-1.9-3-1.9Zm1.2 1.1c-.1.2-.3.3-.6.3h-.4l.2-1h.4c.4 0 .5.2.4.7Z" />
    </Mark>
  );
}

function LaravelMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="m21.6 9.1-8.2-4.7a1 1 0 0 0-1 0L4.1 9.1a1 1 0 0 0-.5.9v9.4a1 1 0 0 0 .5.9l8.3 4.7a1 1 0 0 0 1 0l8.2-4.7a1 1 0 0 0 .5-.9V10a1 1 0 0 0-.5-.9ZM12 4.9 19.4 9 12 13.2 4.6 9 12 4.9Zm-.8 16.2-7.4-4.2V10.7l7.4 4.2v6.2Zm9.2-4.2-7.4 4.2v-6.2l7.4-4.2v6.2Z" />
    </Mark>
  );
}

function ReactMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 10.4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Zm8.3.2c-.4-1.4-1.6-2.5-3.4-3.2.3-.9.4-1.8.3-2.6-.2-1.3-.9-2.2-1.9-2.4-.5-.1-1.1 0-1.7.3-1.1.6-2.2 1.8-3.2 3.4C9.4 4.5 8.3 3.3 7.2 2.7c-.6-.3-1.2-.4-1.7-.3-1 .2-1.7 1.1-1.9 2.4-.1.8 0 1.7.3 2.6-1.8.7-3 1.8-3.4 3.2-.4 1.3 0 2.7 1.2 3.8-.3.9-.4 1.8-.3 2.6.2 1.3.9 2.2 1.9 2.4.5.1 1.1 0 1.7-.3 1.1-.6 2.2-1.8 3.2-3.4 1 1.6 2.1 2.8 3.2 3.4.6.3 1.2.4 1.7.3 1-.2 1.7-1.1 1.9-2.4.1-.8 0-1.7-.3-2.6 1.8-.7 3-1.8 3.4-3.2.4-1.3 0-2.7-1.2-3.8ZM7.5 4.6c.2-.7.6-1.1 1-.1.6.7 1.4 2 2.2 3.6-1.3.2-2.5.6-3.6 1.1-.2-.8-.3-1.5-.2-2.2.1-.9.3-1.9.6-2.4Zm8 .1c.3.5.5 1.5.6 2.4.1.7 0 1.4-.2 2.2-1.1-.5-2.3-.9-3.6-1.1.8-1.6 1.6-2.9 2.2-3.6.4-1 .8-.6 1 .1ZM4.4 13.3c-.7-.7-.7-1.6-.2-2.8.4-.9 1.2-1.8 2.4-2.5 1.1 1.7 2.3 3.6 3.4 5.5-1.1 1.9-2.3 3.8-3.4 5.5-1.2-.7-2-1.6-2.4-2.5-.5-1.2-.5-2.1.2-2.8Zm7.6 6.6c-.8-.5-1.8-1.5-2.8-3 1.8.2 3.8.2 5.6 0-1 1.5-2 2.5-2.8 3Zm7.6-6.6c.7.7.7 1.6.2 2.8-.4.9-1.2 1.8-2.4 2.5-1.1-1.7-2.3-3.6-3.4-5.5 1.1-1.9 2.3-3.8 3.4-5.5 1.2.7 2 1.6 2.4 2.5.5 1.2.5 2.1-.2 2.8ZM14.3 9c1.3.2 2.5.6 3.6 1.1.2-.8.3-1.5.2-2.2-.1-.9-.3-1.9-.6-2.4-.2-.7-.6-1.1-1-.1-.6.7-1.4 2-2.2 3.6Zm-4.6 0c-.8-1.6-1.6-2.9-2.2-3.6-.4-1-.8-.6-1 .1-.3.5-.5 1.5-.6 2.4-.1.7 0 1.4.2 2.2 1.1-.5 2.3-.9 3.6-1.1Z" />
    </Mark>
  );
}

function FastApiMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-.4 4.4 5.7 6.4h-3.6l.9 5.8-5.8-6.5h3.6l-.8-5.7Z" />
    </Mark>
  );
}

function PydanticMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 3 4.5 7.2v9.6L12 21l7.5-4.2V7.2L12 3Zm0 2.3 5.2 2.9v5.1L12 16.2 6.8 13.3V8.2L12 5.3Zm0 3.2-2.6 4.6h1.9l.7 2.6 2.6-4.6h-1.9L12 8.5Z" />
    </Mark>
  );
}

function SklearnMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M7 4.5a3.2 3.2 0 0 0-3 4.3L7.8 20h3.2L7.3 8.4A1.2 1.2 0 0 1 8.5 7c.8 0 1.3.6 1.6 1.4L14 20h3.2l-4-12.3A3.5 3.5 0 0 0 10 4.7 3.4 3.4 0 0 0 7 4.5Zm10.2 0A3.3 3.3 0 0 0 14 7.8h2.3c.2-.5.6-.9 1.2-.9s1 .5 1 1.2c0 .9-.7 1.5-1.7 2.5-1.4 1.3-2.5 2.6-2.5 4.4 0 2.4 1.8 4 4.3 4 1.8 0 3.1-.7 3.9-1.8l-1.5-1.3c-.5.7-1.3 1.1-2.3 1.1-1.2 0-2-.7-2-1.8 0-.9.6-1.5 1.8-2.6 1.4-1.3 2.4-2.5 2.4-4.3 0-2.3-1.7-3.8-4.1-3.8Z" />
    </Mark>
  );
}

function BoostMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M5 18V6h3.2l3.1 5.6L14.4 6H18v12h-2.6V10l-2.9 5.3h-1.8L7.7 10v8H5Z" />
    </Mark>
  );
}

function ShapMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Zm0 2.2 5.7 3.2v.9L12 12.6 6.3 9.3v-.9L12 5.2Zm-5.7 5.3 5.2 3v6.2l-5.2-3v-6.2Zm7.2 9.2v-6.2l5.2-3v6.2l-5.2 3Z" />
    </Mark>
  );
}

function MysqlMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M16.7 8.4c-1.4 0-2.5.5-3.3 1.2-.2-1-.8-1.8-2-1.8-.7 0-1.3.3-1.7.8V8.7H8.2v7.7h1.6v-3.7c0-1.1.5-1.8 1.4-1.8.8 0 1.2.6 1.2 1.8v3.7h1.6v-4c0-1.6.7-2.5 2.2-2.5 1.4 0 2.1.9 2.1 2.6v3.9H20v-4.2c0-2.3-1.2-3.8-3.3-3.8ZM4.8 10.2c.9-1.3 2.3-2 4.1-2 .4 0 .8 0 1.2.1v1.6c-.4-.1-.8-.2-1.2-.2-1.9 0-3.1 1.1-3.5 2.9h2.3v1.4H5.2c0 .3 0 .6.1.8.5 1.7 1.8 2.6 3.8 2.6.4 0 .8 0 1.2-.1v1.6c-.4.1-.9.1-1.3.1-2.9 0-4.8-1.5-5.5-4.1-.2-.7-.3-1.4-.3-2.1 0-.9.2-1.8.6-2.6Z" />
    </Mark>
  );
}

function SqliteMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M7 3h8.2L20 8.6V21H7c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3Zm8 1.8V9h4.1L15 4.8ZM8.3 11h2.2l1.3 3.4 1.3-3.4h2.1L12.7 19h-2.1L8.3 11Z" />
    </Mark>
  );
}

function GitMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="m21.6 11-8.6-8.6a1.4 1.4 0 0 0-2 0L8.8 4.6l2.5 2.5a1.7 1.7 0 0 1 2.1 2.1l2.4 2.4a1.7 1.7 0 1 1-1 1l-2.4-2.4v6.3a1.7 1.7 0 1 1-1.4.1V10.2a1.7 1.7 0 0 1-.9-1.1L7.6 6.6 2.4 11.8a1.4 1.4 0 0 0 0 2l8.6 8.6a1.4 1.4 0 0 0 2 0l8.6-8.6a1.4 1.4 0 0 0 0-2Z" />
    </Mark>
  );
}

function DockerMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M4.6 10.2h2.3V8H4.6v2.2Zm2.6 0h2.3V8H7.2v2.2Zm0-2.5h2.3V5.4H7.2v2.3Zm2.6 2.5h2.3V8h-2.3v2.2Zm0-2.5h2.3V5.4h-2.3v2.3Zm0-2.6h2.3V2.8h-2.3v2.3Zm2.6 5.1h2.3V8h-2.3v2.2ZM4.2 10.6c-.4 1.8.1 3.1.8 4 .8 1 2 1.6 3.7 1.8 1.4.2 5.6.2 6.8-1.1 1.2.6 2.9.5 3.7-.4.5-.5.7-1.2.8-1.8.8-.1 2.4-.5 2.4-2.1 0-1.4-1.3-2.1-2.2-2.1H4.2c-.2 1.1-.2 1.2-.2 1.7Z" />
    </Mark>
  );
}

function HtmlMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M4.1 3 6 20.2 12 22l6-1.8L20 3H4.1Zm12.4 5.6H9.2l.2 1.9h6.9l-.5 5.4L12 17.3l-3.8-1-.3-2.9h1.9l.1 1.4 2.1.6 2.1-.6.2-2.3H8.1L7.6 6.7h8.9l.1 1.9Z" />
    </Mark>
  );
}

function CssMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M4.1 3 6 20.2 12 22l6-1.8L20 3H4.1Zm12.2 5.5-.2 2H9.4l.2 1.8h6.5l-.6 5.5-3.5 1-3.6-1-.2-2.6h1.9l.1 1.3 1.8.5 1.8-.5.2-2.3H8.4L7.7 6.6h8.6Z" />
    </Mark>
  );
}

function NumpyMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M6.2 4.2 3 6.1v11.8l3.2 1.9 4.6-2.7V7L6.2 4.2Zm11.6 0L13.2 7v9.9l4.6 2.8L21 17.9V6.1l-3.2-1.9ZM11 8.2v7.6L8 17.5V6.5l3 1.7Z" />
    </Mark>
  );
}

function PandasMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M9 3h2v4H9V3Zm4 4h2v4h-2V7ZM9 9h2v12H9V9Zm4 6h2v6h-2v-6ZM5 8h2v8H5V8Zm12 2h2v8h-2v-2Z" />
    </Mark>
  );
}

function LangchainMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M10.2 8.2a3.6 3.6 0 0 1 5.1 0l1.5 1.5-1.6 1.6-1.5-1.5a1.4 1.4 0 0 0-2 0l-1.4 1.4a1.4 1.4 0 0 0 0 2l1.5 1.5-1.6 1.6-1.5-1.5a3.6 3.6 0 0 1 0-5.1l1.4-1.4Zm3.6 3.6 1.6-1.6 1.5 1.5a3.6 3.6 0 0 1 0 5.1l-1.4 1.4a3.6 3.6 0 0 1-5.1 0l-1.5-1.5 1.6-1.6 1.5 1.5a1.4 1.4 0 0 0 2 0l1.4-1.4a1.4 1.4 0 0 0 0-2l-1.6-1.4Z" />
    </Mark>
  );
}

function HuggingFaceMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm-3.2 6.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm6.4 0a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 16.8c-2.2 0-3.6-1.3-3.6-1.3l.9-1.1s1.1 1 2.7 1 2.7-1 2.7-1l.9 1.1s-1.4 1.3-3.6 1.3Z" />
    </Mark>
  );
}

function RagMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M6 4h9l3 3v13H6V4Zm8 1.5V8h2.4L14 5.5ZM8 11h8v1.4H8V11Zm0 3h8v1.4H8V14Zm0 3h5v1.4H8V17Z" />
    </Mark>
  );
}

function LlmMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M5 5h10.5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H10l-3.5 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm13.5 4H20a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1.2v3L16 18h-2v-1.5h2.3a2 2 0 0 0 2-2V9Z" />
    </Mark>
  );
}

function NlpMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M4 6h16v2.2L13.8 14H20v4H4v-2.2L10.2 10H4V6Z" />
    </Mark>
  );
}

function PromptMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M8.2 5 3.8 12 8.2 19h2.4L6.3 12 10.6 5H8.2Zm7.6 0L20.2 12 15.8 19h-2.4l4.3-7-4.3-7h2.4Z" />
    </Mark>
  );
}

function PrivacyMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 2 5 5.2v6.1c0 4.3 2.9 7.4 7 8.7 4.1-1.3 7-4.4 7-8.7V5.2L12 2Zm0 4.2 4.2 1.8v4.3c0 2.6-1.6 4.6-4.2 5.6-2.6-1-4.2-3-4.2-5.6V8L12 6.2Z" />
    </Mark>
  );
}

function NextjsMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 3.5A8.5 8.5 0 1 0 20.5 12 8.5 8.5 0 0 0 12 3.5Zm-.2 3.8h1.7v6.4l2.8 4.1h-1.9l-2.6-3.8v3.8H10.1V7.3Z" />
    </Mark>
  );
}

function TailwindMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 7.2c-2.4-2.6-5.7-2-7.4.2-1.2 1.6-.7 3.6.8 4.5 1.8 1.1 3.4.2 4.6-1.1.7-.8 1.4-1.2 2-.1.8 1.4 2.4 2.3 4.2 1.2 1.5-.9 2-2.9.8-4.5-1.7-2.2-5-2.8-7.4-.2Zm0 5.4c-1.6-1.8-3.8-1.4-5 .1-.8 1.1-.5 2.4.5 3 1.2.7 2.3.1 3.1-.7.5-.5.9-.8 1.4-.1.5.9 1.6 1.5 2.8.8 1-.6 1.3-1.9.5-3-1.2-1.5-3.4-1.9-5-.1Z" />
    </Mark>
  );
}

function RestApiMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M3.5 7.5h7v9h-7v-9Zm10 0h7v9h-7v-9ZM11.2 11.1h1.6v1.8h-1.6v-1.8Z" />
    </Mark>
  );
}

function VercelMark(props: IconProps) {
  return (
    <Mark {...props}>
      <path d="M12 5.5 20 18.5H4L12 5.5Z" />
    </Mark>
  );
}

const MARKS: Record<string, (props: IconProps) => JSX.Element> = {
  python: PythonMark,
  javascript: JavaScriptMark,
  typescript: TypeScriptMark,
  java: JavaMark,
  php: PhpMark,
  laravel: LaravelMark,
  react: ReactMark,
  fastapi: FastApiMark,
  pydantic: PydanticMark,
  sklearn: SklearnMark,
  xgboost: BoostMark,
  shap: ShapMark,
  mysql: MysqlMark,
  sqlite: SqliteMark,
  git: GitMark,
  docker: DockerMark,
  html: HtmlMark,
  css: CssMark,
  numpy: NumpyMark,
  pandas: PandasMark,
  langchain: LangchainMark,
  langgraph: LangchainMark,
  huggingface: HuggingFaceMark,
  rag: RagMark,
  llm: LlmMark,
  nlp: NlpMark,
  prompt: PromptMark,
  privacy: PrivacyMark,
  nextjs: NextjsMark,
  tailwind: TailwindMark,
  vercel: VercelMark,
  rest: RestApiMark,
};

export function TechMark({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = MARKS[name];
  if (!Icon) {
    return null;
  }
  return <Icon className={className} />;
}
