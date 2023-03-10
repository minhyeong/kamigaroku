export interface RaceType {
  [key: string]: Type | string;
}

interface Type {
  [key: string]: Ability | string;
}

interface Ability {
  [key: string]: Value;
}

interface Value {
  [key: string]: number;
}
