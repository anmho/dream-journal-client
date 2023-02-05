const baseUrl = "http://127.0.0.1:8000/users/";

class UserService {
  async signUpUser(username, password) {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();

    console.log(data);

    return data;
  }

  async loginUser(username, password) {
    const basic_auth_string = btoa(`${username}:${password}`);
    const response = await fetch("http://127.0.0.1:8000/login/", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic_auth_string}`,
      },
    });

    const data = await response.json();
    console.log(data.token, data.user_id);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user_id", data.user_id);
  }

  async getUser(userId) {
    const url = new URL(`/${userId}/`, baseUrl);

    const response = await fetch(url);
    const user = await response.json();

    return user;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  }

  isLoggedIn() {
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    if (!token || !user_id) return false;

    return true;
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getUserId() {
    return localStorage.getItem("user_id");
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
