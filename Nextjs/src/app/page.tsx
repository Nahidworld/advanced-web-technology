



//first class
// interface Users{
//   id:number;
//   name:string;
//   username:string;
//   email:string;
//   website:string;
// }

// export default async function Home(){
//   const a = await fetch('https://jsonplaceholder.typicode.com/users');
//   const user:Users[]= await a.json();

//   return (
//     //user.map((user)=> (user.name))
//     //user.map((user)=>(<li key={user.id}> {user.name}</li>))
//     <div>
//     <div>
//       <h1>User List</h1>
//       {user.map((user)=>(<li key={user.id}> {user.name}</li>))}
//     </div>
//     <div>
//       <h2>User Table</h2>
//       <table style={{ border: '2px solid black'}}>
//         <thead>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>UserName</th>
//           <th>Email</th>
//           <th>Website</th>
//         </tr>
//         </thead>
        
//         <tbody>
//           {user.map((user)=>(
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.website}</td>
//             </tr>
//           ))}
//         </tbody>
        
//       </table>
//     </div>
//     </div>
//   );
// }

// // export function Home();