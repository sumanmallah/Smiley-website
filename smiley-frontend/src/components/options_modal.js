import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js'; // needed for i18n.changeLanguage

const OptionsWheel = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const dialogRef = useRef(null); // Create a ref for the dialog

  const showDialog = () => {
    setIsOpen(true);
    // After state update, the effect will open the modal dialog
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close(); // Close the dialog using the close() method
    }
    setIsOpen(false);
  };

  useEffect(() => {
    // Whenever isOpen changes and the dialog is supposed to open, call showModal()
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal(); // Call showModal on the dialog ref
    }
  }, [isOpen]); // Only re-run the effect if isOpen changes

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <button id="settingsWheel" onClick={showDialog}>{t('showTheDialog')}</button>
      <dialog
        id="languageDialog"
        ref={dialogRef} // Attach the ref to the dialog element
        onClick={(e) => {
          // Close dialog when clicking outside of it
          const rect = dialogRef.current.getBoundingClientRect();
          if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
          ) {
            closeDialog();
          }
        }}
      >
        <label>
          {t('language')}:
          <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="">{t('choose')}</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={closeDialog}>
          {t('cancel')}
        </button>
        <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
      </dialog>
    </>
  );
  /*
      <output>
        {selectedLanguage ? `${t('youSelected')}: ${t(selectedLanguage)}` : ''}
      </output>
*/
};

export default OptionsWheel;

