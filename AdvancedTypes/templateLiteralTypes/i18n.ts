type Locale = "en" | "pt" | "es";
type Namespace = "common" | "home" | "errors";

type TranslationKey = `${Locale}:${Namespace}.${string}`;

const translation = (key: TranslationKey) => key;

translation("en:common.title");
translation("pt:home.welcome");
translation("es:errors.network");
translation("fr:common.title"); // fr is not a type
