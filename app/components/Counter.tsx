"use client";

import React, { useState } from "react";

export interface CounterProps {}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>You clicked {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
