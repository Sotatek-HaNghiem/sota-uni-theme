import messages from "keycloakify/login/i18n/messages_defaultSet/en";
import { enCommonMessages } from "../common/en";

export const enMessages = {
    ...messages,
    ...enCommonMessages,
    emailVerifyTitle: "Welcome to {0}",
    emailVerifyAccountTitle: "Account created successfully!",
    emailVerify1: "We’ve sent a verification link to",
    emailVerify2: "Please check your email and click the link to activate your account.",
    emailVerify3: "Didn’t receive the email?",
    doClickHere: "Resend",
    backToLogin: "Back to Sign in"
};
