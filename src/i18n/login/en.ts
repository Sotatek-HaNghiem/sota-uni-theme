import messages from "keycloakify/login/i18n/messages_defaultSet/en";
import { enCommonMessages } from "../common/en";

export const enMessages = {
    ...messages,
    ...enCommonMessages,
    doForgotPassword: "Forgot password?",
    email: "Email *",
    password: "Password *",
    doLogIn: "Sign In",
    doRegister: "Sign Up",
    noAccount: "Don’t have an account?",
    loginTitle: "Welcome to {0}",
    loginAccountTitle: "Welcome to SotaUni",
    loginDescription: "Continue your learning journey - Sign in now.",
    restartLoginTooltip: "Restart login",
    doTryAnotherWay: "Try another way",
    signInWithGoogle: "Sign in with Google",
    passwordNew: "New password",
    passwordConfirm: "Confirm password",
    logoutOtherSessions: "Sign out from other devices",
    "email.placeholder": "Enter your email",
    "username.placeholder": "Enter your email",
    "password.placeholder": "Enter your password",
    "password-new.placeholder": "Enter your new password",
    "password-confirm.placeholder": "Confirm your password"
};
