<script lang="ts">
	// Packages
	import { onDestroy, onMount, tick } from "svelte";
	import { v4 as uuid } from "uuid";

	// Components
	import Accordion from "../Accordion/index.svelte";
	import Popover from "../Popover/index.svelte";

	// Styles
	import {
		ArrowStyles,
		ContentWithCallout,
		ContentWithoutCallout,
		IconStyles,
		ItemCalloutStyles,
		ItemDescriptionStyles,
		ItemLabelStyles,
		ItemStyles,
		LineStyles,
		LineTopBottomStyles,
		MobileMenuButtonStyles,
		MobilePopoverContentStyles,
		MobilePopoverStyles,
		RootStyles,
		TitleContainerStyles,
		TitleStyles,
		TriggerIndicatorStyles,
		TriggerStyles,
		ViewportStyles
	} from "./styles";

	// Utils
	import { clickOutside } from "../../utils";

	// Types
	import { HeadingLevelEnum } from "../../types";
	import {
		type NavigationMenuItem,
		NavigationMenuOrientationEnum,
		type Props
	} from "./types";

	type IsFirstOrLastItem = boolean;

	// Props
	let {
		className = "",
		homeHref,
		icon,
		items,
		orientation,
		title
	}: Props = $props();

	// State
	let activeContentHeight = $state(0);
	let activeContentWidth = $state(0);
	let activeItem = $state<number | null>(null);
	let arrowTop = $state(0);
	let arrowRight = $state(0);
	let contentStyles = $state("");
	let mobileNavigationOpen = $state(false);
	let motion = $state<"left" | "right" | null>(null);
	let previousItem = $state<number | null>(null);
	let subMenuOpen = $state(false);
	let viewportOpen = $state(false);

	// Helpers
	const dataMotion = (index: number) => {
		if (
			(activeItem || activeItem === 0) &&
			motion &&
			activeItem === index
		) {
			if (motion === "left") return "from-end";
			return "from-start";
		} else if (
			(previousItem || previousItem === 0) &&
			motion &&
			previousItem === index
		) {
			if (motion === "left") return "to-start";
			return "to-end";
		}

		return null;
	};

	const handleClickOutside = () => {
		activeItem = null;
		subMenuOpen = false;
		viewportOpen = false;
	};

	const handleMenuItemKeydown = (
		e: KeyboardEvent,
		{
			isFirstItem,
			isLastItem
		}: { isFirstItem: boolean; isLastItem: boolean }
	) => {
		const items = Array.from(
			document.querySelectorAll(
				".navigation-menu-content[data-expanded=true] .navigation-menu-item"
			)
		);

		if (
			e.code === "Tab" &&
			!e.shiftKey &&
			isLastItem &&
			items?.length > 0
		) {
			const item = items[0] as HTMLAnchorElement | HTMLButtonElement;
			item.focus();
			e.preventDefault();
		} else if (
			e.shiftKey &&
			e.code === "Tab" &&
			isFirstItem &&
			items?.length > 0
		) {
			const item = items[items.length - 1] as
				| HTMLAnchorElement
				| HTMLButtonElement;
			item.focus();
			e.preventDefault();
		} else if (e.code === "Escape") {
			subMenuOpen = false;
			viewportOpen = false;
			document.getElementById(`navigation-menu-${activeItem}`)?.focus();
		}
	};

	const handleTriggerMouseEnter = ({
		hasSubMenu,
		index
	}: {
		hasSubMenu: boolean;
		index: number;
	}) => {
		if ((activeItem || activeItem === 0) && activeItem !== index) {
			motion = activeItem > index ? "right" : "left";
			previousItem = activeItem;
		} else {
			motion = null;
			previousItem = null;
		}

		viewportOpen = hasSubMenu;
		activeItem = index;
	};

	const handleTriggerKeydown = async (
		e: KeyboardEvent,
		props: {
			hasSubMenu: boolean;
			index: number;
		}
	) => {
		if (e.code === "Enter" || e.code === "Space") {
			handleTriggerMouseEnter(props);

			await tick();

			const item = document.querySelector(
				".navigation-menu-content[data-expanded=true] .navigation-menu-item"
			) as HTMLAnchorElement;

			if (item) {
				item.focus();
			}
		}
	};

	const handleTriggerMouseLeave = ({ index }: { index: number }) => {
		setTimeout(() => {
			if (activeItem === index && !subMenuOpen) activeItem = null;
		}, 200);
	};

	const hasImage = (menuItems: NavigationMenuItem[]) =>
		menuItems?.some(item => !!item.image);

	const updateHeight = () => {
		contentStyles = `
			height: ${document.documentElement.scrollHeight}px
		`;
	};

	// Effects
	$effect(() => {
		if (activeItem || activeItem === 0 || subMenuOpen) {
			const activeTrigger = document.querySelector(
				".navigation-menu-trigger[data-expanded=true]"
			);

			if (
				activeTrigger &&
				orientation !== NavigationMenuOrientationEnum.Vertical
			) {
				const { right, width } = activeTrigger.getBoundingClientRect();
				const distanceFromRight =
					window.innerWidth - right - 24 + 0.5 * width;

				arrowRight = distanceFromRight;
			} else if (activeTrigger) {
				const { top, height } = activeTrigger.getBoundingClientRect();
				const distanceFromBottom = top - 106 + 0.5 * height;

				arrowTop = distanceFromBottom;
			}

			const expandedContent = document.querySelector(
				`.navigation-menu-content[data-expanded=true]`
			);

			if (expandedContent) {
				activeContentHeight = expandedContent.clientHeight;
				activeContentWidth = expandedContent.clientWidth;
			}
		} else {
			viewportOpen = false;
		}
	});

	// Life Cycle
	onMount(() => {
		contentStyles = `
			height: ${document.documentElement.scrollHeight}px
		`;

		window.addEventListener("resize", updateHeight);
	});

	onDestroy(() => {
		window.removeEventListener("resize", updateHeight);
	});
