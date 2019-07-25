const DEFAULT_BASE_PX = 16;

export const em = (targetPx: number, basePx: number = DEFAULT_BASE_PX) => {
	if (targetPx === 0) return 0;
	if (basePx === 0) basePx = DEFAULT_BASE_PX;
	return `${parseFloat((targetPx / basePx).toFixed(3))}em`;
};
