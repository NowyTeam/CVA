import Style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div>
      <footer className={Style.Footer}>
        <div className={Style.footer_cont}>
          <h1 className={Style.Designed}>
            <a href="https://nowy.netlify.app/">
              Designed by <span>Nowy</span>
            </a>
          </h1>
        </div>
      </footer>
    </div>
  );
};
