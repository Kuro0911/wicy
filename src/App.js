import "./App.css";
import { ChangeRank } from "./components/changeRank";
import { HomePage } from "./components/homePage";
import { MarkFeedback } from "./components/markFeedback";
import { ProfFeedback } from "./components/profFeedback";
import { SelectYourTeam } from "./components/selectYourTeam";
import { StaffLogin } from "./components/staffLogin";
import { StudentLogin } from "./components/studentLogin";
import { ViewStudent } from "./components/viewStudent";
import { WelcomeProf } from "./components/welcomeProf";
import { WelcomeStudent } from "./components/welcomeStudent";

function App() {
  return (
    <div className="App overflow-hidden h-screen w-screen">
      <HomePage />
      <StudentLogin />
      <StaffLogin />
      <WelcomeStudent />
      <WelcomeProf />
      <ProfFeedback />
      <SelectYourTeam />
      <ChangeRank />
      <ViewStudent />
      <MarkFeedback />
    </div>
  );
}

export default App;
