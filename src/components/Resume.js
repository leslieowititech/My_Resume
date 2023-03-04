"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Experiences_1 = __importDefault(require("./resume-sections/Experience/Experiences"));
const Skills_1 = __importDefault(require("./resume-sections/Skills/Skills"));
const ProfessionalSummary_1 = __importDefault(require("./resume-sections/ProfessionalSummary/ProfessionalSummary"));
const Header_1 = __importDefault(require("./resume-sections/Header/Header"));
const data_1 = require("../utils/data");
require("./resume.css");
const Resume = () => {
    const experiences = Object.values(data_1.data);
    return (react_1.default.createElement("div", { className: "resume-container" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(ProfessionalSummary_1.default, null),
        react_1.default.createElement(Skills_1.default, null),
        react_1.default.createElement(Experiences_1.default, { experiences: experiences })));
};
exports.default = Resume;
