import { AI, Human } from "../../../assets/icons";
import { useState } from "react";
import {
  getConversationList,
  sendAnswer,
} from "../../../services/endpoint.service";

const ChatWidget = () => {
  const [question, setQuestion] = useState("");
  const [conversationList, setConversationList] = useState([]);

  const onTypingMessage = (event) => {
    setQuestion(event.target.value);
  };

  const handleSendQuestion = async (question) => {
    let session_id = localStorage.getItem("sessionId");
    console.log(session_id);
    console.log(question);
    await sendAnswer({ question, session_id }).then();

    await getConversationList(session_id).then((res) => {
      console.log(res);
      setConversationList(res.data.conversation);
    });
  };

  const renderResponseTemplate = (text, isHuman) => {
    return (
      <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
        <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
          <div className="rounded-full bg-gray-100 border p-1">
            {isHuman ? <Human /> : <AI />}
          </div>
        </span>
        <p className="leading-relaxed">
          <span className="block font-bold text-gray-700">{isHuman ? "Human" : "AI"}</span>
          {text}
        </p>
      </div>
    );
  };
  return (
    <div
      className="fixed flex flex-col bottom-[calc(4rem+1.5rem)] right-0 mr-4 
                bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[85%]"
    >
      <div className="flex flex-col space-y-1.5 pb-6">
        <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
      </div>

      <div className="pr-4 h-[474px]">
        {conversationList.map((value, index) => (
          <div key={index}>
            {renderResponseTemplate(value.question, true)}
            {renderResponseTemplate(value.answer, false)}
          </div>
        ))}
      </div>

      <div class="flex items-center pt-0">
        <div class="flex items-center justify-center w-full space-x-2">
          <input
            class="flex h-10 w-full rounded-md border 
                            border-[#e5e7eb] px-3 py-2 text-sm 
                            placeholder-[#6b7280] focus:outline-none focus:ring-2 
                            focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 
                            text-[#030712] focus-visible:ring-offset-2"
            placeholder="Type your message"
            value={question}
            onChange={onTypingMessage}
          />

          <button
            onClick={() => handleSendQuestion(question)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium 
                            text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50
                            bg-black 
                            hover:bg-[#111827E6] h-10 px-4 py-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
