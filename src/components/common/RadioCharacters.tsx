import classNames from 'classnames';
import { useCallback, useState } from 'react';
import RadioStyle from 'styles/common/Radio.module.scss';
import Icon from './Icon';

type RadioCharacters = {
  selectedIcon?: string; // 선택되어 있는 iconName (api)
};

type RadioCharacter = {
  name: string;
  selected: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioCharacter: React.FC<RadioCharacter> = ({
  name,
  selected,
  onChange,
}) => {
  return (
    <div
      className={classNames(
        RadioStyle.radios__character,
        selected ? RadioStyle[name] : '',
      )}
    >
      <Icon folderName="characters" iconName={name} />
      <input
        type="radio"
        className="radio"
        name="characters"
        value={name}
        checked={selected}
        onChange={e => onChange(e)}
      />
    </div>
  );
};

// 라디오 형식의 캐릭터 리스트
const RadioCharacters: React.FC<RadioCharacters> = props => {
  // TODO: 나중에 api에서 선택된 캐릭터값을 넘겨주는 형식에 맞춰 수정 예정
  const characters = ['butter', 'strawberry', 'water', 'nutella'];
  const [selectedIcon, setSelectedIcon] = useState<string>(
    props.selectedIcon || '',
  );
  const onChangeRadio = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedIcon(e.currentTarget.value);
    },
    [],
  );
  return (
    <div className={RadioStyle.radios}>
      {characters.map(character => (
        <RadioCharacter
          key={character}
          name={character}
          selected={character === selectedIcon}
          onChange={e => onChangeRadio(e)}
        />
      ))}
    </div>
  );
};

export default RadioCharacters;
