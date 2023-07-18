import { useRef, useState, useEffect, FunctionComponent } from 'react';

interface UIPanelProperties {
	display?: boolean,
	description: string,
	isButton: boolean,
	buttonDescription?: string
};

interface UIPanelEvents extends UIPanelProperties {
	onButtonClicked: (index: number) => void,
	index: number
}

const UIPanel: FunctionComponent<UIPanelEvents> = (props) => {
	const group = useRef<HTMLDivElement>(null!);

	useEffect(() => {
		if (props.display) show();
	}, [props.display]);

	const hide = () => {
		group.current.style.opacity = '0';
		group.current.style.pointerEvents = 'none';
	};

	const clicked = () => {
		props.onButtonClicked(props.index);
		hide();
	};

	const show = () => {
		group.current.style.opacity = '1';
		group.current.style.pointerEvents = 'all';
	}

	return (
		<div ref={group} className='UIPanel' style={{ opacity: '0', pointerEvents: 'none' }}>
			<span>{props.description}</span>
			{props.isButton && <button onPointerDown={clicked}>{props.buttonDescription}</button>}
		</div>
	)
};

interface UIPanelMultistageProperties {
	UIPanelProperties: UIPanelProperties[];
	show: boolean;
	onPanelsCompletion: () => void;
}

const UIPanelMultistage: FunctionComponent<UIPanelMultistageProperties> = (props) => {

	const [activeIndex, setActiveIndex] = useState(0);
	const [previousActiveIndex, setPreviousActiveIndex] = useState(0);

	const buttonClicked = (index: number) => {
		const nextIndex = index + 1;
		if (nextIndex < props.UIPanelProperties.length) {
			const transitionTimeMS = 1000;
			setTimeout(() => setActiveIndex(nextIndex), transitionTimeMS);
		} else {
			props.onPanelsCompletion();
		}
	};

	useEffect(() => {
		if (activeIndex !== previousActiveIndex) {
			setPreviousActiveIndex(activeIndex);
		}
	}, [activeIndex]);

	return (
		<>
			{props.UIPanelProperties.map((UIPanelProperties, index) => {
				return <UIPanel {...UIPanelProperties} display={index === activeIndex} onButtonClicked={buttonClicked} index={index} key={`UIPanelMultistage${index}`} />
			})}
		</>
	)
}

export { UIPanel, UIPanelMultistage };

export type { UIPanelEvents, UIPanelProperties };