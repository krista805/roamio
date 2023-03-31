"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const trips_routes_1 = __importDefault(require("./api/trips/trips.routes"));
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
mongoose_1.default.connect("mongodb://localhost/mydatabase");
app.use("/api/trips", trips_routes_1.default);
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=server.js.map