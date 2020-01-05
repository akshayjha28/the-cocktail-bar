
const SECRET_KEY = `$2b$10$XH4UpqbxB37fOLhAwq8OKegNeFk0iDDw0cC2xj4l0NT9Y55m8S/1e`;

class Fetch {

	static async get({ url }) {
		try {
			const response = await fetch(url, { headers: { [`secret-key`]: SECRET_KEY } });
			return response.json();
		} catch(err) {
			throw new Error(`Error in getting from ${url} due to ${JSON.stringify(err)}`);
		}
	}
}

export default Fetch;