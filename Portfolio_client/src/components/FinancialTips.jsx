import React, { useEffect, useState } from "react";
import { MdAttachMoney } from "react-icons/md";

const financialTips = [
  {
    tip: "Start saving early to benefit from compound interest.",
    quote:
      "Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn’t, pays it.",
    expert: "Albert Einstein",
  },
  {
    tip: "Create and stick to a budget to control your spending.",
    quote:
      "A budget is telling your money where to go instead of wondering where it went.",
    expert: "Dave Ramsey",
  },
  {
    tip: "Invest in a diversified portfolio to manage risk.",
    quote:
      "The only investors who shouldn’t diversify are those who are right 100% of the time.",
    expert: "John Templeton",
  },
  {
    tip: "Avoid high-interest debt and pay off credit cards in full.",
    quote: "Interest on debt grows without rain.",
    expert: "Yiddish Proverb",
  },
  {
    tip: "Build an emergency fund to cover unexpected expenses.",
    quote:
      "Do not save what is left after spending, but spend what is left after saving.",
    expert: "Warren Buffett",
  },
  {
    tip: "Understand your risk tolerance before investing.",
    quote: "Risk comes from not knowing what you're doing.",
    expert: "Warren Buffett",
  },
  {
    tip: "Reinvest dividends to accelerate wealth building.",
    quote:
      "The biggest thing about making money is time. You don't have to be particularly smart, you just have to be patient.",
    expert: "Warren Buffett",
  },
  {
    tip: "Avoid trying to time the market; focus on long-term investing.",
    quote:
      "Far more money has been lost by investors preparing for corrections, or trying to anticipate corrections, than has been lost in corrections themselves.",
    expert: "Peter Lynch",
  },
  {
    tip: "Keep your investment costs low to maximize returns.",
    quote: "In investing, you get what you don’t pay for.",
    expert: "Jack Bogle",
  },
  {
    tip: "Continually educate yourself about financial literacy.",
    quote: "An investment in knowledge pays the best interest.",
    expert: "Benjamin Franklin",
  },
];
export const FinancialTips = () => {
  const [showQuote, setShowQuote] = useState(financialTips[0]);

  useEffect(() => {
    setInterval(() => {
      setShowQuote(
        financialTips[Math.floor(Math.random() * financialTips.length)]
      );
    }, 5000);
  }, []);

  const { tip, quote, expert } = showQuote;
  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{
        height: "100%",
      }}
    >
      <div className="mb-5 text-center">
        <MdAttachMoney className="text-warning" style={{ fontSize: "10rem" }} />
        <div className="text-warning">Watch Your Money Gorw...</div>
      </div>
      <h4>{tip}</h4>
      <div className="fw-bolder">
        " {quote} "<p className="text-success">-{expert}</p>
      </div>
    </div>
  );
};
