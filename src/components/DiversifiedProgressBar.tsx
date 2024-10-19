import React from 'react';

interface Account {
    currency: string;
    iban: string;
    balance: number;
}

interface DiversifiedProgressBarProps {
    accounts: Account[];
    colorPalette?: string[];  // Optional color palette prop
}

const DiversifiedProgressBar: React.FC<DiversifiedProgressBarProps> = ({ accounts, colorPalette }) => {
    // Default accessible color palette
    const defaultColorPalette = [
        '#00796B', // Teal (Accessible and has good contrast)
        '#FBC02D', // Yellow (More vibrant yellow for better contrast)
        '#455A64', // Dark Gray-Blue (Darker for contrast)
        '#CFD8DC', // Light Gray (Contrast with dark elements)
        '#FFB300', // Bright Yellow (Accessible contrast)
        '#90A4AE', // Light Blue-Gray (Alternative light color)
        '#263238', // Very Dark Blue-Gray (Strong contrast for darker tones)
    ];

    // Use the provided colorPalette prop, or fallback to the default palette
    const colors = colorPalette || defaultColorPalette;

    // Helper function to get colors based on index
    const getColor = (index: number) => {
        return colors[index % colors.length];
    };

    // Calculate total balance
    const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

    // Map accounts data to sections with percentage and colors
    const sections = accounts.map((account, index) => ({
        label: account.currency,
        value: (account.balance / totalBalance) * 100, // Percentage of the total
        color: getColor(index), // Get color based on index
    }));

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Currency Diversification</h1>
            <div className="border border-gray-300 rounded-lg overflow-hidden h-10 flex w-full">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        title={`${section.label}: ${section.value.toFixed(2)}%`}
                        className={`flex items-center justify-center text-white text-md font-bold`}
                        style={{
                            width: `${section.value}%`,
                            backgroundColor: section.color,
                        }}
                    >
                        {section.value > 5 ? `${section.label}` : ''}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiversifiedProgressBar;
