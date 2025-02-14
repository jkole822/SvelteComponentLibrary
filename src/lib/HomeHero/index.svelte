<script lang="ts">
	// Packages
	import { onMount } from "svelte";

	// Components
	import Button from "../Button/index.svelte";
	import Tooltip from "../Tooltip/index.svelte";

	// Styles
	import {
		BottomCTAContainerStyles,
		BottomCTATextStyles,
		ButtonContainerStyles,
		ButtonIconStyles,
		ButtonStyles,
		CarouselBackgroundImageStyles,
		CarouselImagesContainerStyles,
		CarouselLinkStyles,
		CarouselLinksContainerStyles,
		CarouselNumberBackStyles,
		CarouselNumberFixedStyles,
		CarouselNumberStyles,
		CarouselTitleStyles,
		ContainerStyles,
		CursorOneStyles,
		CursorThreeStyles,
		CursorTwoStyles,
		FloatingLinkStyles,
		FloatingLinkTriggerStyles,
		ScrollToTopStyles,
		SectionDescriptionStyles,
		SectionFlexRowStyles,
		SectionHeaderStyles,
		SectionHeadingStyles,
		SectionInnerContainerStyles,
		SectionParallaxStyles,
		SectionStyles,
		ShadowTitleStyles
	} from "./styles";

	// Utils
	import { handleCursor, handleParallax, handleScrollToTop } from "./utils";

	// Types
	import type { Props } from "./types";
	import { ButtonVariantsEnum } from "../Button/types";

	// Props
	let {
		bottomLinkCTA,
		eyebrow,
		floatingCTA,
		floatingCTAChildren,
		heading,
		headingSecondLine,
		items,
		parallaxBackgroundImages,
		shadowTitle
	}: Props = $props();

	// State
	let activeItem = $state(0);

	const handleMouseEnter = (index: number) => {
		activeItem = index;
	};

	const handleNext = () => {
		if (activeItem === items.length - 1) {
			activeItem = 0;
		} else {
			activeItem += 1;
		}
	};

	const handlePrevious = () => {
		if (activeItem === 0) {
			activeItem = items.length - 1;
		} else {
			activeItem -= 1;
		}
	};

	onMount(() => {
		handleCursor();
		handleParallax(parallaxBackgroundImages);
		handleScrollToTop();
	});
</script>

<div class={ContainerStyles}>
	<div class={ShadowTitleStyles}>{shadowTitle}</div>

	{#each parallaxBackgroundImages as image, index}
		<div
			class={`${SectionParallaxStyles} parallax-image-${index}`}
			style={`background-image: url('${image}')`}
		></div>
	{/each}

	<div class={`${SectionStyles} h-screen`}>
		<div class={SectionHeaderStyles}>
			<div class={SectionInnerContainerStyles}>
				<div class={SectionFlexRowStyles}>
					<div
						class="basis-full max-w-full text-center parallax-fade-top"
					>
						<p class={SectionDescriptionStyles}>{eyebrow}</p>
						<h2 class={SectionHeadingStyles}>
							{heading}
							{#if headingSecondLine}
								<br />
								{headingSecondLine}
							{/if}
						</h2>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class={`${SectionStyles} h-screen z-[100]`}>
		<ul class={CarouselLinksContainerStyles}>
			{#each items as { cta }, index}
				<li
					class={CarouselLinkStyles}
					onmouseenter={() => handleMouseEnter(index)}
				>
					<a
						{...cta}
						class={`${index === activeItem ? "active" : ""} hover-target`}
					>
						{cta.title}
					</a>
				</li>
			{/each}
		</ul>

		<ul class={CarouselImagesContainerStyles}>
			{#each items as { image, title }, index}
				<li class={index === activeItem ? "show" : ""}>
					<div class={CarouselBackgroundImageStyles}>
						<img {...image} />
						<div class={ButtonContainerStyles}>
							<Button
								className={ButtonStyles}
								onclick={handlePrevious}
								variant={ButtonVariantsEnum.outline}
							>
								<i aria-hidden="true" class={ButtonIconStyles}
								></i>
							</Button>
							<Button
								className={ButtonStyles}
								onclick={handleNext}
								variant={ButtonVariantsEnum.outline}
							>
								<i
									aria-hidden="true"
									class={`${ButtonIconStyles} rotate-180`}
								></i>
							</Button>
						</div>
					</div>
					<div class={CarouselNumberBackStyles}>
						0{index + 1}
					</div>
					<div class={CarouselNumberStyles}>0{index + 1}</div>
					<div class={CarouselNumberFixedStyles}>
						0{items.length}
					</div>
					<div class={CarouselTitleStyles}>{title}</div>
				</li>
			{/each}
		</ul>
	</div>

	{#if bottomLinkCTA}
		<div
			class={`${SectionStyles} bg-neutral-900 py-[100px] overflow-hidden z-[200]`}
		>
			<div class={SectionInnerContainerStyles}>
				<div class={`${SectionFlexRowStyles} justify-center`}>
					<div
						class="text-center md:basis-[58.3333%] md:max-w-[58.3333%]"
					>
						<a {...bottomLinkCTA} class="hover-target">
							<div class={BottomCTAContainerStyles}>
								<p class={BottomCTATextStyles}>
									{bottomLinkCTA?.title}
								</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<div class={`${ScrollToTopStyles} hover-target`}>
		<i aria-hidden="true" class="fa-solid fa-arrow-up"></i>
	</div>

	<div class={CursorOneStyles} id="cursor-one"></div>
	<div class={CursorTwoStyles} id="cursor-two"></div>
	<div class={CursorThreeStyles} id="cursor-three"></div>

	{#if floatingCTA && floatingCTAChildren}
		<Tooltip
			text={`Navigate to ${floatingCTA?.title}`}
			triggerClass={FloatingLinkStyles}
		>
			<Button {...floatingCTA} className={FloatingLinkTriggerStyles}>
				{@render floatingCTAChildren()}
			</Button>
		</Tooltip>
	{/if}
</div>
