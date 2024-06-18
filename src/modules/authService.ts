// AuthService.ts

// interface AuthToken {
//   token: string;
//   expiresAt: number; // Unix timestamp
// }

export const AuthService = {
  getToken(): string | null {
    const token = localStorage.getItem("cookieFallback");
    if (token) {
      return token;
    }
    return null;
  },

  // setToken(token: string, expiresIn: number): void {
  //     const expiresAt = Date.now() + expiresIn * 1000; // expiresIn is in seconds
  //     const authToken: AuthToken = { token, expiresAt };
  //     localStorage.setItem('authToken', JSON.stringify(authToken));
  // },

  clearToken(): void {
    localStorage.removeItem("cookieFallback");
  },

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Double negation to convert to boolean
  },
};
