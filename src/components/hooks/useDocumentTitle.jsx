import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useDocumentTitle = (baseTitle) => {
  const location = useLocation();

  useEffect(() => {
    let title;
    switch (location.pathname) {
      case '/privacy':
        title = 'Privacy Policy |';
        break;
      case '/terms':
        title = 'Terms & Conditions |';
        break;
      case '/contact':
        title = 'Contact |';
        break;
      case '/login':
        title = 'Log in |';
        break;
      case '/signup':
        title = 'Sign up |';
        break;
      case '/delete':
        title = 'Delete Account |';
        break;
      case '/explore':
        title = 'Explore Totojan |';
        break;
      default:
        title = '';
    }
    document.title = `${title} ${baseTitle}`;
  }, [location, baseTitle]);
};

export default useDocumentTitle;