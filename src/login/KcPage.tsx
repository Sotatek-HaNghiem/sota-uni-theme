import { Suspense } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import { defaultLocale } from "../kc.gen";
import UserProfileFormFields from "keycloakify/login/UserProfileFormFields";
import "../style/main.css";

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const locale = localStorage.getItem("locale") || defaultLocale;

    const { i18n } = useI18n({
        kcContext: {
            ...kcContext,
            locale: locale
                ? {
                      ...kcContext.locale,
                      currentLanguageTag: locale
                  }
                : kcContext.locale
        }
    } as any);

    const invalidUserMessage = "Invalid username or password.";
    const invalidPasswordMessage = "Please specify password.";
    const invalidConfirmPasswordMessage = "Passwords don't match.";

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    default:
                        return (
                            <DefaultPage
                                kcContext={{
                                    ...kcContext,
                                    messagesPerField: {
                                        ...kcContext.messagesPerField,
                                        get: fieldName => {
                                            const msg =
                                                kcContext.messagesPerField.get(fieldName);
                                            if (msg === invalidUserMessage) {
                                                return i18n.msgStr("invalidUserMessage");
                                            }
                                            if (msg === invalidPasswordMessage) {
                                                return i18n.msgStr(
                                                    "invalidPasswordMessage"
                                                );
                                            }
                                            if (msg === invalidConfirmPasswordMessage) {
                                                return i18n.msgStr(
                                                    "invalidConfirmPasswordMessage"
                                                );
                                            }
                                            return msg;
                                        },
                                        getFirstError: (...fieldNames) => {
                                            for (const name of fieldNames) {
                                                const msg =
                                                    kcContext.messagesPerField.get(name);
                                                if (msg !== undefined && msg !== "") {
                                                    if (msg === invalidUserMessage) {
                                                        return i18n.msgStr(
                                                            "invalidUserMessage"
                                                        );
                                                    }
                                                    if (msg === invalidPasswordMessage) {
                                                        return i18n.msgStr(
                                                            "invalidPasswordMessage"
                                                        );
                                                    }
                                                    if (
                                                        msg ===
                                                        invalidConfirmPasswordMessage
                                                    ) {
                                                        return i18n.msgStr(
                                                            "invalidConfirmPasswordMessage"
                                                        );
                                                    }
                                                    return msg;
                                                }
                                            }
                                            return "";
                                        }
                                    }
                                }}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const classes = {} satisfies { [key in ClassKey]?: string };
