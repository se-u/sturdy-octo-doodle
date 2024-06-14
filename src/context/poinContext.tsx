// context/PoinContext.tsx
import { Models } from "appwrite";
import * as React from "react";
import { PoinContextType } from "../@types/poin";
import createRepository from "../lib/CreateRepository";

export const PoinContext = React.createContext<PoinContextType | null>(null);

const PoinProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [poin, setPoin] = React.useState<number>(0);

  React.useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const poin = createRepository("poin");

    const response = await poin.get("sebastian");
    const res = response as Models.Document & {
      walletId: string;
      total: number;
    };
    if (res) {
      setPoin(res.total);
    }
  };
  // context/PoinContext.tsx
  // const saveTodo = (todo: IPoin) => {
  //   const newTodo: IPoin = {
  //     id: Math.random(), // not really unique - but fine for this example
  //     title: todo.title,
  //     description: todo.description,
  //     status: false,
  //   };
  //   setTodos([...todos, newTodo]);
  // };

  const update = async (num: number) => {
    const poin = createRepository("poin");
    await poin.update("sebastian", { total: num });
    init();
  };

  // context/PoinContext.tsx
  return (
    <PoinContext.Provider value={{ poin, update }}>
      {children}
    </PoinContext.Provider>
  );
};

export default PoinProvider;
