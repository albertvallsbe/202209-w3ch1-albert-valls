class Character implements Character {
  constructor(public name: string, public family: string, public age: number) {}

  communicate: () => String;
  die: () => void;
}
