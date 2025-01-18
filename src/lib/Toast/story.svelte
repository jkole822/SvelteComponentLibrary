<script lang="ts">
	// Packages
	import { faker } from "@faker-js/faker";
	import { v4 as uuid } from "uuid";

	// Components
	import Button from "../Button/index.svelte";
	import Toast from "./index.svelte";

	// Types
	import { ButtonVariantsEnum } from "../Button/types";
	import type { ToastUpdate } from "./types";

	// State
	let toastUpdates: ToastUpdate[] = $state([]);

	// Helpers
	const handleCreateToast = () => {
		toastUpdates = [
			...toastUpdates,
			{
				description: faker.lorem.sentence(),
				id: uuid(),
				title: faker.lorem.words(2)
			}
		];
	};

	const handleUpdateRandomToast = () => {
		if (toastUpdates.length > 0) {
			const randomToast =
				toastUpdates[Math.floor(Math.random() * toastUpdates.length)];

			toastUpdates = [
				...toastUpdates,
				{
					description: faker.lorem.sentence(),
					id: randomToast.id,
					title: faker.lorem.words(3)
				}
			];
		}
	};
</script>

<Toast {toastUpdates} />
<Button className="mr-10" variant={ButtonVariantsEnum.fill} onclick={handleCreateToast}
	>Create Toast</Button
>
<Button variant={ButtonVariantsEnum.outline} onclick={handleUpdateRandomToast}
	>Update Random Toast</Button
>
