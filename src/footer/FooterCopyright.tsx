import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © {new Date().getFullYear()} | Made with <span role="img" aria-label="Love">♥</span>{' '} by {AppConfig.title}
    <br />
    Powered by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
