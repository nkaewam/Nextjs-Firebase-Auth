import { useState } from "react";

export const useGlobalLoading = () => {
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);

  return {
    isGlobalLoading,
    setIsGlobalLoading,
  };
};
