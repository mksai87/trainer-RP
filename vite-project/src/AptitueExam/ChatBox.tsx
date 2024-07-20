interface ChatBoxProps {
  aiResponse: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ aiResponse }) => {
  return (
    <div>
      <pre
        style={{
          color: aiResponse.toLowerCase().startsWith("c") ? "green" : "red",
        }}
      >
        <b> {aiResponse} </b>
      </pre>
    </div>
  );
};

export default ChatBox;
