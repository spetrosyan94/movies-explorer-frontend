import React from "react";
import './ButtonCardClose.css';

function ButtonCardClose(props) {

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  // const isLiked = true;
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const CardCloseButtonClassName = (`button-card-close ${props.className}`)

  return (
    <button className={CardCloseButtonClassName} type="button" aria-label="Кнопка лайка">
    </button>
  )
}

export default ButtonCardClose;
