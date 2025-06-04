// ChatBubble.tsx
import React from 'react';

interface ChatBubbleProps {
  from: string;
  text: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ from, text }) => {
  const isUser = from === 'user';
  const isGPT = from === 'gpt';

  const bubbleColor = isUser
    ? 'bg-emerald-600 text-white'
    : isGPT
    ? 'bg-indigo-600 text-white'
    : 'bg-theme-main text-white';

  const align = isUser ? 'justify-end' : 'justify-start';
  const rounded = isUser ? 'rounded-bl-xl rounded-tl-xl rounded-tr-xl' : 'rounded-br-xl rounded-tr-xl rounded-tl-xl';

  return (
    <div className={`flex ${align} w-full`}>
      <div
        className={`max-w-[80%] px-4 py-3 my-1 text-sm shadow-md ${bubbleColor} ${rounded}`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatBubble;
