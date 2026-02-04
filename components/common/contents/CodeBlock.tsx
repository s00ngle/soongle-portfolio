"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "ts" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <span className="text-xs font-mono text-neutral-500">{language}</span>

        <button
          onClick={handleCopy}
          className="cursor-pointer flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-4 text-sm leading-6 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <code className="font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
