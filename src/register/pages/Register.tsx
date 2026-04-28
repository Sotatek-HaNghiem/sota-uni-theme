import { useState } from "react";
import type { I18n } from "../i18n/i18n";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { UserProfileFormFieldsProps } from "keycloakify/login/UserProfileFormFieldsProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { clsx } from "keycloakify/tools/clsx";
import { KcContext } from "../KcContext";

export default function Register(
    props: PageProps<Extract<KcContext, { pageId: "register.ftl" }>, I18n> & {
        doMakeUserConfirmPassword: boolean;
        UserProfileFormFields: React.ComponentType<UserProfileFormFieldsProps>;
    }
) {
    const {
        kcContext,
        i18n,
        doUseDefaultCss,
        Template,
        classes,
        doMakeUserConfirmPassword,
        UserProfileFormFields
    } = props;
    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });
    const { url, messagesPerField } = kcContext;
    const { msg, msgStr } = i18n;
    const [isFormValid, setIsFormValid] = useState(false);
    const isRegisterButtonDisabled = !isFormValid;

    return (
        <Template
            {...props}
            displayMessage={messagesPerField.exists("global")}
            displayInfo={true}
            headerNode={
                <div className={clsx("kcHeaderContainer")}>
                    <div className={clsx("kcHeaderTitle")}>
                        {msg("registerAccountTitle")}
                    </div>
                    <div className={clsx("kcHeaderDescription")}>
                        {msg("registerDescription")}
                    </div>
                </div>
            }
            infoNode={
                <div id="kc-registration-container">
                    <div id="kc-registration">
                        <span>
                            {msg("alreadyHaveAccount")}
                            <a href={url.loginUrl}>{msg("doLogIn")}</a>
                        </span>
                    </div>
                </div>
            }
        >
            <form id="kc-register-form" action={url.registrationAction} method="post">
                <UserProfileFormFields
                    kcContext={kcContext}
                    onIsFormSubmittableValueChange={setIsFormValid}
                    i18n={i18n}
                    kcClsx={kcClsx}
                    doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                />

                <div className={kcClsx("kcFormGroupClass")}>
                    <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                        <button
                            className={clsx(
                                kcClsx("kcButtonClass"),
                                kcClsx("kcButtonPrimaryClass"),
                                kcClsx("kcButtonBlockClass"),
                                kcClsx("kcButtonLargeClass")
                            )}
                            type="submit"
                            disabled={isRegisterButtonDisabled}
                        >
                            {msgStr("doRegister")}
                        </button>
                    </div>
                </div>
            </form>
        </Template>
    );
}
