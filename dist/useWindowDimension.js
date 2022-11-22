"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowDimension = void 0;
var react_1 = require("react");
var useWindowDimension = function () {
    var _a = __read((0, react_1.useState)({ width: 0, height: 0 }), 2), dimension = _a[0], handleDimension = _a[1];
    (0, react_1.useEffect)(function () {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var handleResize = function () {
            handleDimension({ width: width, height: height });
        };
        window.addEventListener('resize', handleResize);
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
};
exports.useWindowDimension = useWindowDimension;
