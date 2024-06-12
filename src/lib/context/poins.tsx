import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { databases } from "../appwrite";
import { ID, Query, Models } from "appwrite";

export const DATABASE_ID = "klora-hybrid"; // Replace with your database ID
export const POINS_COLLECTION_ID = "poin"; // Replace with your collection ID

interface Poin extends Models.Document {
  walletId: string;
  total: string;
}

type PoinContextType = {
  current: Poin[];
  // add: (poin: {
  //   userId: string, title: string, description: string
  // }) => Promise<void>;
  // remove: (id: string) => Promise<void>;
};

const PoinsContext = createContext<PoinContextType | undefined>(undefined);

export function usePoins(): PoinContextType {
  const context = useContext(PoinsContext);
  if (!context) {
    throw new Error("usePoins must be used within an IdeasProvider");
  }
  return context;
}

type PoinProviderProps = {
  children: ReactNode;
};

export function PoinProvider({ children }: PoinProviderProps): JSX.Element {
  const [poin, setPoin] = useState<Poin[]>([]);

  // async function add(idea: {
  //   userId: string, title: string, description: string
  // }) {
  //   let response = await databases.createDocument(
  //     DATABASE_ID,
  //     POINS_COLLECTION_ID,
  //     ID.unique(),
  //     idea
  //   );

    // setIdeas((ideas) => [response as Idea, ...ideas].slice(0, 10));
  // }

  // async function remove(id: string): Promise<void> {
  //   await databases.deleteDocument(DATABASE_ID, POINS_COLLECTION_ID, id);
  //   setIdeas((currentIdeas) => currentIdeas.filter((idea) => idea.id !== id));
  //   await init();
  // }

  async function init(): Promise<void> {
    // const response = await databases.listDocuments(
    //   DATABASE_ID,
    //   POINS_COLLECTION_ID,
    //   [Query.orderDesc("$createdAt"), Query.limit(10)]
    // );

    // const response = await databases.getDocument(
    //   DATABASE_ID, POINS_COLLECTION_ID, "test1"
    // )
    const response2 = await databases.listDocuments(
      DATABASE_ID, POINS_COLLECTION_ID,[Query.equal("walletId", ["sebastian"])]
    )
    console.log(response2);

    // const poins = response.documents as Poin[];
    // console.log(poins);
    // setIdeas(poins);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <PoinsContext.Provider value={{ current: poin }}>
      {children}
    </PoinsContext.Provider>
  );
}


