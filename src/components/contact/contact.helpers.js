export const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

export const getOrbitTransform = (index, isHover, isActive, total) => {
  const centerIndex = (total - 1) / 2;
  const normalSpacing = 8;
  const hoverSpacing = 10;
  const normalAmplitude = 14;
  const hoverAmplitude = 18;

  if (isActive) {
    const radius = 20;
    const angle = (index / total) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const rotation = ` rotate(${(angle * 180) / Math.PI + 90}deg)`;
    return { transform: `translate(${x}vw, ${y}vh)`, rotation };
  }

  if (isHover) {
    const x = (index - centerIndex) * hoverSpacing;
    const y = Math.sin(index * 0.9) * hoverAmplitude;
    return { transform: `translate(${x}vw, ${y}vh)`, rotation: "" };
  }

  const x = (index - centerIndex) * normalSpacing;
  const y = Math.sin(index * 0.9) * normalAmplitude;
  return { transform: `translate(${x}vw, ${y}vh)`, rotation: "" };
};
