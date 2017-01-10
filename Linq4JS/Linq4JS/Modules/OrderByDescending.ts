﻿Array.prototype.OrderByDescending = function<T> (valueSelector: any): Array<T> {
    let that: Array<T> = this;

    let valueSelectorFunction: Function = Linq4JS.Helper.ConvertFunction(valueSelector);

    let ordered: Array<T> = that.Clone();
    ordered.Order = new Array<Linq4JS.OrderEntry>(new Linq4JS.OrderEntry(Linq4JS.OrderDirection.Descending, valueSelectorFunction));

    return ordered.sort(function (a, b) {
        return Linq4JS.Helper.OrderCompareFunction(valueSelectorFunction, a, b, true);
    });
};