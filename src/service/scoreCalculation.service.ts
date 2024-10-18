
/**
 * Calculates the score for the exchange between two currencies based on the last 5 exchange rates.
 * @param currencyOne - The first currency.
 * @param currencyTwo - The second currency.
 * @param exchangeRates - A list of the last 5 exchange rates between the two currencies.
 * @returns A score between 0 and 100.
 */
export const calculateExchangeScore = (
    currencyOne: string,
    currencyTwo: string,
    exchangeRates: number[]
  ): number => {
    if (exchangeRates.length !== 5) {
      throw new Error("The exchangeRates array must contain exactly 5 values.");
    }
  
    // Calculate the absolute differences between consecutive exchange rates
    const differences = exchangeRates.slice(1).map((rate, index) => Math.abs(rate - exchangeRates[index]));
  
    // Calculate the average of the differences
    const averageDifference = differences.reduce((sum, diff) => sum + diff, 0) / differences.length;
  
    // Calculate the percentage score based on the average difference (lower difference means higher score)
    // Assuming a maximum difference of 10 for normalization, adjust as needed
    const maxDifference = 10;
    const stabilityScore = Math.max(0, 100 - (averageDifference / maxDifference) * 100);
  
    return parseFloat(stabilityScore.toFixed(2)); // Return score rounded to 2 decimal places
  }