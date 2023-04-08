import React, { useState } from "react";

export default function useSpinner() {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartLoading = () => setIsLoading(true);
  const handleStopLoading = () => setIsLoading(false);

  return [isLoading, handleStartLoading, handleStopLoading];
}
