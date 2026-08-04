type ChatBubbleProps = {
  sender: "ai" | "user";
  message: string;
};

export default function ChatBubble({
  sender,
  message,
}: ChatBubbleProps) {
  const isAI = sender === "ai";

  return (
    <div
      className={`flex mb-4 ${
        isAI ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[75%] px-5 py-4 rounded-2xl ${
          isAI
            ? "bg-[#5A1E2A] text-white"
            : "bg-white border border-gray-300"
        }`}
      >
        {message}
      </div>
    </div>
  );
}