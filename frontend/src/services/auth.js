import api from "../api";

export const login = (credentials) => api.user.login(credentials);