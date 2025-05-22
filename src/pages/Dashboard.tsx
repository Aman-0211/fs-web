import { useState, type JSX } from 'react';
import FastportLogo from '../assets/Login-Art.svg';
import HondaLogo from '../assets/react.svg';
import { useTranslation } from 'react-i18next';


export default function App(): JSX.Element {
  const [showRightBlock, setShowRightBlock] = useState<boolean>(false);
  const [showFooter, setShowFooter] = useState<boolean>(false);
  const { t  } = useTranslation();

  return (
    <div className="coming-soon">
      {/* Language Switcher */}
      {/* <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('de')}>DE</button>
      </div> */}
      <header className="navbar">
        {/* <div className="logo-block">
          <img src={FastportLogo} alt="Fastport Logo" className="logo-svg fastport" />
          <img src={HondaLogo} alt="Honda Logo" className="logo-svg honda" />
        </div> */}
        <nav className="nav-links">
          <a href="https://eurobike.com/frankfurt/en/exhibitor-search.detail.html/american-honda-motor-co-inc.html?q=fast%20port%20honda" target="_blank" rel="noopener noreferrer">
            Eurobike
            <span className="external-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <a href="https://www.honda.com" target="_blank" rel="noopener noreferrer">
            Honda
            <span className="external-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <a href="https://www.linkedin.com/company/fastport" target="_blank" rel="noopener noreferrer">
            LinkedIn
            <span className="external-arrow" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path d="M7 13L13 7M13 7H7M13 7V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </nav>
      </header>

      <main className="main-container">
        <div className="grid-box">
          <div className="left-block animate-expand" onAnimationEnd={() => setShowRightBlock(true)}>
            <div className="content">
              <h2>{t('title')}</h2>
              <p>
                {t('description')}
                <br />
                <br />
                {t('slogan')}
              </p>
            </div>
            <div className="dot"></div>
          </div>

          {showRightBlock && (
            <div className="right-block animate-expand" onAnimationEnd={() => setShowFooter(true)}>
              <span className="content">{t('coming')}</span>
            </div>
          )}
        </div>

        {showFooter && (
          <div className="footer">
            <span>©️ 2025 Fastport. All rights reserved.</span>
          </div>
        )}
      </main>
    </div>
  );
}