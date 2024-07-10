import ToyRobot from './ToyRobot';

const handleCommand = (robot: ToyRobot, command: string): string | null => {
  const [cmd, args] = command.split(' ');
  switch (cmd) {
    case 'PLACE':
      if (args) {
        const [x, y, direction] = args.split(',');
        robot.place(parseInt(x, 10), parseInt(y, 10), direction as any);
      }
      break;
    case 'MOVE':
      robot.move();
      break;
    case 'LEFT':
      robot.left();
      break;
    case 'RIGHT':
      robot.right();
      break;
    case 'REPORT':
      return robot.report();
    default:
      return 'Invalid command';
  }
  return null;
};

export default handleCommand;
