"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Resume_1 = __importDefault(require("./components/Resume"));
require("./App.css");
function App() {
    return react_1.default.createElement(Resume_1.default, null);
}
exports.default = App;
