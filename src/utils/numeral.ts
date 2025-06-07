import numeral from "numeral";

export const setLocal = (local: string): void => {
  numeral.locale(local);
};

export const roundFinancial = (number: number): number =>
  Math.round(number * 100) / 100;

export const numberFormat = (number: number | string): string =>
  numeral(number).format("0,0");

export const numberDecimalTenthsFormat = (number: number | string): string =>
  numeral(number).format("0,0.0");

export const numberSingleDecimalFormat = (number: number | string): string =>
  numeral(number).format("0,0.0");

export const numberDecimalFormat = (number: number | string): string =>
  numeral(number).format("0,0.00");

export const numberShortFormat = (number: number | string): string =>
  numeral(number).format("0.[00]a");

export const numberOrder = (number: number | string): string =>
  numeral(number).format("0o");

export const autoNumberFormat = (number: number | string): string =>
  numeral(number).format("0,0[.]00");

export const numberDecimalMaxFourthFormat = (number: number | string): string =>
  numeral(number).format("0,0.00[00]");

export const numberValue = (number: number | string): number =>
  numeral(number).value() ?? 0;
