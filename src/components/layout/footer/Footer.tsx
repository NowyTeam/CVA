import Style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className={Style.footer_cont}>
          <h1 className={Style.Designed}>
            Designed by <span>Nowy</span>
          </h1>
        </div>
      </footer>
    </div>
  );
};
