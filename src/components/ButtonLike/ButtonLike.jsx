import React from "react";
import './ButtonLike.css';

function ButtonLike(props) {

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const [isLiked, setIsLiked] = React.useState(false);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const CardLikeButtonClassName = (`button-like ${isLiked && 'button-like_active'} ${props.className}`)

  // Лайк картчоки с фильмом
  function handleLikeCard() {
    setIsLiked(!isLiked);
  }

  return (
    <button className={CardLikeButtonClassName} onClick={handleLikeCard} type="button" aria-label="Кнопка лайка">
    </button>
  )
}

export default ButtonLike;
