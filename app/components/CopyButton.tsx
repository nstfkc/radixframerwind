import {
  LuCopy,
  LuCopyCheck,
  LuClipboard,
  LuClipboardCheck,
} from "react-icons/lu";

import { useEffect, useState } from "react";
import { copyToClipboard } from "../helpers";

export const CopyButton = (props: { content: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <button
      className="text-lg text-white"
      onClick={() => {
        copyToClipboard(props.content, () => {
          setIsCopied(true);
        });
      }}
    >
      {isCopied ? <LuClipboardCheck /> : <LuClipboard />}
    </button>
  );
};
