import Fetch from './Fetch';

const SECRET_KEY = `$2b$10$XH4UpqbxB37fOLhAwq8OKegNeFk0iDDw0cC2xj4l0NT9Y55m8S/1e`;

describe(`fetch-class-tests`, function () {
	const spyOn = {};

	beforeEach(() => {
		spyOn.fetch = jest.spyOn(global, `fetch`)
			.mockImplementation(() => {
				return {
					json() {
						return {
							name: `Donald Duck`
						}
					}
				}
			});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	test(`get-data-success`, async () => {
		const url = `https://bogus.com`,
			result = await Fetch.get({ url });

		expect(result).toHaveProperty(`name`, `Donald Duck`);
		expect(spyOn.fetch).toHaveBeenCalledWith(url, { headers: { [`secret-key`]: SECRET_KEY } })
	});

});