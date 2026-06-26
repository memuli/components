export type ShellAction = {
  id: string;
  label: string;
  icon: string;
  selected?: boolean;
};

export type ShellNavigation = {
  primary: ShellAction;
  secondary: ShellAction[];
};

export function selectedShellAction(actions: ShellAction[], fallback: ShellAction): ShellAction {
  return actions.find((action) => action.selected) ?? fallback;
}
