interface Point {
  x: number;
  y: number;
}

type ReadonlyPoint = {
  readonly [P in keyof Point]: Point[P];
};

const myPoint: ReadonlyPoint = {
  x: 10,
  y: 20
};
