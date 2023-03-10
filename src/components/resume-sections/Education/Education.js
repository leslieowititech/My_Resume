"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const data_1 = require("../../../utils/data");
const Education = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", null, "EDUCATION"),
        react_1.default.createElement("section", { className: "resume-section" },
            react_1.default.createElement("section", { className: "eduction-section" }, data_1.education.map((edu, index) => (react_1.default.createElement("div", { key: index },
                react_1.default.createElement("h3", null, edu.institutionName),
                react_1.default.createElement("section", null,
                    react_1.default.createElement("ul", null, edu.details.map((detail, index) => (react_1.default.createElement("li", { key: index }, detail))))))))))));
};
exports.default = Education;
