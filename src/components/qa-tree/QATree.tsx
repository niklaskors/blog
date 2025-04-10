'use client'
import React from 'react';
import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

export interface Tree {
  id: number;
  question: string;
  answer?: string;
  tree: Tree[]
}

export interface TreeProps {

}

export const TreeQAContext = createContext<{
  id: number;
  addQuestion: (args: { question: string, answer?: string }) => void;
}>({
  id: 0,
  addQuestion: () => { }
});


export function useQATreeContext() {
  const context = useContext(TreeQAContext);
  if (context === undefined) {
    throw new Error('Questions and Answers must be used within a QATree');
  }
  return context;
}
export function Q(props: { value: string; children?: React.ReactNode }) {
  return <>{props.children}</>;
}

export function A(props: { value: string }) {
  return null;
}



export function QATree({ children }: PropsWithChildren<TreeProps>) {
  const value = useMemo(() => {
    return {
    }
  }, [])

  return (
    <TreeQAContext.Provider value={value as any}>
      <div className='border-l-1 border-neutral-200 pl-4 p-2 pb-4 flex flex-col gap-2'>
        {children}
      </div>
    </TreeQAContext.Provider>)



}