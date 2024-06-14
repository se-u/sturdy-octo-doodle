import { AppwriteException } from "appwrite";
import { databases } from "./appwrite";

// type Doc<T> = Models.Document & T;

export const DATABASE_ID = "klora-hybrid"; // Replace with your database ID

const createRepository = (collectionId: string) => {
  const get = async (id: string) => {
    try {
      const response = await databases.getDocument(
        DATABASE_ID,
        collectionId,
        id
      );
      return response;
    } catch (e: AppwriteException | unknown) {
      console.log("disni");
      if (e instanceof AppwriteException) {
        if (e.code === 404) {
          return null;
        }
      }
      throw e;
    }
  };

  // const list = async (): Promise<T[]> => {
  //     const response = await appwriteService.getDatabases().listDocuments(
  //         DATABASE_ID,
  //         collectionId
  //     );
  //     return response.documents;
  // };

  const create = async (
    documentId: string,
    data: Omit<Document, keyof Document>
  ) => {
    const response = await databases.createDocument(
      DATABASE_ID,
      collectionId,
      documentId,
      data
    );
    console.log(response);
    return response;
  };

  const update = async (
    id: string,
    data: Partial<Omit<Document, keyof Document>>
  ) => {
    const response = await databases.updateDocument(
      DATABASE_ID,
      collectionId,
      id,
      data
    );
    return response;
  };

  const remove = async (id: string): Promise<void> => {
    try {
      await databases.deleteDocument(DATABASE_ID, collectionId, id);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  return {
    get,
    // list,
    create,
    update,
    remove,
  };
};

export default createRepository;
