"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./experience.css");
const Experience = ({ companyName, startDate, endDate, teams, }) => {
    return (react_1.default.createElement("div", { className: "experience-card" },
        react_1.default.createElement("section", { className: "company-title-and-dates" },
            react_1.default.createElement("h3", { className: "company-title" }, companyName),
            react_1.default.createElement("h3", { className: "start-date" }, startDate),
            react_1.default.createElement("h3", { className: "end-date" }, endDate)),
        teams.map((team, index) => (react_1.default.createElement("div", { key: index },
            react_1.default.createElement("h4", null, team.name),
            team.bulletPoints.map((item) => (react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null, item)))))))));
};
exports.default = Experience;
