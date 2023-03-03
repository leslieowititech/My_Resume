"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Experience_1 = __importDefault(require("./Experience"));
const data_1 = require("../utils/data");
require("./resume.css");
const Resume = ({ experiences }) => {
    const [jobExperiences, setJobExperiences] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        setJobExperiences(experiences);
    }, [experiences]);
    return (react_1.default.createElement("div", { className: "resume-container" },
        react_1.default.createElement("h1", null, "PROFESSIONAL SKILLS"),
        react_1.default.createElement("section", { className: "resume-section" },
            react_1.default.createElement("ul", { className: "skills-list" }, data_1.skills.map((skill, index) => (react_1.default.createElement("li", { key: index, className: `skill-item` }, skill))))),
        react_1.default.createElement("h1", null, "WORK EXPERIENCE"),
        react_1.default.createElement("section", { className: "resume-section" }, jobExperiences.map((data, index) => (react_1.default.createElement(Experience_1.default, { companyName: data.companyName, startDate: data.startDate, endDate: data.endDate, teams: data.teams, key: index }))))));
};
exports.default = Resume;
