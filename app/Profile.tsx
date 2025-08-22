import React, { useEffect, useState } from 'react';
import './Profile.css';

interface LevelProgress {
  level: number;
  percentage: number;
}

interface SkillCard {
  id: string;
  title: string;
  icon: string;
  levels: LevelProgress[];
}

interface UserData {
  userId: string;
  name: string;
  score: number;
  totalScore: number;
  completionPercentage: number;
  rank: number;
}

const Profile: React.FC = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  const userData: UserData = {
    userId: "759943",
    name: "Arpit Singh",
    score: 212,
    totalScore: 1200,
    completionPercentage: 71,
    rank: 832
  };

  const skillCards: SkillCard[] = [
    {
      id: "basic",
      title: "GNU-BASIC",
      icon: "GB",
      levels: [
        { level: 1, percentage: 55 },
        { level: 2, percentage: 22 },
        { level: 3, percentage: 19 }
      ]
    },
    {
      id: "intermediate",
      title: "GNU-INTERMEDIATE",
      icon: "GI",
      levels: [
        { level: 1, percentage: 33 },
        { level: 2, percentage: 7 },
        { level: 3, percentage: 7 }
      ]
    },
    {
      id: "advanced",
      title: "GNU-ADVANCED",
      icon: "GA",
      levels: [
        { level: 1, percentage: 14 },
        { level: 2, percentage: 7 },
        { level: 3, percentage: 7 }
      ]
    },
    {
      id: "expert",
      title: "GNU-EXPERT",
      icon: "GE",
      levels: [
        { level: 1, percentage: 14 },
        { level: 2, percentage: 7 },
        { level: 3, percentage: 7 }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleContinuePractice = (skillTitle: string) => {
    alert(`Starting ${skillTitle} practice session!`);
  };

  const getInitials = (name: string): string => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="profile-container">
      <div className="container">
        {/* Profile Header */}
        <header className="profile-header animate-in">
          <div className="user-info">
            <div className="avatar">
              {getInitials(userData.name)}
            </div>
            <div className="user-details">
              <h2>User ID: {userData.userId}</h2>
              <p>Name: {userData.name}</p>
            </div>
          </div>
          <div className="score-section">
            <div className="score">
              {userData.score} / {userData.totalScore}
            </div>
            <div className="score-label">Programs Solved</div>
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className={`progress-fill ${animateProgress ? 'animate' : ''}`}
                  style={{ 
                    width: animateProgress ? `${userData.completionPercentage}%` : '0%' 
                  }}
                />
              </div>
              <div className="progress-text">
                {userData.completionPercentage}% Complete
              </div>
            </div>
            <div className="rank">Rank: {userData.rank}</div>
          </div>
        </header>

        {/* Skill Cards */}
        <main className="cards-container">
          {skillCards.map((card, index) => (
            <div 
              key={card.id}
              className={`skill-card animate-in card-${index + 1}`}
            >
              <div className="card-header">
                <div className="card-icon">{card.icon}</div>
                <h3 className="card-title">{card.title}</h3>
              </div>
              
              {card.levels.map((level) => (
                <div key={level.level} className="level-progress">
                  <div className="level-header">
                    <span className="level-label">Level {level.level}</span>
                    <span className="level-percentage">{level.percentage}%</span>
                  </div>
                  <div className="level-bar">
                    <div 
                      className={`level-fill ${animateProgress ? 'animate' : ''}`}
                      style={{ 
                        width: animateProgress ? `${level.percentage}%` : '0%' 
                      }}
                    />
                  </div>
                </div>
              ))}

              <button 
                className="continue-btn"
                onClick={() => handleContinuePractice(card.title)}
              >
                Continue Practice
              </button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Profile;