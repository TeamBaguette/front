import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import Switch from 'src/components/common/Switch';
import style from 'styles/common/example.module.scss';

const PageSwitch: NextPage = () => {
  const [switchFlag, setSwitchFlag] = useState<boolean>(false);

  const onChangeConsole = useCallback((element: string) => {
    console.log(`PageSwitch onChange : ${element}`);
  }, []);

  const onChangeSwitch = useCallback((checked: boolean) => {
    // Switch 컴포넌트를 사용하는 곳에서 플래그를 저장하는 state를 변경하고
    setSwitchFlag(checked);
    //그 다음 실행할 코드를 넣으면 된다.
    console.log('변경되었다! 스위치');
  }, []);

  return (
    <div className={style.example}>
      <h1>Switch Sample</h1>
      <div>
        <h3>- on</h3>
        <Switch id="on" checked={true} onChange={() => onChangeConsole('on')} />
      </div>
      <div>
        <h3>-off</h3>
        <Switch
          id="off"
          checked={false}
          onChange={() => onChangeConsole('off')}
        />
      </div>
      <div>
        <h3>- label</h3>
        <Switch
          id="label"
          checked={false}
          label="반복"
          onChange={() => onChangeConsole('label')}
        />
      </div>
      <div>
        <h3>- 동작 예시</h3>
        <Switch
          id="ex"
          checked={switchFlag}
          onChange={checked => onChangeSwitch(checked)} // Switch 컴포넌트에서 onChange에 return으로 checked:boolean을 넘겨줌
        />
      </div>
    </div>
  );
};

export default PageSwitch;
