/**
 * The `getToken` function retrieves a token from the localStorage or returns an empty string if the
 * token is not found.
 * @returns The `getToken` function is returning the token stored in the localStorage with the key
 * "token". If the token is not found in the localStorage, an empty string is returned.
 */
export const getToken = () => {
	const token: string = localStorage.getItem("token") || "";
	return token;
};

/**
 * The `setToken` function in TypeScript stores a token in the browser's localStorage.
 * @param {string} token - A string representing the token that needs to be stored in the local
 * storage.
 */
export const setToken = (token: string) => {
	localStorage.setItem("token", token);
};

/**
 * The `removeToken` function removes the "token" key from the localStorage.
 */
export const removeToken = () => {
	localStorage.removeItem("token");
};
