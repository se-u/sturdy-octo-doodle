// import { useState } from "react";
// import { useIdeas } from "../lib/context/poins";

// export function TestAppWrite() {
//     const ideas = useIdeas();
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");

//     return (
//         <>
//             {/* Show the submit form to logged in users. */}
//             {ideas ? (
//                 <section>
//                     <h2>Submit Idea</h2>
//                     <form>
//                         <input
//                             type="text"
//                             placeholder="Title"
//                             value={title}
//                             onChange={(event) => {
//                                 setTitle(event.target.value);
//                             }}
//                         />
//                         <textarea
//                             placeholder="Description"
//                             value={description}
//                             onChange={(event) => {
//                                 setDescription(event.target.value);
//                             }}
//                         />
//                         <button
//                             type="button"
//                             onClick={() =>
//                                 ideas.add({
//                                     userId: "sebastian", title, description
//                                 })
//                             }
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 </section>
//             ) : (
//                 <section>
//                     <p>Please login to submit an idea.</p>
//                 </section>
//             )}
//             <section>
//                 <h2>Latest Ideas</h2>
//                 <ul>
//                     {ideas.current.map((idea) => (
//                         <li key={idea.$id}>
//                             <strong>{idea.title}</strong>
//                             {/* <p>{idea.description}</p> */}
//                             {/* Show the remove button to idea owner. */}
//                             {/* {user.current && user.current.$id === idea.userId && ( */}
//                             <button type="button" onClick={() => ideas.remove(idea.$id!)}>
//                                 Remove
//                             </button>
//                             {/* )} */}
//                         </li>
//                     ))}
//                 </ul>
//             </section>
//         </>
//     );
// }

export const TestAppWrite = () => {
    return <>Halo</>
}