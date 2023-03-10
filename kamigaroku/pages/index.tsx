import type { NextPage } from "next";
import { useState } from "react";
import { Status as Status } from "../src/components/pages/status";
import { Personality } from "../src/components/pages/personality";
import { WeaponData } from "../src/components/pages/wepon";
import { ArmorData } from "../src/components/pages/armor";
import { OrnamentsData } from "../src/components/pages/ornaments";

const Root: NextPage = () => {
  //その他情報
  const [charName, setCharName] = useState<string>("None");
  const [plName, setPlName] = useState<string>("None");
  const [occ, setOcc] = useState<string>("None");
  const [affi, setAffi] = useState<string>("None");
  // 表に反映する内容
  const [race, setRace] = useState<string>("None");
  const [type, setType] = useState<string>("None");
  const [mainTitle, setMainTitle] = useState<string>("None");
  const [subTitle, setSubTitle] = useState<string>("None");
  return (
    <>
      <Personality
        setCharName={setCharName}
        setPlName={setPlName}
        setOcc={setOcc}
        setAffi={setAffi}
        setRace={setRace}
        setType={setType}
        setMainTitle={setMainTitle}
        setSubTitle={setSubTitle}
      />
      <Status race={race} type={type} mainTitle={mainTitle} level={1} />
      <WeaponData />
      <ArmorData />
      <OrnamentsData />
    </>
  );
};

// ====================================================================== //

export default Root;
