import React, { Fragment, useEffect } from "react";
import styled from "@emotion/styled";
import { ClassNames, css, SerializedStyles } from "@emotion/react";

type ArrowPropsType = {
	className?: string;
	cssStyle?: SerializedStyles;
};

export const Arrow: React.FC<React.PropsWithChildren<ArrowPropsType>> = (props): JSX.Element => {
	return <div {...props}>{props.children}</div>;
};
