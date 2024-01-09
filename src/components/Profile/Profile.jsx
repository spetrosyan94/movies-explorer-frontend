import React, { useContext } from "react";
import './Profile.css';

import ButtonFormSubmit from "../ButtonFormSubmit/ButtonFormSubmit";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile() {

  const currentUser = useContext(CurrentUserContext);

  const [formInput, setFormInput] = React.useState({
    name: "Алеша",
    email: "alesha@bk.ru"
  });

  // Стейт кнопки редактирования инпутов в формы
  const [editForm, setIsEditForm] = React.useState(false);
  // Стейт новых введенных данных в инпуте. Если данные прошлые, кнопка самбит будет выключена
  const [inputChanges, setInputChanges] = React.useState(false);
  // Объект useRef охраняет значения инпутов для сравнения при вводе новых значений
  const prevRefInput = React.useRef({
    name: formInput.name,
    email: formInput.email,
  });


  // Вносим полученные изменения с инпутов в стейт данных формы
  function handleInputChange(name, value) {
    setFormInput(prevFormInput => ({
      ...prevFormInput,
      [name]: value
    }));
  };

  // Функция проверяет, совпадают ли значения инпутов с предыдущим, если да, кнопка сабмита отключена
  function checkValueInput(name, value) {
    if (prevRefInput.current[name] !== value) {
      setInputChanges(true);
    } else {
      setInputChanges(false);
    }
  }

  // Получаем данные с каждого инпута используя деструктуризацию evt.target
  function handleChange(evt) {
    const { name, value } = evt.target;
    handleInputChange(name, value);
    checkValueInput(name, value);
  };

  function editInputForm() {
    setIsEditForm(true);
  }

  // Обработчик самбита формы
  function handleSubmit(evt) {
    evt.preventDefault();
    setIsEditForm(false);
    setInputChanges(false);

    // Обновляем данные при отправке формы
    prevRefInput.current = {
      name: formInput.name,
      email: formInput.email,
    };

  }

  return (

    <main className="profile">

      <section className="profile__container">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>

        <form className="profile__form"
          name="profile-form"
          id="profile-form"
          noValidate
          onSubmit={handleSubmit}
        >

          <div className="profile__labels-container">

            <label className="profile__label" type="name">
              <span className="profile__label-text">Имя</span>
              <input
                className={`profile__input `}
                onChange={handleChange}
                value={formInput.name}
                disabled={!editForm}
                name="name"
                form="profile-form"
                // className={`profile__input ${errors.name && 'profile__input_error'}`}
                type="text"
                required
                minLength="2"
                maxLength="30"
                pattern={'^[а-яА-Яa-zA-Z0-9]+$'}
                placeholder="Введите новое имя"
              ></input>
            </label>

            {/* <span className="profile__error-name">{errors.name || ''}</span> */}
            <span className="profile__error-name"> </span>


            <label
              className="profile__label"
              type="email"
            >
              <span className="profile__label-text">E-mail</span>
              <input
                className={`profile__input `}
                onChange={handleChange}
                value={formInput.email}
                disabled={!editForm}
                name="email"
                form="profile-form"
                // className={`profile__input ${errors.email && 'profile__input_error'}`}
                type="email"
                required
                placeholder="Введите новую почту"
              />
            </label>

            {/* <span className="profile__error">{errors.email || ''}</span> */}
            <span className="profile__error-name"> </span>

          </div>
          <div className="profile__btn-container">

            {editForm
              ? <ButtonFormSubmit disabled={!inputChanges} textButton="Сохранить"></ButtonFormSubmit>
              : <>
                <button className="profile__btn-edit" type="button" onClick={editInputForm}>Редактировать</button>
                <button className="profile__btn-exit" type="button">Выйти из аккаунта</button>
              </>
            }

          </div>
        </form>



      </section>


    </main >

  )
}

export default Profile;
