/** @jsxImportSource @emotion/react */

import { SerializedStyles } from "@emotion/react";
import React, { AllHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";

type CreateElementPropsType<T> = {
	Tag: React.ElementType;
	data?: AllHTMLAttributes<T>;
	children?: React.ReactNode;
	otherData?: any;
	funcEdit?: (child: React.ReactNode, ...otherData: any) => React.ReactNode;
	style?: string;
	key?: number;
	cssStyle?: () => SerializedStyles;
};

const CreateElement = <T extends object>(props: PropsWithChildren<CreateElementPropsType<T>>): JSX.Element => {
	return props.children ? (
		<props.Tag {...props.data} css={props.cssStyle}>
			{React.Children.map(props.children, (child: React.ReactNode) => {
				return props.funcEdit ? props!.funcEdit(child, props.otherData) : child;
			})}
		</props.Tag>
	) : (
		<props.Tag {...props.data} css={props.cssStyle} />
	);
};

export { CreateElement };
