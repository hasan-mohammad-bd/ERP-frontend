export const backgroundColorPalette = [
    'blue',
    'red',
    'green',
    'pink',
    'gray',
];

// Utility function to get background color based on index
export const getBackgroundColor = (index: number) => {
    return backgroundColorPalette[index % backgroundColorPalette.length];
};
