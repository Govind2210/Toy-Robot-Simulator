'use client'
import { useState } from 'react';
import ToyRobot from './lib/ToyRobot';
import handleCommand from './lib/commandHandler';

const Home = () => {
  const [robot] = useState(new ToyRobot());
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = handleCommand(robot, command);
    if (result) {
      setOutput(result);
    }
    setCommand('');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Toy Robot Simulator</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-4 shadow-md rounded-md">
        <input
          type="text"
          value={command}
          onChange={handleInputChange}
          placeholder="Enter command"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Execute
        </button>
      </form>
      {output && (
        <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-md">
          {output}
        </div>
      )}
    </div>
  );
};

export default Home;

