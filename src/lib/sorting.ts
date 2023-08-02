export type Criterion<T> = ((obj: T) => string) | ((obj: T) => number);

export type Comparator<T> = (a: T, b: T) => -1 | 0 | 1;

export function by<T>(criterion: Criterion<T>): Comparator<T> {
  return (a, b) => {
    const aKey = criterion(a);
    const bKey = criterion(b);
    if (aKey > bKey) {
      return 1;
    } else if (aKey < bKey) {
      return -1;
    } else {
      return 0;
    }
  };
}
