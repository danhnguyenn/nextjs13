'use client';

import React, { useEffect } from "react";

export interface IErrorProps {
  error: string;
  reset: () => void;
}

export default function Error({ error, reset }: IErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2 className="text-2xl text-center">Somting went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
