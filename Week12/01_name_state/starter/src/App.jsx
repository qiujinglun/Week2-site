function UserProfile({ name, email }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      <h3>技能</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

function SocialLinks({ github, linkedin }) {
  return (
    <div className="social-links">
      <h3>社交媒體</h3>
      <ul>
        <li>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>

        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}

function ResultList1() {
  return (
    <div className="container">
      <h1 className="profile-title">個人資料卡</h1>      <UserProfile
        name="John Doe"
        email="john.doe@example.com"
      />

      <SkillList
        skills={["JavaScript", "React", "Node.js"]}
      />

      <SocialLinks
        github="https://github.com/"
        linkedin="https://linkedin.com"
      />
    </div>
  )
}

function ResultList2() {
  return (
    <div className="container">
      <h1 className="profile-title">個人資料卡</h1>      <UserProfile
        name="Even Huang"
        email="even.huang@example.com"
      />

      <SkillList
        skills={["JavaScript", "React", "Node.js"]}
      />

      <SocialLinks
        github="https://github.com/"
        linkedin="https://linkedin.com"
      />
    </div>
  )
}
function ResultList3() {
  return (

    <div className="container">
      <h1 className="profile-title">個人資料卡</h1>
      <UserProfile
        name="Eric Chen"
        email="eric.chen@example.com"
      />

      <SkillList
        skills={["Python", "Java", "React"]}
      />

      <SocialLinks
        github="https://github.com/"
        linkedin="https://linkedin.com"
      />
    </div>
  )
}

export default function App() {
  return (

    <div className="card-wrapper">

      <ResultList1 />
      <ResultList2 />
      <ResultList3 />
    </div>

  )
}