import messages from "keycloakify/login/i18n/messages_defaultSet/en";
import { enCommonMessages } from "../common/en";

export const enMessages = {
    ...messages,
    ...enCommonMessages,
    doSendResetLink: "Send reset link",
    backToLogin: "Back to Login",
    username: 'Email <span class="label-required">*</span>',
    doSubmit: "Send reset link",
    resetPasswordTitle: "Welcome to {0}",
    resetPasswordAccountTitle: "Forgot password",
    resetPasswordDescription: "A reset link will be sent to your email address.",
    "email.placeholder": "Enter your email",
    "username.placeholder": "Enter your email"
};
