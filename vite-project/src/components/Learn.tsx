import Card from "./Card";

const cardData = [
  {
    title: "CodeWithHarry",
    url: "/im/4.jpg",
    about:
      "CodeWithHarry offers in-depth tutorials on web development, Python, Java, and more, making complex concepts easy to understand.",
    link: "https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww",
  },
  {
    title: "Hitesh Choudhary",
    url: "/im/1.jpg",
    about:
      "Hitesh Choudhary offers a range of programming tutorials with a focus on backend development. He also shares vlogs discussing the latest tech trends.",
    link: "https://www.youtube.com/channel/UCXgGY0wkgOzynnHvSEVmE3A",
  },
  {
    title: "Telusko",
    url: "/im/3.jpg",
    about:
      "Telusko provides comprehensive tutorials on various programming languages and technologies, suitable for both beginners and advanced learners.",
    link: "https://www.youtube.com/user/javaboynavin",
  },
  {
    title: "Thapa Technical",
    url: "/im/4.jpg",
    about:
      "Thapa Technical focuses on frontend development with extensive tutorials on React, JavaScript, and other web technologies.",
    link: "https://www.youtube.com/c/ThapaTechnical",
  },
  {
    title: "The Net Ninja",
    url: "/im/5.jpg",
    about:
      "The Net Ninja offers a variety of tutorials on frontend and backend technologies, including JavaScript, React, and Node.js.",
    link: "https://www.youtube.com/c/TheNetNinja",
  },
  {
    title: "ProgrammingKnowledge",
    url: "/im/6.jpg",
    about:
      "ProgrammingKnowledge covers a wide range of programming languages and technologies with detailed tutorials and practical examples.",
    link: "https://www.youtube.com/c/ProgrammingKnowledge",
  },
  {
    title: "Geeky Shows",
    url: "/im/7.jpg",
    about:
      "Geeky Shows provides tutorials on various programming languages, frameworks, and technologies with a focus on practical learning.",
    link: "https://www.youtube.com/c/GeekyShows",
  },
  {
    title: "Academind",
    url: "/im/8.jpg",
    about:
      "Academind offers comprehensive tutorials on frontend development technologies such as React, Angular, and Vue.js.",
    link: "https://www.youtube.com/c/Academind",
  },
  {
    title: "LevelUpTuts",
    url: "/im/2(2).jpg",
    about:
      "LevelUpTuts provides tutorials on modern web development practices, including JavaScript, React, and CSS.",
    link: "https://www.youtube.com/c/LevelUpTuts",
  },
  {
    title: "JavaScript Mastery",
    url: "/im/10.jpg",
    about:
      "JavaScript Mastery focuses on JavaScript and related technologies, offering in-depth tutorials from basics to advanced concepts.",
    link: "https://www.youtube.com/c/JavaScriptMastery",
  },
  {
    title: "CodeWithHarry",
    url: "/im/4.jpg",
    about:
      "CodeWithHarry offers in-depth tutorials on web development, Python, Java, and more, making complex concepts easy to understand.",
    link: "https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww",
  },
  {
    title: "Hitesh Choudhary",
    url: "/im/1.jpg",
    about:
      "Hitesh Choudhary offers a range of programming tutorials with a focus on backend development. He also shares vlogs discussing the latest tech trends.",
    link: "https://www.youtube.com/channel/UCXgGY0wkgOzynnHvSEVmE3A",
  },
  {
    title: "Telusko",
    url: "/im/3.jpg",
    about:
      "Telusko provides comprehensive tutorials on various programming languages and technologies, suitable for both beginners and advanced learners.",
    link: "https://www.youtube.com/user/javaboynavin",
  },
  {
    title: "Thapa Technical",
    url: "/im/5.jpg",
    about:
      "Thapa Technical focuses on frontend development with extensive tutorials on React, JavaScript, and other web technologies.",
    link: "https://www.youtube.com/c/ThapaTechnical",
  },
  {
    title: "The Net Ninja",
    url: "/im/15.jpg",
    about:
      "The Net Ninja offers a variety of tutorials on frontend and backend technologies, including JavaScript, React, and Node.js.",
    link: "https://www.youtube.com/c/TheNetNinja",
  },
  {
    title: "Brackeys",
    url: "/im/nun.jpg",
    about:
      "Brackeys is a top channel for learning game development with Unity, offering tutorials on various game development aspects.",
    link: "https://www.youtube.com/user/Brackeys",
  },
  {
    title: "Blackthornprod",
    url: "/im/nun.jpg",
    about:
      "Blackthornprod offers game development tutorials, devlogs, and insightful videos on game design using Unity.",
    link: "https://www.youtube.com/channel/UC9Z1XWw1kmNVH3T9QG3vDFA",
  },
  {
    title: "Game Maker's Toolkit",
    url: "/im/18.jpg",
    about:
      "Game Maker's Toolkit delves into the design aspects of video games, exploring various mechanics and design philosophies.",
    link: "https://www.youtube.com/c/MarkBrownGMT",
  },
  {
    title: "Extra Credits",
    url: "/im/19.jpg",
    about:
      "Extra Credits provides educational content on game design, game development, and the gaming industry.",
    link: "https://www.youtube.com/user/ExtraCreditz",
  },
  {
    title: "GDC",
    url: "/im/nun.jpg",
    about:
      "The GDC (Game Developers Conference) channel features talks and lectures from industry professionals covering a wide range of game development topics.",
    link: "https://www.youtube.com/user/gdconf",
  },
  {
    title: "ProgrammingKnowledge",
    url: "/im/nun.jpg",
    about:
      "ProgrammingKnowledge covers a wide range of programming languages and technologies with detailed tutorials and practical examples.",
    link: "https://www.youtube.com/c/ProgrammingKnowledge",
  },
  {
    title: "Academind",
    url: "/im/nun.jpg",
    about:
      "Academind offers comprehensive tutorials on frontend development technologies such as React, Angular, and Vue.js.",
    link: "https://www.youtube.com/c/Academind",
  },
  {
    title: "LevelUpTuts",
    url: "/im/nun.jpg",
    about:
      "LevelUpTuts provides tutorials on modern web development practices, including JavaScript, React, and CSS.",
    link: "https://www.youtube.com/c/LevelUpTuts",
  },
  {
    title: "Traversy Media",
    url: "/im/nun.jpg",
    about:
      "Traversy Media offers tutorials on web development, covering everything from HTML and CSS to JavaScript frameworks and backend technologies.",
    link: "https://www.youtube.com/c/TraversyMedia",
  },
  {
    title: "Clever Programmer",
    url: "/im/nun.jpg",
    about:
      "Clever Programmer focuses on teaching web development and programming, particularly JavaScript, with a fun and engaging approach.",
    link: "https://www.youtube.com/c/CleverProgrammer",
  },
  {
    title: "TalentSprint",
    url: "/im/nun.jpg",
    about:
      "TalentSprint provides comprehensive training and tutorials for aptitude tests, competitive exams, and coding interviews.",
    link: "https://www.youtube.com/c/TalentSprintChannel",
  },
  {
    title: "CareerRide",
    url: "/im/nun.jpg",
    about:
      "CareerRide offers preparation tips, practice questions, and tutorials for various competitive exams and aptitude tests.",
    link: "https://www.youtube.com/user/careerride",
  },
  {
    title: "Adda247",
    url: "/im/nun.jpg",
    about:
      "Adda247 provides extensive content for bank exams, SSC, railways, and other competitive exams, including aptitude preparation.",
    link: "https://www.youtube.com/c/Adda247Channel",
  },
  {
    title: "Study IQ Education",
    url: "/im/nun.jpg",
    about:
      "Study IQ Education offers preparation tips, study materials, and tutorials for various government exams and aptitude tests.",
    link: "https://www.youtube.com/c/StudyIQEducation",
  },
  {
    title: "Wifistudy",
    url: "/im/nun.jpg",
    about:
      "Wifistudy provides tutorials and preparation strategies for government exams, including extensive aptitude test preparation.",
    link: "https://www.youtube.com/c/wifistudy",
  },
  {
    title: "Learn English with Let's Talk",
    url: "/im/nun.jpg",
    about:
      "Learn English with Let's Talk offers tutorials on spoken English, grammar, vocabulary, and communication skills.",
    link: "https://www.youtube.com/c/LearnEnglishwithLetsTalk",
  },
  {
    title: "English Addict with Mr. Duncan",
    url: "/im/nun.jpg",
    about:
      "English Addict with Mr. Duncan provides engaging lessons on English language and communication skills.",
    link: "https://www.youtube.com/c/duncaninchina",
  },
  {
    title: "Speak English With Vanessa",
    url: "/im/nun.jpg",
    about:
      "Speak English With Vanessa offers lessons on speaking English fluently and confidently with a focus on real-life conversations.",
    link: "https://www.youtube.com/c/speakenglishwithvanessa",
  },
  {
    title: "BBC Learning English",
    url: "/im/nun.jpg",
    about:
      "BBC Learning English provides high-quality lessons on English grammar, vocabulary, pronunciation, and more.",
    link: "https://www.youtube.com/user/bbclearningenglish",
  },
  {
    title: "Rachel's English",
    url: "/im/nun.jpg",
    about:
      "Rachel's English focuses on American English pronunciation and fluency with detailed tutorials and practice exercises.",
    link: "https://www.youtube.com/user/rachelsenglish",
  },
];

function Learn() {
  return (
    <div className="dropdown align-baseline d-flex flex-row form-control border-success">
      <ul className="list-group list-group-horizontal position-relative overflow-auto w-80">
        {cardData.map((card, index) => (
          <li className="list-group-item" key={index}>
            <Card
              titel={card.title}
              url={card.url}
              about={card.about}
              link={card.link}
              alter="/im/nun.jpg"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Learn;
