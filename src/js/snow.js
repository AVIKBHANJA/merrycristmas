export function createSnow() {
  const snowContainer = document.querySelector('.snow');
  const snowflakeCount = 50;

  for (let i = 0; i < snowflakeCount; i++) {
    createSnowflake(snowContainer);
  }
}

function createSnowflake(container) {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.textContent = '❅';
  
  const startPositionLeft = Math.random() * window.innerWidth;
  const animationDuration = 5 + Math.random() * 10;
  const opacity = 0.3 + Math.random() * 0.7;

  snowflake.style.cssText = `
    left: ${startPositionLeft}px;
    animation: fall ${animationDuration}s linear infinite;
    opacity: ${opacity};
  `;

  container.appendChild(snowflake);
}

// Add falling animation to stylesheet
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fall {
    0% {
      transform: translateY(-10vh) rotate(0deg);
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
    }
  }
`;
document.head.appendChild(styleSheet);