import HintsAndTricks from "../AptitueExam/HintsAndTricks";
import Qustion from "../AptitueExam/Qustion";
import SubmitButton from "../AptitueExam/SubmitButton";
import ChatBox from "../AptitueExam/ChatBox";
import TextInput from "../Codin/TextInput";

function Cod() {
  return (
    <>
      <div className="app-container">
        <div className="left-half">
          <HintsAndTricks />
        </div>
        <div className="right-half">
          <div className="top-right">
            <Qustion />
          </div>
          <div className="bottom-right">
            <TextInput />
            <SubmitButton />
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
}
export default Cod;
