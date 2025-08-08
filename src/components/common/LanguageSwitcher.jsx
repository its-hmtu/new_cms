import React from "react";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { LanguagesIcon, ChevronDownIcon } from "lucide-react";
import styled from "styled-components";

const languages = [
  { key: "en", label: "English", flag: "/GB.svg" },
  { key: "vi", label: "Tiếng Việt", flag: "/VN.svg" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLang =
    languages.find((lang) => lang.key === i18n.language) || languages[0];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang.key);
  };

  const menuItems = languages.map((lang) => ({
    key: lang.key,
    label: (
      <LabelContainer>
        <img src={lang.flag} alt={`${lang.label} flag`} />
        <span>{lang.label}</span>
      </LabelContainer>
    ),
    onClick: () => handleLanguageChange(lang),
  }));

  return (
    <Dropdown
      menu={{ items: menuItems }}
      trigger={["click"]}
      placement='bottomRight'
    >
      <ButtonContainer type='text'>
        <div className='language-switcher'>
          <img src={currentLang.flag} alt={`${currentLang.label} flag`} />
          <ChevronDownIcon size={14} color='#6c737f' />
        </div>
      </ButtonContainer>
    </Dropdown>
  );
}

export default LanguageSwitcher;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

const ButtonContainer = styled(Button)`
  padding: 0 4px;

  .language-switcher {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;
