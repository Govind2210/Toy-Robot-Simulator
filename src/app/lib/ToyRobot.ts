type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';

interface Position {
  x: number;
  y: number;
  direction: Direction;
}

class ToyRobot {
  private position: Position | null = null;
  private readonly directions: Direction[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
  private readonly tableSize = 5;

  place(x: number, y: number, direction: Direction): void {
    if (this.isValidPosition(x, y)) {
      this.position = { x, y, direction };
    }
  }

  move(): void {
    if (!this.position) return;

    const { x, y, direction } = this.position;
    let newX = x;
    let newY = y;

    switch (direction) {
      case 'NORTH':
        newY += 1;
        break;
      case 'SOUTH':
        newY -= 1;
        break;
      case 'EAST':
        newX += 1;
        break;
      case 'WEST':
        newX -= 1;
        break;
    }

    if (this.isValidPosition(newX, newY)) {
      this.position = { x: newX, y: newY, direction };
    }
  }

  left(): void {
    if (!this.position) return;

    const { direction } = this.position;
    const newDirectionIndex = (this.directions.indexOf(direction) + 3) % 4;
    this.position.direction = this.directions[newDirectionIndex];
  }

  right(): void {
    if (!this.position) return;

    const { direction } = this.position;
    const newDirectionIndex = (this.directions.indexOf(direction) + 1) % 4;
    this.position.direction = this.directions[newDirectionIndex];
  }

  report(): string | null {
    if (!this.position) return null;
    const { x, y, direction } = this.position;
    return `${x},${y},${direction}`;
  }

  private isValidPosition(x: number, y: number): boolean {
    return x >= 0 && x < this.tableSize && y >= 0 && y < this.tableSize;
  }
}

export default ToyRobot;