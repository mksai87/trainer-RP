import HintsAndTricks from "../AptitueExam/HintsAndTricks";

import MockInterview from "../Codin/MockInterview";

function Mock() {
  return (
    <>
      <div className="app-container">
        <div className="left-half">
          <HintsAndTricks Titel="qq" />
        </div>
        <div className="right-half">
          <MockInterview></MockInterview>
        </div>
      </div>
    </>
  );
}
export default Mock;
