import { Suspense } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import { defaultLocale } from "../kc.gen";
import UserProfileFormFields from "keycloakify/login/UserProfileFormFields";
import VerifyEmail from "./pages/VerifyEmail";
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

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login-verify-email.ftl":
                        return (
                            <VerifyEmail
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={true}
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
