import ImageService from "./images";
import UserService from "./user";
const baseUrl = "http://127.0.0.1:8000/entries/";

class EntryService {
  async getEntries(user_id) {
    const url = new URL(baseUrl);
    url.searchParams.set("user_id", user_id);
    const response = await fetch(baseUrl, {
      headers: {
        Authorization: `Token ${UserService.getToken()}`,
      },
    });

    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      // data[i].url = await ImageService.getEntry(data[i].image_id);
      console.log(data[i].image_id);
      data[i].url = await ImageService.getEntry(`${data[i].image_id}/`);
    }


    return data;
  }

  // post
  async addEntry(entry) {
    const url = new URL(baseUrl);

    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token ${UserService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    });
  }

  // async getEntry() {}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EntryService();
