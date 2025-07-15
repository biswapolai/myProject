import { useState } from "react";

export const useExample = () => {
  const [value, setValue] = useState(null);
  return { value, setValue };
};
