import classNames from 'classnames';
import switchStyle from 'styles/common/Switch.module.scss';

type SwitchProps = {
  id: string;
  checked: boolean;
  label?: string;
  onChange: () => void;
};

const Switch: React.FC<SwitchProps> = ({ id, checked, label, onChange }) => {
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
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Switch;
