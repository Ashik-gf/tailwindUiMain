import { useState } from 'react';


const commands = [
  { id: 1, name: 'help', description: 'Display list of available commands' },
  { id: 2, name: 'open', description: 'Open a file or a directory' },
  { id: 3, name: 'save', description: 'Save the current file' },
  { id: 4, name: 'exit', description: 'Exit the application' },
  // Add more commands as needed
];

export default function Simple() {
  const [query, setQuery] = useState('');
  
  // Filter commands based on query
  const filteredCommands = query === ''
    ? commands
    : commands.filter(command => command.name.toLowerCase().includes(query.toLowerCase()));

  return (
  <div className=' w-full h-full'>
      <div className=" w-[400px] flex flex-col justify-center   text-white p-4">
      <h1 className="text-2xl font-bold mb-4 text-black">Command Panel</h1>
      
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search commands..."
        className="border w-[400px] border-gray-700 rounded-md p-2 mb-4"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      {/* List of commands */}
      <ul className="">
        {filteredCommands.map(command => (
          <li key={command.id} className="py-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold">{command.name}</span>
              <span className="text-gray-400 text-sm">{command.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
}


