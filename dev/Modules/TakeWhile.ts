﻿Array.prototype.TakeWhile = function<T> (
    condition: ((item: T, storage?: any) => boolean) | string, 
    initial?: ((storage: any) => void) | string, 
    after?: ((item: T, storage: any) => void) | string): Array<T> {
    let that: Array<T> = this;

    let conditionFunction = Linq4JS.Helper.ConvertFunction<(item: T, storage?: any) => boolean>(condition);

    let storage = {};

    if(initial != null){
        let initialFunction = Linq4JS.Helper.ConvertFunction<(storage: any) => void>(initial);
        initialFunction(storage);
    }

    let afterFunction;

    if(after != null){
        afterFunction = Linq4JS.Helper.ConvertFunction<(item: T, storage: any) => void>(after);
    }

    let result = new Array<T>();

    for(let object of that){
        if(conditionFunction(object, storage) == true){
            result.Add(object);

            if(afterFunction != null){
                afterFunction(object, storage);
            }
        }
        else{
            break;
        }
    }

    return result;
};