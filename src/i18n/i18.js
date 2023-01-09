import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          login: "login",
          learnMore: "learn more",
          forgotPassword: "Forgot password",
          registration: "Registration",
          films: "films",
          games: "games",
          books: "books",
          theme: "theme",
          signUp: "Sign up",
          logIn: "Log in",
          send: "send"
        },
      },
      ru: {
        translation: {
          login: "войти",
          learnMore: "узнать больше",
          forgotPassword: "забыли пароль",
          registration: "регистрация",
          films: "фильмы",
          games: "игры",
          books: "книги",
          theme: "тема",
          signUp: "регистрация",
          logIn: "войти",
          send: "отправить"
        },
      },
      pl:{
        translation:{
          login: "login",
          learnMore: "dowiedz się więcej",
          forgotPassword: "Zapomniałem hasła",
          registration: "Rejestracja",
          films: "filmy",
          games: "gry",
          books: "książki",
          theme: "temat",
          signUp: "Zarejestruj się",
          logIn: "Zaloguj się",
          send: "wyślij"
        }
      }
    },
  });

export default i18n;
