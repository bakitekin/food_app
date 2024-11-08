const pallete = [
  {
    text: '#f97316', // orange
    bgColor: opacity => `rgba(251, 146, 60, ${opacity})`,
  },
  {
    text: '#3b82f6', // blue
    bgColor: opacity => `rgba(59, 130, 246, ${opacity})`,
  },
  {
    text: '#34d399', // green
    bgColor: opacity => `rgba(52, 211, 153, ${opacity})`,
  },
  {
    text: '#f43f5e', // pink
    bgColor: opacity => `rgba(244, 63, 94, ${opacity})`,
  },
  {
    text: '#6366f1', // indigo
    bgColor: opacity => `rgba(99, 102, 241, ${opacity})`,
  },
];

export const themeColors = {
  ...pallete[0],
};
