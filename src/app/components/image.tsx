/** @jsxImportSource @emotion/react */
import React, { Fragment, PureComponent } from "react";
import { css, SerializedStyles } from "@emotion/react";

type ImagePropsType = {
	css?: SerializedStyles;
	classNameTextBlock?: string;
	classNameBorderBlock?: string;
	className?: string;
	image: string;
};

export default function Image(props: React.PropsWithChildren<ImagePropsType>): JSX.Element {
	return (
		<div {...props} css={props.css}>
			<div>
				<img src={props.image} className={props.classNameTextBlock} />
			</div>
		</div>
	);
}
