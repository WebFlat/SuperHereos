import React from 'react';
import img from 'img/superman_big.jpg';
import HeroesImage from '../heroes_img';
import HeroesDescription from '../heroes_description';


const Superman = () => {
    return (
        <>
        <HeroesImage src={img}/>
        <HeroesDescription name='superman' text=' - вымышленный супергерой появляться в американских комиксов , изданных DC Comics . Созданный писателем Джерри Сигел и художник Джо Шустер , персонаж впервые появился в Action Comics # 1 от 18 апреля 1938 года Супермен регулярно появляется в комических книг , изданных DC Comics и был адаптирован для радио - шоу, газетных полос, телевизионных шоу, фильмов и видеоигры. Супермен родился на планете Криптон и имени Кал-Эл . Как ребенок, он был послан на Землю в небольшой космический корабль , его ученый отец Джор-Эл минут до Криптон был разрушен в природном катаклизме. Его корабль приземлился в американской сельской местности; он был найден и принят фермерами Джонатан и Марта Кент, который назвал его Кларк Кент . Кларк отображается различными сверхчеловеческие способностями, такие как невероятная сила и непроницаемая кожа. Его приемные родители посоветовали ему использовать свои способности на благо человечества, и он решил бороться с преступностью в качестве бдительности. Для того, чтобы защитить свою частную жизнь, он переходит в красочный костюм и использует псевдоним «Супермен» , когда борьба с преступностью. Кларк Кент живет в вымышленном американском городе Метрополисе , где он работает журналистом в Daily Planet . Любовный интерес Супермена его товарищ журналист Лоис Лейн , и его классический заклятый враг гений изобретатель Лекс Лютор . Он является другом многих других супергероев в DC Universe , таких как Бэтмен и Чудо - женщина .Хотя Супермен был не первый супергерой характер, он популяризировал супергероя жанр и определил ее конвенции. Супермен еще один из самых прибыльных супергероев франшиз.' />
        </>
    )
}


export default Superman;