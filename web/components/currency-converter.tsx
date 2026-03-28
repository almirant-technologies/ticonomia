"use client";

import { useState } from "react";
import { ArrowLeftRight, ArrowRightLeft } from "lucide-react";

interface CurrencyConverterProps {
  buyRate: number;
  sellRate: number;
}

export function CurrencyConverter({ buyRate, sellRate }: CurrencyConverterProps) {
  const [amount, setAmount] = useState<string>("");
  const [activeInput, setActiveInput] = useState<"left" | "right">("left");
  const [direction, setDirection] = useState<"crc-to-usd" | "usd-to-crc">("crc-to-usd");

  const isCrcToUsd = direction === "crc-to-usd";

  const numAmount = parseFloat(amount) || 0;

  // Derive left and right display values based on active input
  let leftVal = "";
  let rightVal = "";

  if (activeInput === "left") {
    leftVal = amount;
    if (amount) {
      rightVal = isCrcToUsd ? (numAmount / sellRate).toFixed(2) : (numAmount * buyRate).toFixed(2);
    }
  } else {
    rightVal = amount;
    if (amount) {
      leftVal = isCrcToUsd ? (numAmount * sellRate).toFixed(2) : (numAmount / buyRate).toFixed(2);
    }
  }

  const handleLeftChange = (val: string) => {
    setActiveInput("left");
    setAmount(val);
  };

  const handleRightChange = (val: string) => {
    setActiveInput("right");
    setAmount(val);
  };

  const toggleDirection = () => {
    setDirection((prev) => (prev === "crc-to-usd" ? "usd-to-crc" : "crc-to-usd"));
    setAmount("");
  };

  return (
    <div 
      className="flex flex-col items-center w-full max-w-4xl mx-auto gap-8 sm:gap-12 py-4 sm:py-10"
      role="region"
      aria-label="Conversor de monedas"
    >
      {/* Dynamic Header */}
      <div className="flex flex-row items-center justify-between sm:justify-center w-full px-2 sm:px-0 sm:gap-4 text-[2rem] sm:text-4xl font-extrabold tracking-tight">
        <div className="flex flex-col sm:flex-row leading-[1.1] sm:leading-tight">
          <span>Tengo</span>
          <span className={`sm:ml-2 ${isCrcToUsd ? "text-blue-500" : "text-lime-500"}`}>
            {isCrcToUsd ? "colones" : "dólares"}
          </span>
        </div>
        <ArrowLeftRight className="w-6 h-6 sm:w-8 sm:h-8 font-light text-muted-foreground mx-2" aria-hidden="true" />
        <div className="flex flex-col sm:flex-row leading-[1.1] sm:leading-tight">
          <span>Quiero</span>
          <span className={`sm:ml-2 ${!isCrcToUsd ? "text-blue-500" : "text-lime-500"}`}>
            {!isCrcToUsd ? "colones" : "dólares"}
          </span>
        </div>
      </div>

      {/* Converter UI */}
      <div className="flex flex-col sm:flex-row items-center w-full gap-2 sm:gap-6 mt-4 sm:mt-0">
        {/* Left Field: Always Input */}
        <div className="flex-1 w-full flex flex-col gap-2">
          <label htmlFor="left-input" className="text-sm font-medium text-muted-foreground ml-2">
            {isCrcToUsd ? "Colones" : "Dólares"}
          </label>
          <div className="relative">
            <input
              id="left-input"
              type="number"
              value={leftVal}
              onChange={(e) => handleLeftChange(e.target.value)}
              placeholder="0"
              className="w-full text-right text-4xl sm:text-5xl h-24 sm:h-28 px-6 bg-muted/70 text-foreground border-none rounded-3xl outline-none focus:ring-4 focus:ring-primary/20 transition-all font-light [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>
        </div>

        {/* Swap Controls */}
        <div className="flex items-center justify-center my-4 sm:my-0 sm:mt-7 mx-0 sm:mx-2 z-10 shrink-0">
          <button
            onClick={toggleDirection}
            className="p-3 bg-card hover:bg-muted border shadow-md rounded-full transition-all group"
            aria-label="Intercambiar conversión de divisas"
          >
            <ArrowRightLeft className="w-7 h-7 text-lime-500 group-hover:scale-110 transition-transform" aria-hidden="true" />
          </button>
        </div>

        {/* Right Field: Always Output/Input */}
        <div className="flex-1 w-full flex flex-col gap-2">
          <label htmlFor="right-input" className="text-sm font-medium text-muted-foreground ml-2">
            {!isCrcToUsd ? "Colones" : "Dólares"}
          </label>
          <div className="relative">
            <input
              id="right-input"
              type="number"
              value={rightVal}
              onChange={(e) => handleRightChange(e.target.value)}
              placeholder="0"
              className={`w-full text-right text-4xl sm:text-5xl h-24 sm:h-28 px-6 border-none rounded-3xl outline-none focus:ring-4 focus:ring-black/20 dark:focus:ring-white/30 transition-colors font-light placeholder:text-white/60 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${!isCrcToUsd
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                : "bg-lime-500 text-white shadow-lg shadow-lime-500/20"
                }`}
            />
          </div>
        </div>
      </div>

      {/* Optional Context about current active rate */}
      <div className="text-sm text-muted-foreground">
        Usando tasa oficial del Banco Central de Costa Rica:{" "}
        <span className="font-semibold text-foreground">
          {isCrcToUsd ? `Venta: ₡${sellRate}` : `Compra: ₡${buyRate}`}
        </span>
      </div>
    </div>
  );
}
