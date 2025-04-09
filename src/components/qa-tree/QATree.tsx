'use client'
import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react';

export interface Tree {
  question: string;
  answer?: string;
  tree: Tree[]
}

export interface TreeProps {

}

const TreeQAContext = createContext({
  addQuestion: () => any;
});


export function useQATreeContext() {
  const context = useContext(TreeQAContext);
  if (context === undefined) {
    throw new Error('Questions and Answers must be used within a QATree');
  }
  return context;
}


export function QATree({ children }: PropsWithChildren<TreeProps>) {
  const [tree, setTree] = useState<Tree[]>([]);


  const addQuestion = useCallback(({ question, answer }: { question: string, answer?: string }) => {
    const newTree = { question, answer, tree: [] };
    setTree([...tree, newTree]);
  }, [tree, setTree]);

  const value = useMemo(() => {
    return {
      addQuestion
    }
  }, [addQuestion])

  return (<TreeQAContext.Provider value={value}>
    {children}
  </TreeQAContext.Provider>)
}