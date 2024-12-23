export const backgroundColorPalette = [
    'blue',
    'green',
    'red',
    'purple',
    'orange',
    'teal',
    'indigo',
    'pink',
    'cyan',
    'gray',
    'lime',
];

// Utility function to get background color based on index
export const getBackgroundColor = (index: number) => {
    return backgroundColorPalette[index % backgroundColorPalette.length];
};
