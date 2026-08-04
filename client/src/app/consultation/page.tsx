"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ChatBubble from "@/components/consultation/ChatBubble";
import ChatInput from "@/components/consultation/ChatInput";
import ProgressBar from "@/components/consultation/ProgressBar";
import api from "@/lib/api";

type Message = {
  sender: "ai" | "user";
  message: string;
};

const questions = [
  "Hello! I'm CHARIS, your Luxury AI Gift Concierge. ✨",
  "Who is the gift for?",
  "What is your relationship with them?",
  "What is the occasion?",
  "What is your budget?",
  "Describe their personality in a few words.",
  "What are their interests or hobbies?",
  "What emotional impact do you want this gift to create?",
];

export default function Consultation() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [finished, setFinished] = useState(false);

  const [answers, setAnswers] = useState<string[]>([]);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      message: questions[0],
    },
  ]);

  const handleSend = async (text: string) => {
    const newAnswers = [...answers, text];
    setAnswers(newAnswers);

    const updated: Message[] = [
      ...messages,
      {
        sender: "user",
        message: text,
      },
    ];

    // Abhi aur questions baaki hain
    if (step < questions.length) {
      updated.push({
        sender: "ai",
        message: questions[step],
      });

      setMessages(updated);
      setStep(step + 1);
      return;
    }

    // Last answer ho gaya
    updated.push({
      sender: "ai",
      message:
        "Perfect! I now know exactly what you're looking for. Preparing your luxury recommendations...",
    });

    setMessages(updated);
    setFinished(true);

    try {
      await api.post("/consultation", {
        recipient: newAnswers[0],
        relationship: newAnswers[1],
        occasion: newAnswers[2],
        budget: Number(newAnswers[3]),
        personality: newAnswers[4],
        interests: newAnswers[5],
        emotion: newAnswers[6],
      });

      router.push(
        `/recommendations?relationship=${encodeURIComponent(
          newAnswers[1]
        )}&occasion=${encodeURIComponent(
          newAnswers[2]
        )}&budget=${encodeURIComponent(newAnswers[3])}`
      );
    } catch (error) {
      console.error(error);

      // Demo ke liye direct recommendation page
      router.push(
        `/recommendations?relationship=${encodeURIComponent(
          newAnswers[1]
        )}&occasion=${encodeURIComponent(
          newAnswers[2]
        )}&budget=${encodeURIComponent(newAnswers[3])}`
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F5F2] py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-[#5A1E2A] text-center mb-6">
          AI Gift Consultation
        </h1>

        <ProgressBar
          step={Math.min(step, questions.length)}
          total={questions.length}
        />

        <div className="h-[500px] overflow-y-auto border rounded-2xl p-6 bg-gray-50">
          {messages.map((msg, index) => (
            <ChatBubble
              key={index}
              sender={msg.sender}
              message={msg.message}
            />
          ))}
        </div>

        {!finished ? (
          <ChatInput onSend={handleSend} />
        ) : (
          <div className="text-center mt-6">
            <p className="text-[#5A1E2A] font-semibold">
              Preparing your personalized recommendations...
            </p>
          </div>
        )}
      </div>
    </main>
  );
}