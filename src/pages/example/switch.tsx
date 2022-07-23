import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import Switch from 'src/components/common/Switch';
import style from 'styles/common/example.module.scss';

const PageSwitch: NextPage = () => {
  /** Switch 컴포넌트는 스위치를 사용하는 컴포넌트에서 넘겨주는 props의 check값에 따라 움직이고
      Switch 컴포넌트 자체에서 값을 변경 하지 않음 */
  const [switchFlag, setSwitchFlag] = useState<boolean>(false);

  const onChangeConsole = useCallback((element: string) => {
    console.log(`PageSwitch onChange : ${element}`);
  }, []);

  return (
    <div className={style.example}>
      <h1>Switch Sample</h1>
      <h2>on</h2>
      <Switch id="on" checked={true} onChange={() => onChangeConsole('on')} />
      <h2>off</h2>
      <Switch
        id="off"
        checked={false}
        onChange={() => onChangeConsole('off')}
      />
      <h2>label</h2>
      <Switch
        id="label"
        checked={false}
        label="반복"
        onChange={() => onChangeConsole('label')}
      />
      <h2>동작 예시</h2>
      <Switch
        id="ex"
        checked={switchFlag}
        onChange={() => setSwitchFlag(!switchFlag)}
      />
    </div>
  );
};

export default PageSwitch;