</script>

{#snippet buttonContent()}
	<div class={MobileMenuButtonStyles({ open: mobileNavigationOpen })}>
		<svg viewBox="0 0 32 32">
			<path
				class={LineTopBottomStyles}
				d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
			></path>
			<path class={LineStyles} d="M7 16 27 16"></path>
		</svg>
	</div>
{/snippet}

{#snippet menuItem(
	{ description, href, image, title, ...itemProps }: NavigationMenuItem,
	isFirstItem: IsFirstOrLastItem,
	isLastItem: IsFirstOrLastItem
)}
	<a
		{...itemProps}
		{href}
		class={!!image ? ItemCalloutStyles : ItemStyles}
		onkeydown={e => handleMenuItemKeydown(e, { isFirstItem, isLastItem })}
		role="menuitem"
	>
		{#if image}
			<img {...image} />
		{/if}
		<h3 class={ItemLabelStyles}>
			{title}
		</h3>
		{#if description}
			<p class={ItemDescriptionStyles}>
				{description}
			</p>
		{/if}
	</a>
{/snippet}

{#snippet mobileAccordionNavigationContent(
	items: NavigationMenuItem[],
	isFirstItem: IsFirstOrLastItem,
	isLastItem: IsFirstOrLastItem
)}
	<div class={hasImage(items) ? ContentWithCallout : ContentWithoutCallout}>
		{#each items as item}
			{@render menuItem(item, isFirstItem, isLastItem)}
		{/each}
	</div>
{/snippet}

<div class={className}>
	{#if icon || title}
		<svelte:element
			this={homeHref ? "a" : "div"}
			class={TitleContainerStyles}
			href={homeHref}
		>
			{#if icon}
				<figure>
					<img {...icon} class={IconStyles} />
					<figcaption class="h-0 opacity-0 w-0">
						Navigate to Home
					</figcaption>
				</figure>
			{/if}
			{#if title}
				<h1 class={TitleStyles}>{title}</h1>
			{/if}
		</svelte:element>
	{/if}
	<div
		class={RootStyles}
		data-orientation={orientation}
		use:clickOutside={handleClickOutside}
	>
		<ul role="menubar">
			{#each items as { disabled, href, items: _items, target, title }, index}
				<li role="presentation">
					<svelte:element
						this={href ? "a" : "button"}
						{disabled}
						{href}
						{target}
						aria-haspopup={_items.length > 0}
						class={TriggerStyles}
						data-expanded={activeItem === index}
						id="navigation-menu-{index}"
						role="menuitem"
						onkeydown={(e: KeyboardEvent) =>
							handleTriggerKeydown(e, {
								hasSubMenu: _items.length > 0,
								index
							})}
						onmouseenter={() =>
							handleTriggerMouseEnter({
								hasSubMenu: _items.length > 0,
								index
							})}
						onmouseleave={() => handleTriggerMouseLeave({ index })}
						tabindex="0"
					>
						{title}
						{#if _items.length > 0}
							<i aria-hidden="true" class={TriggerIndicatorStyles}
							></i>
						{/if}
					</svelte:element>
				</li>
			{/each}
		</ul>
		<div
			class={ViewportStyles}
			data-expanded={viewportOpen}
			data-orientation={orientation}
			style:height="{activeContentHeight}px"
			style:width="{activeContentWidth}px"
		>
			<div
				aria-hidden="true"
				class={ArrowStyles}
				data-orientation={orientation}
				style={orientation === NavigationMenuOrientationEnum.Vertical
					? `top: ${arrowTop}px`
					: `right: ${arrowRight}px`}
			>
				<svg
					display="block"
					viewBox="0 0 30 30"
					style="transform:scale(1.02)"
					><g transform="rotate(0 15 15) translate(0 2)"
						><path
							fill="none"
							d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"
						></path><path
							stroke="none"
							d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"
						></path></g
					></svg
				>
			</div>
			{#each items as { items: _items }, index}
				<div
					aria-labelledby="navigation-menu-{index}"
					class={hasImage(_items)
						? ContentWithCallout
						: ContentWithoutCallout}
					data-expanded={activeItem === index}
					data-orientation={orientation}
					data-motion={dataMotion(index)}
					onmouseenter={() => (subMenuOpen = true)}
					onmouseleave={() => {
						subMenuOpen = false;
						activeItem = null;
					}}
					role="menu"
					tabindex="0"
				>
					{#each _items as item, index}
						{@render menuItem(
							item,
							index === 0,
							index === _items.length - 1
						)}
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<Popover
		{buttonContent}
		{contentStyles}
		className={MobilePopoverStyles}
		contentClass={MobilePopoverContentStyles}
		isIconButton
		open={mobileNavigationOpen}
		onOpenChange={value => (mobileNavigationOpen = value)}
	>
		<Accordion
			headingLevel={HeadingLevelEnum.Two}
			items={items
				.filter(item => item.items?.length > 0)
				.map(({ disabled, items, title }, index) => ({
					description: "",
					disabled,
					id: uuid(),
					isFirstItem: index === 0,
					isLastItem: index === items.length - 1,
					mobileAccordionNavigationContent,
					mobileAccordionNavigationItems: items,
					title
				}))}
		/>
		{#each items.filter(item => !!item.href) as item}
			<a {...item} class={TriggerStyles}>
				{item.title}
			</a>
		{/each}
	</Popover>
</div>
