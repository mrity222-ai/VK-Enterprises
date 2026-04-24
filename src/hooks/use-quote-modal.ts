
'use client';

import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';

type QuoteModalContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(
  undefined
);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return React.createElement(QuoteModalContext.Provider, { value }, children);
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (context === undefined) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider');
  }
  return context;
}
