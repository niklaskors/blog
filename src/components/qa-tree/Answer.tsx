import { PropsWithChildren } from 'react';

function Answer({ value }: PropsWithChildren<{ value: string }>) {
  return <div className="flex flex-col gap-2 border border-slate-300 p-2">
    <div className="font-bold">{value}</div>
  </div>
}

export const A = Answer;