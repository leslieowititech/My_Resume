"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const data_1 = require("../../utils/data");
const Skills = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", null, "PROFESSIONAL SKILLS"),
        react_1.default.createElement("section", { className: "resume-section" },
            react_1.default.createElement("ul", { className: "skills-list" }, data_1.skills.map((skill, index) => (react_1.default.createElement("li", { key: index, className: `skill-item` }, skill)))))));
};
exports.default = Skills;
