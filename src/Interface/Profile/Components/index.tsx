import React, { useState, useEffect } from "react";
import * as S from "../styles";

export const Profile: React.FC = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <S.Container>
      <S.Section>
        <S.LeftSection>
          <S.Heading>
            Hey, <S.Position>I'm Rahul!</S.Position>
          </S.Heading>
          <S.Description>i watch anime</S.Description>
        </S.LeftSection>
      </S.Section>
      <S.DownArrow
        visible={visible}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight });
        }}
      >
        <S.Arrow />
      </S.DownArrow>
    </S.Container>
  );
};
