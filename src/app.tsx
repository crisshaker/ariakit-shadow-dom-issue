import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  ComboboxProvider,
  Menu,
  MenuButton,
  MenuProvider,
} from '@ariakit/react';
import { cx } from 'cva';
import { FolderClosed, Search } from 'lucide-react';

const items = ['One', 'Two', 'Three', 'Four', 'Five'];

function SelectMenu() {
  return (
    <ComboboxProvider>
      <MenuProvider>
        <MenuButton
          className={cx(
            'relative inline-flex items-center rounded-[8px] bg-white font-medium text-slate-600 outline-none',
            'focus-visible:outline-offset-2 focus-visible:outline-blue-400',
            'ring-1 ring-sky-800/[0.11]',
            'shadow-md shadow-slate-800/[0.08]',
            'h-[36px] pr-3 text-[11px]',
            'aria-disabled:opacity-50',
            'pl-2'
          )}
        >
          <span className="mr-1.5 flex size-[24px] shrink-0 items-center justify-center rounded-md border border-slate-100 bg-slate-50 text-slate-700">
            <FolderClosed size={12} />
          </span>
          Open Menu
        </MenuButton>

        <Menu
          gutter={8}
          className={cx(
            'w-[min(260px,var(--popover-available-width,260px))]',
            'max-h-[min(var(--popover-available-height,480px),480px)]',
            'overflow-x-hidden',
            'z-10 rounded-lg bg-white outline-none',
            'ring-1 ring-sky-800/[0.11]',
            'shadow-xl shadow-slate-800/[0.07]'
          )}
        >
          <div
            className={cx(
              'relative shrink-0',

              'border-b border-b-slate-300'
            )}
          >
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-700">
              <Search size={12} />
            </span>

            <Combobox
              autoSelect="always"
              className={cx(
                'block h-[42px] w-full rounded-none pl-9 pr-4 outline-none',
                'text-[13px] font-[440] text-slate-700'
              )}
              placeholder="Search or create a folder..."
            />
          </div>

          <ComboboxList>
            {items.map((item) => (
              <ComboboxItem
                className={cx(
                  'flex h-[38px] w-full items-center gap-2 px-4 text-[11px] font-medium text-slate-700',
                  'border-b border-b-slate-100 outline-none last:border-none',
                  'data-[active-item]:bg-slate-100',
                  'aria-disabled:opacity-50'
                )}
                value={item}
                key={item}
              >
                {item}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </Menu>
      </MenuProvider>
    </ComboboxProvider>
  );
}

export function App() {
  return (
    <div className="p-4 h-full flex items-center justify-center">
      <SelectMenu />
    </div>
  );
}
