export type ColorType = 'red' | 'green' | 'blue';
export type ShapeType = 'circle' | 'rectangle' | 'triangle';

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

function validLength(shapeType: ShapeType, a: number, b = 1, c = 1): boolean {
  switch (shapeType) {
    case 'circle':
      return a > 0;
    case 'rectangle':
      return a > 0 && b > 0;
    case 'triangle':
      return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
    default:
      throw new Error('You must provide a valid figure shape');
  }
}

export class Triangle implements Figure {
  public shape: ShapeType = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!validLength(this.shape, this.a, this.b, this.c)) {
      throw new Error('Invalid triangle dimensions');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (!validLength(this.shape, this.radius)) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (!validLength(this.shape, this.width, this.height)) {
      throw new Error('Invalid rectangle dimensions');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
