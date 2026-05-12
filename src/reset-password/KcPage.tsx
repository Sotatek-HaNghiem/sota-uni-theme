import { Suspense } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "./Template";
import UserProfileFormFields from "keycloakify/login/UserProfileFormFields";
import "../style/main.css";

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    const invalidUserMessage = "Please specify username.";

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
                                            return msg === invalidUserMessage
                                                ? i18n.msgStr("missingEmailMessage")
                                                : msg;
                                        },
                                        getFirstError: (...fieldNames) => {
                                            for (const name of fieldNames) {
                                                const msg =
                                                    kcContext.messagesPerField.get(name);
                                                if (msg !== undefined && msg !== "") {
                                                    return msg === invalidUserMessage
                                                        ? i18n.msgStr(
                                                              "missingEmailMessage"
                                                          )
                                                        : msg;
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
