import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import { defaultLocale } from "../kc.gen";
import UserProfileFormFields from "keycloakify/login/UserProfileFormFields";
import "../style/main.css";

const doMakeUserConfirmPassword = true;

const Register = lazy(() => import("./pages/Register"));

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

    const emailExistsMessage = "Email already exists.";
    const invalidEmailMessage = "Invalid email address.";

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "register.ftl":
                        return (
                            <Register
                                kcContext={{
                                    ...kcContext,
                                    messagesPerField: {
                                        ...kcContext.messagesPerField,
                                        get: fieldName => {
                                            const msg =
                                                kcContext.messagesPerField.get(fieldName);
                                            if (msg === emailExistsMessage) {
                                                return i18n.msgStr("emailExistsMessage");
                                            }
                                            if (msg === invalidEmailMessage) {
                                                return i18n.msgStr("invalidEmailMessage");
                                            }
                                            return msg;
                                        },
                                        getFirstError: (...fieldNames) => {
                                            for (const name of fieldNames) {
                                                const msg =
                                                    kcContext.messagesPerField.get(name);
                                                if (msg !== undefined && msg !== "") {
                                                    if (msg === emailExistsMessage) {
                                                        return i18n.msgStr(
                                                            "emailExistsMessage"
                                                        );
                                                    }
                                                    if (msg === invalidEmailMessage) {
                                                        return i18n.msgStr(
                                                            "invalidEmailMessage"
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
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
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
