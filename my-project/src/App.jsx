import React, { useState } from "react";

function App() {
  const [replies, setReplies] = useState([]);
  const [queries, setQueries] = useState([]);

  function AddReplies(newReply) {
    setReplies([...replies, newReply]);
  }

  return (
    <>``
      <div className="pb-32 max-h-screen overflow-y-auto">
      <Query AddReplies={AddReplies} queries={queries} setQueries={setQueries} />
      
      {queries.map(function (query, idx) {
        return (
        <div key={idx}>
          <QueryCard child={query} />
          {replies[idx] ? <ReplyCard child={replies[idx]} /> : null}
        </div>
  );
})}



      </div>
    </>
  );
}

function ReplyCard({ child }) {
return (
  <div className="px-4 py-2 w-full text-left">
    <div className="inline-block bg-gray-200 text-black px-4 py-2 rounded-2xl max-w-xl">
      {child}
    </div>
  </div>
);
}

function QueryCard({ child }) {
return (
  <div className="px-4 py-2 w-full text-right">
    <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xl">
      {child}
    </div>
  </div>
);
}

function Query({ AddReplies, queries, setQueries }) {
  async function fetchQuery(prompt) {
    const response = await fetch("http://localhost:3000/?n=" + prompt, {
      method: "GET",
    });
    const data = await response.text();
    console.log("Reply from API: ", data);
    AddReplies(data);
  }

  function AddQueries() {
    const input = document.getElementById("query-input");
    const newQuery = input.value.trim();
    if (newQuery === "") return;
    input.value = "";
    setQueries([...queries, newQuery]);
    fetchQuery(newQuery);
  }

  return (
    <div className="fixed bottom-4 w-full flex justify-center">
      <div className="flex gap-2 bg-white p-4 rounded-xl shadow-md w-full max-w-3xl">
        <input
          id="query-input"
          type="text"
          className="flex-grow border border-gray-300 rounded-lg p-2 bg-gray-100"
          placeholder="Type your query..."
        />
        <button
          className="px-4 py-2 bg-yellow-500 rounded-full text-white hover:bg-blue-600"
          onClick={AddQueries}
        >
          Ask
        </button>
      </div>
    </div>
  );
}


export default App;


// import React, { useState } from "react";

// function App() {
//   const [replies, setReplies] = useState([]);
//   const [queries, setQueries] = useState([]);

//   function AddReplies(newReply) {
//     setReplies([...replies, newReply]);
//   }

//   return (
//     <>
//       <div className="pb-32 max-h-screen overflow-y-auto bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-500 min-h-screen relative">
//         {/* Floating background elements */}
//         <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-70 animate-bounce"></div>
//         <div className="absolute top-32 right-16 w-16 h-16 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
//         <div className="absolute top-64 left-1/4 w-12 h-12 bg-red-400 rounded-full opacity-50 animate-spin"></div>
//         <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-40 animate-bounce"></div>
//         <div className="absolute top-1/2 left-8 w-8 h-8 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
        
//         <Query AddReplies={AddReplies} queries={queries} setQueries={setQueries} />
             
//         {queries.map(function (query, idx) {
//           return (
//           <div key={idx} className="animate-fadeIn">
//             <QueryCard child={query} />
//             {replies[idx] ? <ReplyCard child={replies[idx]} /> : null}
//           </div>
//     ); })}
         
//       </div>
//     </>
//   );
// }

// function ReplyCard({ child }) {
// return (
//   <div className="px-4 py-2 w-full text-left">
//     <div className="inline-block bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 text-white px-6 py-4 rounded-3xl max-w-xl shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 border-4 border-white/50 animate-wiggle relative">
//       <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
//       <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
//       <span className="font-bold text-lg drop-shadow-lg">{child}</span>
//     </div>
//   </div>
// );
// }

// function QueryCard({ child }) {
// return (
//   <div className="px-4 py-2 w-full text-right">
//     <div className="inline-block bg-gradient-to-r from-fuchsia-500 via-purple-600 to-pink-600 text-white px-6 py-4 rounded-3xl max-w-xl shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-300 border-4 border-yellow-300/70 animate-pulse-slow relative">
//       <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-400 rounded-full animate-spin"></div>
//       <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
//       <span className="font-bold text-lg drop-shadow-lg">{child}</span>
//     </div>
//   </div>
// );
// }

// function Query({ AddReplies, queries, setQueries }) {
//   async function fetchQuery(prompt) {
//     const response = await fetch("http://localhost:3000/?n=" + prompt, {
//       method: "GET",
//     });
//     const data = await response.text();
//     console.log("Reply from API: ", data);
//     AddReplies(data);
//   }

//   function AddQueries() {
//     const input = document.getElementById("query-input");
//     const newQuery = input.value.trim();
//     if (newQuery === "") return;
//     input.value = "";
//     setQueries([...queries, newQuery]);
//     fetchQuery(newQuery);
//   }

//   return (
//     <div className="fixed bottom-4 w-full flex justify-center animate-bounce-subtle">
//       <div className="flex gap-4 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 p-6 rounded-3xl shadow-2xl w-full max-w-3xl border-4 border-white/60 transform hover:scale-105 transition-all duration-300 relative">
//         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
//         <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full animate-spin"></div>
//         <input
//           id="query-input"
//           type="text"
//           className="flex-grow border-4 border-purple-300 rounded-2xl p-4 bg-gradient-to-r from-yellow-200 to-pink-200 text-purple-800 font-bold placeholder-purple-600 focus:outline-none focus:border-cyan-400 focus:shadow-2xl focus:scale-105 transition-all duration-300 text-lg"
//           placeholder="Type your query... "
//         />
//         <button
//           className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl text-white font-black text-xl hover:from-green-500 hover:to-yellow-500 shadow-2xl transform hover:scale-110 hover:rotate-3 active:scale-95 transition-all duration-300 border-4 border-white/70 animate-pulse-slow"
//           onClick={AddQueries}
//         >
//           ASK! 
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;