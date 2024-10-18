const currencyNews: Map<string, string[]> = new Map([
    ["EUR", [
      "ECB Announces Rate Hike Amid Inflation Concerns",
      "Eurozone Economic Growth Slows in Q3"
    ]],
    ["CHF", [
      "Swiss National Bank Intervenes to Stabilize Franc",
      "Switzerland Reports Trade Surplus Amid Global Uncertainty"
    ]],
    ["USD", [
      "US Federal Reserve Signals Further Interest Rate Increases",
      "Strong US Jobs Report Boosts Dollar Confidence"
    ]],
    ["GBP", [
      "Bank of England Warns of Possible Recession in 2024",
      "UK Inflation Hits 20-Year High, Pressuring Pound"
    ]],
    ["CNY", [
      "China's Manufacturing Sector Contracts for Third Consecutive Month",
      "Government Implements New Measures to Boost Domestic Consumption"
    ]],
    ["AUD", [
      "Australia Posts Record Trade Surplus as Commodity Prices Soar",
      "RBA Holds Rates Steady, Cites Global Economic Risks"
    ]],
    ["JPY", [
      "Bank of Japan Maintains Negative Interest Rates Despite Inflation",
      "Japan's Export Numbers Decline Amid Global Slowdown"
    ]],
    ["PLN", [
      "Poland's Central Bank Cuts Rates to Stimulate Economic Growth",
      "Polish GDP Growth Surpasses EU Average in Q2"
    ]],
  ]);

  export const getCurrencyNews = (currency: string): string[]  => {
    const news = currencyNews.get(currency);
    if(news) {
        return news;
    } else {
        return [];
    }
  }