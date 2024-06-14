// @types.poin.ts
export interface IPoin {
  id: number;
  title: string;
  description: string;
  status: boolean;
}
export type PoinContextType = {
  poin: number;
  // saveTodo: (todo: ITodo) => void;
  update: (id: number) => void;
};
