import React from "react";
import { render } from "react-dom";
import App from "./App";

// HTML vs JSX
// 1. class vs className
// 2. for vs htmlFor
// 3. string styles vs object styles
// 4. kebab case vs camelCase
// 5. Must specify unit vs px is default
render(<App />, document.getElementById("root"));
