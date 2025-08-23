import React, { useEffect, useState } from 'react';

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

  const styles = {
    profileContainer: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: '#f8fafc',
      color: '#1f2937',
      lineHeight: '1.6',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
    } as React.CSSProperties,

    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem',
    } as React.CSSProperties,

    profileHeader: {
      background: 'white',
      borderRadius: '12px',
      padding: '2rem',
      marginBottom: '2rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap' as const,
      gap: '1.5rem',
    } as React.CSSProperties,

    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    } as React.CSSProperties,

    avatar: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '2rem',
      fontWeight: '600',
    } as React.CSSProperties,

    userDetails: {
      display: 'flex',
      flexDirection: 'column' as const,
    } as React.CSSProperties,

    userId: {
      fontSize: '1.25rem',
      color: '#2563eb',
      marginBottom: '0.25rem',
      fontWeight: '500',
      margin: '0 0 0.25rem 0',
    } as React.CSSProperties,

    userName: {
      fontSize: '1.125rem',
      color: '#374151',
      fontWeight: '500',
      margin: 0,
    } as React.CSSProperties,

    scoreSection: {
      textAlign: 'right' as const,
    } as React.CSSProperties,

    score: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '0.25rem',
    } as React.CSSProperties,

    scoreLabel: {
      color: '#6b7280',
      fontSize: '0.875rem',
      marginBottom: '1rem',
    } as React.CSSProperties,

    progressContainer: {
      width: '200px',
      marginBottom: '0.75rem',
    } as React.CSSProperties,

    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#e5e7eb',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '0.5rem',
    } as React.CSSProperties,

    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%)',
      borderRadius: '4px',
      transition: 'width 1.5s ease-out',
    } as React.CSSProperties,

    progressText: {
      fontSize: '0.875rem',
      color: '#6b7280',
    } as React.CSSProperties,

    rank: {
      color: '#2563eb',
      fontWeight: '600',
      fontSize: '1.125rem',
    } as React.CSSProperties,

    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
    } as React.CSSProperties,

    skillCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    } as React.CSSProperties,

    skillCardHover: {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transform: 'translateY(-2px)',
    } as React.CSSProperties,

    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1.5rem',
    } as React.CSSProperties,

    cardIcon: {
      width: '48px',
      height: '48px',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: '600',
      fontSize: '1.25rem',
    } as React.CSSProperties,

    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937',
      margin: 0,
    } as React.CSSProperties,

    levelProgress: {
      marginBottom: '1rem',
    } as React.CSSProperties,

    levelHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0.5rem',
    } as React.CSSProperties,

    levelLabel: {
      fontSize: '0.875rem',
      color: '#6b7280',
      fontWeight: '500',
    } as React.CSSProperties,

    levelPercentage: {
      fontSize: '0.875rem',
      color: '#1f2937',
      fontWeight: '600',
    } as React.CSSProperties,

    levelBar: {
      width: '100%',
      height: '6px',
      backgroundColor: '#e5e7eb',
      borderRadius: '3px',
      overflow: 'hidden',
    } as React.CSSProperties,

    levelFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%)',
      borderRadius: '3px',
      transition: 'width 1.2s ease-out',
    } as React.CSSProperties,

    continueBtn: {
      width: '100%',
      background: '#2563eb',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      fontSize: '0.875rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginTop: '1rem',
    } as React.CSSProperties,

    continueBtnHover: {
      background: '#1d4ed8',
      transform: 'translateY(-1px)',
    } as React.CSSProperties,
  };

  // Responsive styles
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;

  const responsiveStyles = {
    profileHeader: {
      ...styles.profileHeader,
      ...(isMobile && {
        flexDirection: 'column' as const,
        textAlign: 'center' as const,
      }),
    },
    userInfo: {
      ...styles.userInfo,
      ...(isMobile && {
        flexDirection: 'column' as const,
        textAlign: 'center' as const,
      }),
    },
    scoreSection: {
      ...styles.scoreSection,
      ...(isMobile && {
        textAlign: 'center' as const,
      }),
    },
    progressContainer: {
      ...styles.progressContainer,
      ...(isMobile && {
        width: '100%',
        maxWidth: '250px',
      }),
    },
    container: {
      ...styles.container,
      ...(isMobile && {
        padding: '1rem',
      }),
    },
    profileHeaderPadding: {
      ...(isSmallMobile && {
        padding: '1.5rem',
      }),
    },
    skillCardPadding: {
      ...(isSmallMobile && {
        padding: '1.25rem',
      }),
    },
    score: {
      ...styles.score,
      ...(isSmallMobile && {
        fontSize: '1.75rem',
      }),
    },
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            padding: 0;
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-in {
            animation: slideIn 0.6s ease-out forwards;
          }

          .card-1 { animation-delay: 0.1s; }
          .card-2 { animation-delay: 0.2s; }
          .card-3 { animation-delay: 0.3s; }
          .card-4 { animation-delay: 0.4s; }
        `}
      </style>
      
      <div style={styles.profileContainer}>
        <div style={responsiveStyles.container}>
          {/* Profile Header */}
          <header 
            style={{
              ...responsiveStyles.profileHeader,
              ...responsiveStyles.profileHeaderPadding,
            }} 
            className="animate-in"
          >
            <div style={responsiveStyles.userInfo}>
              <div style={styles.avatar}>
                {getInitials(userData.name)}
              </div>
              <div style={styles.userDetails}>
                <h2 style={styles.userId}>User ID: {userData.userId}</h2>
                <p style={styles.userName}>Name: {userData.name}</p>
              </div>
            </div>
            <div style={responsiveStyles.scoreSection}>
              <div style={responsiveStyles.score}>
                {userData.score} / {userData.totalScore}
              </div>
              <div style={styles.scoreLabel}>Programs Solved</div>
              <div style={responsiveStyles.progressContainer}>
                <div style={styles.progressBar}>
                  <div 
                    style={{
                      ...styles.progressFill,
                      width: animateProgress ? `${userData.completionPercentage}%` : '0%'
                    }}
                  />
                </div>
                <div style={styles.progressText}>
                  {userData.completionPercentage}% Complete
                </div>
              </div>
              <div style={styles.rank}>Rank: {userData.rank}</div>
            </div>
          </header>

          {/* Skill Cards */}
          <main style={styles.cardsContainer}>
            {skillCards.map((card, index) => (
              <div 
                key={card.id}
                style={{
                  ...styles.skillCard,
                  ...responsiveStyles.skillCardPadding,
                }}
                className={`animate-in card-${index + 1}`}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, styles.skillCardHover);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.cardHeader}>
                  <div style={styles.cardIcon}>{card.icon}</div>
                  <h3 style={styles.cardTitle}>{card.title}</h3>
                </div>
                
                {card.levels.map((level) => (
                  <div key={level.level} style={styles.levelProgress}>
                    <div style={styles.levelHeader}>
                      <span style={styles.levelLabel}>Level {level.level}</span>
                      <span style={styles.levelPercentage}>{level.percentage}%</span>
                    </div>
                    <div style={styles.levelBar}>
                      <div 
                        style={{
                          ...styles.levelFill,
                          width: animateProgress ? `${level.percentage}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}

                <button 
                  style={styles.continueBtn}
                  onClick={() => handleContinuePractice(card.title)}
                  onMouseEnter={(e) => {
                    Object.assign(e.currentTarget.style, styles.continueBtnHover);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#2563eb';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Continue Practice
                </button>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};

export default Profile;
