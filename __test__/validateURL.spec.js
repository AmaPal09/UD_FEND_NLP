import {isValidURL} from '../src/client/js/validateURL'

describe("Validate URL", () => {
	test("It should validate if the input is a valid url", () => {
		const url = [ "https://sdfasd",
						"http://en.wikipedia.org/wiki/Procter_&_Gamble",
						"http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&docid=nIv5rk2GyP3hXM&tbnid=isiOkMe3nCtexM:&ved=0CAUQjRw&url=http%3A%2F%2Fanimalcrossing.wikia.com%2Fwiki%2FLion&ei=ygZXU_2fGKbMsQTf4YLgAQ&bvm=bv.65177938,d.aWc&psig=AFQjCNEpBfKnal9kU7Zu4n7RnEt2nerN4g&ust=1398298682009707",
						"dfdsfdsfdfdsfsdfs",
						"magnet:?xt=urn:btih:123",
						"https://stackoverflow.com/",
						"https://w",
						"https://sdfasdp.ppppppppppp",
		];

		expect(isValidURL(url[0])).toBeFalsy();
		expect(isValidURL(url[1])).toBeTruthy();
		expect(isValidURL(url[2])).toBeTruthy();
		expect(isValidURL(url[3])).toBeFalsy();
		expect(isValidURL(url[4])).toBeFalsy();
		expect(isValidURL(url[5])).toBeTruthy();
		expect(isValidURL(url[6])).toBeFalsy();
		expect(isValidURL(url[6])).toBeFalsy();

	});
});