import { main } from "./main";

describe("main.ts might be an entry", () => {
	it("should exit properly", () => {
		expect(main()).toBe(0);
	});
});
