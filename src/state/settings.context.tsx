import { createContext } from 'react';

export const SettingsContext = createContext({theme: 'dark', themeToggle: () => {}})
SettingsContext.displayName = 'Global settings'
