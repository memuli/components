export type MemuliTheme = {
  name: string;
  status: 'light' | 'dark';
  bg: string;
  panel: string;
  panelAlt: string;
  text: string;
  muted: string;
  line: string;
  primary: string;
  primaryText: string;
  accent: string;
  danger: string;
  input: string;
  inputReadonly: string;
};

export const lightTheme: MemuliTheme = {
  name: 'Light',
  status: 'light',
  bg: '#fbfaf7',
  panel: '#ffffff',
  panelAlt: '#f0edf8',
  text: '#18151f',
  muted: '#655f70',
  line: '#ded8ea',
  primary: '#6d38ff',
  primaryText: '#ffffff',
  accent: '#108a78',
  danger: '#b5425d',
  input: '#ffffff',
  inputReadonly: '#f0edf5',
};

export const darkTheme: MemuliTheme = {
  name: 'Dark',
  status: 'dark',
  bg: '#0f0d14',
  panel: '#18141f',
  panelAlt: '#241d31',
  text: '#fbf8ff',
  muted: '#b9aec8',
  line: '#342a46',
  primary: '#9b70ff',
  primaryText: '#120d1b',
  accent: '#63d8c1',
  danger: '#f06b86',
  input: '#15111d',
  inputReadonly: '#241d31',
};

export function themeByMode(mode: 'light' | 'dark') {
  return mode === 'dark' ? darkTheme : lightTheme;
}
