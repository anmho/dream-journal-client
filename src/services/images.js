const baseUrl = "http://127.0.0.1:8000/images/";

class ImageService {
  async postImage(prompt) {
    const url = new URL(baseUrl);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    return data;
  }

  async getEntry(image_id) {
    // const fetchUrl = new URL(`${image_id}/`, baseUrl);
    const fetchUrl = new URL(image_id, baseUrl);

    const response = await fetch(fetchUrl);
    const data = await response.json();
    console.log(data);
    return data.url;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ImageService();
