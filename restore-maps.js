'use strict';
const placeFormWithAddress=placeHTML;
placeHTML=function(initial){const html=placeFormWithAddress(initial);const maps="<div class='maps'><a class='btn ghost' href='yandexmaps://maps.yandex.ru/'>Я.Карты</a><a class='btn ghost' href='dgis://2gis.ru/'>2ГИС</a><a class='btn ghost' href='maps://'>Apple Карты</a></div><p class='mut sm'>Открой карты, найди место и скопируй его адрес или ссылку. Затем вернись сюда и вставь в поле.</p>";return html.replace("<label class='mut sm' for='pin'>",maps+"<label class='mut sm' for='pin'>");};
