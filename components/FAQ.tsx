import React, { useState, useRef, useEffect } from 'react';
import { UserCircleIcon, BotIcon } from './Icons';

const faqData = [
  {
    question: "What type of businesses do you work with?",
    answer: "We serve almost all types of businesses, with the exception of those in the construction and manufacturing industries.",
  },
  {
    question: "What are the prices for your services?",
    answer: "The cost varies per client as every business has unique needs. A consultation is required first to determine the best approach for you. Our service packages start from ₦7,500.",
  },
  {
    question: "How will you help me track my sales, expenses, and profit?",
    answer: "We will first assess your business and then offer a tailored solution, which could be custom templates, a mobile app, or professional accounting software. We also offer a monthly service where we can handle all the tracking for you.",
  },
  {
    question: "Can your company help with tax filing and payroll management?",
    answer: "Yes, we can. We currently provide tax filing and payroll management services for businesses registered in Lagos State and Ogun State.",
  },
  {
    question: "What reports can I get weekly or monthly?",
    answer: "Standard reports include Sales, Expenses, and a Profit and Loss statement. More specific reports can be provided where required.",
  },
  {
    question: "Which software tools do you use for record-keeping?",
    answer: "We are proficient with a variety of industry-standard accounting and bookkeeping tools, including Sage, QuickBooks, Zoho, Xero, Microsoft Excel & Google Sheets.",
  }
];

type Message = {
  id: number;
  type: 'question' | 'answer';
  text: string;
};

const FAQ: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, type: 'answer', text: "Hello! Have a question? Just click one of the topics below and I'll be happy to help." }
  ]);
  const [askedQuestions, setAskedQuestions] = useState<Set<string>>(new Set());
  const chatLogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);

  const handleQuestionClick = (question: string, answer: string) => {
    if (askedQuestions.has(question)) return;

    const newQuestion: Message = { id: Date.now(), type: 'question', text: question };
    setMessages(prev => [...prev, newQuestion]);
    setAskedQuestions(prev => new Set(prev).add(question));

    setTimeout(() => {
      const newAnswer: Message = { id: Date.now() + 1, type: 'answer', text: answer };
      setMessages(prev => [...prev, newAnswer]);
    }, 600);
  };

  const ChatBubble: React.FC<{ message: Message }> = ({ message }) => {
    const isAnswer = message.type === 'answer';
    
    return (
      <div className={`flex items-start gap-3 my-4 animate-fade-in-up ${isAnswer ? 'justify-start' : 'justify-end'}`}>
        {isAnswer && <div className="w-10 h-10 rounded-full bg-[#D2E862] flex items-center justify-center flex-shrink-0"><BotIcon className="w-6 h-6 text-[#0A2640]"/></div>}
        <div className={`p-4 rounded-2xl max-w-md text-sm md:text-base ${isAnswer ? 'bg-gray-100 text-gray-800 rounded-bl-none' : 'bg-[#0A2640] text-white rounded-br-none'}`}>
          <p>{message.text}</p>
        </div>
        {!isAnswer && <UserCircleIcon className="w-10 h-10 text-gray-400 flex-shrink-0"/>}
      </div>
    );
  };
  
  return (
    <section className="py-8 md:py-16 font-poppins bg-white">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A2640] mb-4 md:mb-6">Have a Question?</h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Get instant answers from our FAQ bot. Just select a topic to get started.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-gray-300/40 border border-gray-200/80 overflow-hidden">
          {/* Chat log */}
          <div 
            ref={chatLogRef} 
            className="h-80 sm:h-96 p-4 sm:p-6 overflow-y-auto bg-gray-50/50"
            style={{ scrollBehavior: 'smooth' }}
          >
            {messages.map((msg) => (
              <ChatBubble key={msg.id} message={msg} />
            ))}
          </div>

          {/* Question selection */}
          <div className="p-6 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 mb-4 text-center">Select a question:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {faqData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(item.question, item.answer)}
                  disabled={askedQuestions.has(item.question)}
                  className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 border overflow-hidden text-ellipsis
                    ${askedQuestions.has(item.question) 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-200' 
                      : 'bg-white text-[#0A2640] border-gray-300 hover:bg-gray-100 hover:border-gray-400'
                    }`
                  }
                  title={item.question}
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
       {/* FIX: The 'jsx' and 'global' attributes are not standard for the <style> tag in React and cause a TypeScript error.
           Removing them makes it a standard style tag, which will apply the animation globally as intended. */}
       <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
