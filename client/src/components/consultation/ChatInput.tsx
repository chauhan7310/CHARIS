"use client";

import { useState } from "react";

type Props = {
  onSend: (text: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  return (
    <div className="flex gap-4 mt-6">

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your answer..."
        className="flex-1 border rounded-xl p-4 outline-none"
      />

      <button
        onClick={sendMessage}
        className="bg-[#5A1E2A] text-white px-8 rounded-xl"
      >
        Send
      </button>

    </div>
  );
}