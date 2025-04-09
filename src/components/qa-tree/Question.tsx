import { PropsWithChildren } from 'react';
import { useQATreeContext } from './QATree';

function Question({ value }: PropsWithChildren<{ value: string }>) {
  const { } = useQATreeContext();

  // return <div className="flex flex-col gap-2 border border-slate-300 p-2">
  //   <div className="font-bold">{value}</div>
  // </div>
}

export const Q = Question;