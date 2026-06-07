"use client";

import { Fragment } from "react";

const HIGHLIGHT_SOURCE =
  String.raw`\d+(?:\.\d+)?%\+?|\d+(?:\.\d+)?倍|\d+\s*倍速度|\d+\+|(?:\$|¥)?\d+(?:\.\d+)?(?:\s*万)?(?:美元|元)?|Chain-of-Thought|Multi-Agent|Test-Time\s*Compute|TensorRT-LLM|DeepSeek[-\w]*|HuggingFace|Hugging\s*Face|OpenAI|Anthropic|LangGraph|CrewAI|Codeforces|SWE-bench|HumanEval|GPT-4[o]?|GPT-5|GPT-3|Claude[\s\d.-]*Sonnet?|GRPO|RLHF|MoE|RAG|SSM|vLLM|ICLR|NeurIPS|AIME|GSM8K|Agent|Cursor|NVIDIA|INT4|FP8|o1|o3`;

interface HighlightedTextProps {
  text: string;
  className?: string;
}

export default function HighlightedText({ text, className = "" }: HighlightedTextProps) {
  const re = new RegExp(`(${HIGHLIGHT_SOURCE})`, "gi");
  const parts = text.split(re);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (!part) return null;
        const isHighlight = new RegExp(`^${HIGHLIGHT_SOURCE}$`, "i").test(part);
        if (isHighlight) {
          return (
            <strong key={i} className="font-bold text-zinc-100">
              {part}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </span>
  );
}
