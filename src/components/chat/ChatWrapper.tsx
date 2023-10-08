import { ChatContextProvider } from "./ChatContext";

const ChatWrapper = () => {
  const fileId = "1";
  return (
    <ChatContextProvider fileId={fileId}>
      <div>ChatWrapper</div>
    </ChatContextProvider>
  );
};

export default ChatWrapper;
