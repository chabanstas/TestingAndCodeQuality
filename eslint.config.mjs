import globals from "globals";

export default [{
    languageOptions: {
        globals: {
            ...globals.node,
        },
    },

    rules: {
        "no-empty": "error",
        "no-multiple-empty-lines": "warn",
        "no-var": "error",
        "prefer-const": "error",
    },
}];