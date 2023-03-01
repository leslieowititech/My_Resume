"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Resume_1 = __importDefault(require("./components/Resume"));
const data_1 = require("./utils/data");
require("./App.css");
function App() {
    const experiences = Object.values(data_1.data);
    return react_1.default.createElement(Resume_1.default, { experiences: experiences });
}
exports.default = App;
