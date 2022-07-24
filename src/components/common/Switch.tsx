import classNames from 'classnames';
import { useCallback } from 'react';
import switchStyle from 'styles/common/Switch.module.scss';

type SwitchProps = {
  id: string;
  checked: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
};

const Switch: React.FC<SwitchProps> = ({ id, checked, label, onChange }) => {
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.checked);
    },
    [],
  );

  return (
    <div className={switchStyle.switch}>
      {label && (
        <label htmlFor={id} className={switchStyle.switch__label}>
          {label}
        </label>
      )}
      <div>
        <div
          className={classNames(
            switchStyle.switch__icon,
            checked ? switchStyle.on : switchStyle.off,
          )}
        >
          <input
            type="checkbox"
            id={id}
            role="switch"
            aria-checked={checked}
            checked={checked}
            onChange={e => handleOnChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Switch;
