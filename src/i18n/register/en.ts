import messages from "keycloakify/login/i18n/messages_defaultSet/en";
import { enCommonMessages } from "../common/en";

export const enMessages = {
    ...messages,
    ...enCommonMessages,
    doRegister: "Sign Up",
    doLogIn: "Sign In",
    username: "Username",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    password: "Password",
    passwordConfirm: "Confirm password",
    alreadyHaveAccount: "Have an account?",
    registerTitle: "Welcome to {0}",
    registerAccountTitle: "Sign up",
    registerDescription: "Create new account to join SotaUni",
    doTryAnotherWay: "Try another way",
    "username.placeholder": "Enter your username",
    "email.placeholder": "Enter your email",
    "firstName.placeholder": "Enter your first name",
    "lastName.placeholder": "Enter your last name",
    "password.placeholder": "Enter your password",
    "password-confirm.placeholder": "Confirm your password",
    "locale.placeholder": "",

    "error-user-attribute-required": "This is a required field",
    "error-pattern-no-match": "Invalid format.",
    invalidEmailMessage: "The email format is invalid.",
    invalidPasswordConfirmMessage: "Confirm password do not match.",
    invalidPasswordMinLengthMessage: "Password must contain 8 to 50 characters.",
    invalidPasswordMaxLengthMessage: "Password must contain 8 to 50 characters.",
    emailExistsMessage: "Email already exists. Please sign in or use another email."
};
