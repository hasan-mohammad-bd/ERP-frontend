export const backgroundColorPalette = [
    'bg-blue-200',
    'bg-green-200',
    'bg-red-200',
    'bg-purple-200',
    'bg-orange-200',
    'bg-teal-200',
    'bg-indigo-200',
    'bg-pink-200',
    'bg-cyan-200',
    'bg-gray-200',
    'bg-lime-200',
];

// Utility function to get background color based on index
export const getBackgroundColor = (index: number) => {
    return backgroundColorPalette[index % backgroundColorPalette.length];
};
