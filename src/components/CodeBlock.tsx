import CopyButton from "@/components/CopyButton";

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  showCopy = true,
}: CodeBlockProps) {
  return (
    <div className="relative">
      <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      {showCopy && <CopyButton text={code} />}
    </div>
  );
}
