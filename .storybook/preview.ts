import "../src/app.css";
import type { Preview } from "@storybook/svelte";

const preview: Preview = {
	parameters: {
		backgrounds: {
			values: [{ name: "Dark", value: "#292524" }],
			default: "Dark"
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
