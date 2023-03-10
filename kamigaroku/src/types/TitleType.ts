export interface TitleType {
  [key: string]: Type;
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
