"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./header.css");
const Header = () => {
    return (react_1.default.createElement("section", { className: "resume-header" },
        react_1.default.createElement("h1", { className: "header-text" },
            "LESLIE ",
            react_1.default.createElement("span", null, "OWITI")),
        react_1.default.createElement("ul", { className: "header-list" },
            react_1.default.createElement("li", null, `(919) 949-4683`),
            react_1.default.createElement("li", null, `leslieowiti@gmail.com`),
            react_1.default.createElement("li", null, `Apex, North Carolina, United States`),
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { href: "linkedin.com/in/Leslie-owiti-0b447952" }, `linkedin.com/in/Leslie-owiti-0b447952`)))));
};
exports.default = Header;
