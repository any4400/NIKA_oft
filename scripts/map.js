$(document).ready(function () {
  function getRemBase(windowWidth) {
    let remBase = windowWidth * 0.01;

    if (windowWidth < 468) {
      remBase *= 3.125;
    } else if (windowWidth < 668) {
      remBase *= 2.137;
    } else if (windowWidth < 1024) {
      remBase *= 1.497;
    } else if (windowWidth < 1500) {
      remBase *= 0.977;
    } else {
      remBase *= 0.667;
    }

    return remBase;
  }

  // размещение метки на карте
  const setPlacemark = map => {
    const windowWidth = window.innerWidth;

    // настройка размеров иконки
    // в зависимости от разрешения
    const iconImageSize =
      windowWidth < 1024 ?
        [3.6 * getRemBase(windowWidth), 4.8 * getRemBase(windowWidth)] :
        [5.4 * getRemBase(windowWidth), 7.2 * getRemBase(windowWidth)];

    // содержимое балуна
    const balloonContentBody =
      `
      <div class="balloon-container">
        <div class="title">Центр современной офтальмологии «НИКА СПРИНГ»</div>

        <div class="content">
          <div class="contact column">
            <address>
              <ul>
                <li class="location green">Н. Новгород, Провиантская 6Б</li>
                <li class="phone green">+7 (831) 224-88-00</li>
              </ul>  
            </address>

            <div class="content-image">
              <img src="./img/map/test.png" alt="Фотография клиники">
            </div>
          </div>

          <div class="schedule column">
            <div class="group">
              <div class="subtitle">Прием взрослых:</div>

              <ul>
                <li>понедельник - пятница: <span class="time">8:00 до 20:00</span></li>
                <li>суббота: <span class="time">9:00 до 18:00</span></li>
                <li>воскресенье: <span class="time">9:00 до 15:00</span></li>
              </ul>
            </div>

            <div class="group">
              <div class="subtitle">Прием детей:</div>

              <ul>
                <li>пятница: <span class="time">16:00 до 20:00</span></li>
                <li>суббота: <span class="time">9:00 до 18:00</span></li>
              </ul>
            </div>

            <div class="buttons-group">
              <button class="green green_light pen">Записаться</button>
              <a href="javascript: void(0)" class="as-button white route">Проложить маршрут</a>
              <a href="javascript: void(0)" class="as-button white taxi">Заказать такси</a>
            </div>
          </div>
        </div>
      </div>
    `;

    // настройка иконки
    const placemark = new ymaps.Placemark(coordinates, {
      balloonContentBody,
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'https://oft.nika-nn.ru//local/templates/oft.nika/img/map/geo.svg',
      iconImageSize,
      iconOffset:
        windowWidth < 1024 ?
          [-1 * getRemBase(windowWidth), -1 * getRemBase(windowWidth)] :
          [-2 * getRemBase(windowWidth), -3 * getRemBase(windowWidth)],
      hideIconOnBalloonOpen: false,
      balloonOffset:
        [
          -56.5 * getRemBase(windowWidth) - (windowWidth < 1024 ? 3.6 : 5.4) * getRemBase(windowWidth) / 2,
          -(windowWidth < 1024 ? 4.8 : 7.2) / 6 * getRemBase(windowWidth)
        ],
      balloonHasCloseButton: false,
    });

    map.geoObjects.add(placemark);
    placemark.events.add('click', (e) => {
      if (windowWidth < 1024) e.preventDefault();
    });
  };

  ymaps.ready(init);

  // координаты клиники (взяты с Yandex Карты)
  const coordinates = [56.323578, 44.025040];

  function init() {
    const myMap = new ymaps.Map("map", {
      center: coordinates,
      zoom: 16,
      controls: [],
    }, {
      searchControlProvider: 'yandex#search',
      yandexMapDisablePoiInteractivity: true, // запрещает открытие балунов, кроме пользовательского
      suppressMapOpenBlock: true // убирает кнопки в левом нижнем углу
    });

    setPlacemark(myMap);

    // местоположение пользователя
    var geolocation =
      ymaps.geolocation
        .get({
          provider: 'yandex',
        })
        .then(function (result) {
          myMap.geoObjects.add(result.geoObjects);
        });
  };
});
