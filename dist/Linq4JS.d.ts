declare namespace Linq4JS {
    class Entity {
        constructor(_id: number);
        Id: number;
    }
}
declare namespace Linq4JS {
    class Helper {
        static ConvertStringFunction: (functionString: string) => any;
        static ConvertFunction: <T>(testFunction: any) => T;
        static OrderCompareFunction: <T>(valueSelector: (item: T) => any, a: T, b: T, invert: boolean) => number;
    }
}
interface Array<T> {
    Order: Array<Linq4JS.OrderEntry>;
    GroupValue: any;
    Clone(): Array<T>;
    FindIndex(filter: ((item: T) => boolean) | string): number;
    Get(index: number): T;
    ForEach(action: ((item: T) => boolean | any) | string): Array<T>;
    Update(object: T, primaryKeySelector?: ((item: T) => any) | string): Array<T>;
    UpdateRange(objects: Array<T>, primaryKeySelector?: ((item: T) => any) | string): Array<T>;
    Remove(object: T, primaryKeySelector?: ((item: T) => any) | string): Array<T>;
    RemoveRange(objects: Array<T>, primaryKeySelector?: ((item: T) => any) | string): Array<T>;
    Add(object: T, generateId?: boolean): Array<T>;
    AddRange(objects: Array<T>): Array<T>;
    Insert(object: T, index: number): Array<T>;
    Where(filter: ((item: T) => boolean) | string): Array<T>;
    Range(start: number, length: number): Array<T>;
    Repeat(object: T, count: number): Array<T>;
    Count(filter?: ((item: T) => boolean) | string): number;
    All(filter: ((item: T) => boolean) | string): boolean;
    Any(filter?: ((item: T) => boolean) | string): boolean;
    First(filter?: ((item: T) => boolean) | string): T;
    FirstOrDefault(filter?: ((item: T) => boolean) | string): T;
    Last(filter?: ((item: T) => boolean) | string): T;
    LastOrDefault(filter?: ((item: T) => boolean) | string): T;
    Select(selector: ((item: T) => any) | string): any[];
    Take(count: number): Array<T>;
    TakeWhile(condition: ((item: T, storage?: any) => boolean) | string, initial?: ((storage: any) => void) | string, after?: ((item: T, storage: any) => void) | string): Array<T>;
    Skip(count: number): Array<T>;
    OrderBy(valueSelector: ((item: T) => any) | string): Array<T>;
    ThenBy(valueSelector: ((item: T) => any) | string): Array<T>;
    OrderByDescending(valueSelector: ((item: T) => any) | string): Array<T>;
    ThenByDescending(valueSelector: ((item: T) => any) | string): Array<T>;
    Min(valueSelector?: ((item: T) => any) | string): T;
    Max(valueSelector?: ((item: T) => any) | string): T;
    GroupBy(selector: ((item: T) => any) | string): Array<Array<T>>;
    Move(oldIndex: number, newIndex: number): Array<T>;
    Distinct(valueSelector?: ((item: T) => any) | string): Array<T>;
    Contains(object: T): boolean;
    Concat(array: Array<T>): Array<T>;
    Intersect(array: Array<T>): Array<T>;
    Join(character: string, selector?: ((item: T) => any) | string): string;
    Aggregate(method: ((result: any, item: T) => any) | string, startVal?: any): string;
    Reverse(): Array<T>;
    Average(selector?: ((item: T) => any) | string, filter?: ((item: T) => boolean) | string): number;
    Sum(selector?: ((item: T) => any) | string, filter?: ((item: T) => boolean) | string): number;
    SequenceEqual(array: Array<T>): boolean;
    Zip<T, X>(array: Array<X>, result: ((first: T, second: X) => any) | string): Array<any>;
    Union(array: Array<T>): Array<T>;
    ToDictionary(keySelector: ((item: T) => any) | string, valueSelector?: ((item: T) => any) | string): any;
}
declare namespace Linq4JS {
    class OrderEntry {
        Direction: OrderDirection;
        ValueSelector: (item: any) => any;
        constructor(_direction: OrderDirection, _valueSelector: (item: any) => any);
    }
    enum OrderDirection {
        Ascending = 0,
        Descending = 1,
    }
}
