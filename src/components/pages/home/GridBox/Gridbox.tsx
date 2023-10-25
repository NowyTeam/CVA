import Style from "./Gridbox.module.scss";

const Gridbox = () => {
  return (
    <>
      <div className={Style.Main_Box}>
        <div className={Style.box_grid}>
          <h3>Система аудита</h3>
          <p>
            Отслеживайте каждое действие пользователя с помощью встроенного в
            Akemi журнала аудита.
            <br />
            Каждый тип действия поддерживает индивидуальные настройки, что
            позволяет объединять их и отправлять в 1 канал.
          </p>
        </div>
        <div className={Style.box_grid}>
          <h3>
            Воспроизведение
            <br />
            музыки
          </h3>
          <p>
            Слушайте любимую музыку прямо в голосовом канале с Яндекс. Музыки,
            Bandcamp, SoundCloud, Vimeo и легко управляйте очередью сервера с
            помощью кнопок.
          </p>
        </div>
        <div className={Style.box_grid}>
          <h3>Автоматическое модерирование сервера</h3>
          <p>
            Поддерживайте чистоту на своем сервере с помощью автоматической
            модерации Tempo.
            <br />
            Возможности Tempo позволяют отфильтровывать различные типы поведения
            пользователей без необходимости вмешательства модераторов вашего
            сервера.
          </p>
        </div>
        <div className={Style.box_grid}>
          <h3>Экономика</h3>
          <p>
            Заработок игровой валюты, а также приобретение различных ролей —
            постоянных и временных.
          </p>
          <br />
          <p>
            Также заработок коинов "TempoCoins" - Блогадаря которого вы сможете
            приобрести "Tempo Bot +" которая дает уйму возможностей
          </p>
        </div>
      </div>
    </>
  );
};

export default Gridbox;
