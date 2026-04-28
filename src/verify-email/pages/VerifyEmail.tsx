import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n/i18n";
import { clsx } from "keycloakify/tools/clsx";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";

export default function VerifyEmail(
    props: PageProps<Extract<KcContext, { pageId: "login-verify-email.ftl" }>, I18n>
) {
    const { kcContext, i18n, Template, doUseDefaultCss, classes } = props;
    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msg } = i18n;

    const { url, user } = kcContext;

    return (
        <Template
            {...props}
            displayInfo={true}
            headerNode={
                <div className={clsx("kcHeaderContainer")}>
                    <div className={clsx("kcHeaderTitle")}>{msg("emailVerifyTitle")}</div>
                </div>
            }
            infoNode={
                <div id="kc-verify-email-container">
                    <div id="kc-verify-email">
                        <span>
                            {msg("emailVerify3")}{" "}
                            <a href={url.loginAction}>{msg("doClickHere")}</a>
                        </span>
                    </div>
                </div>
            }
        >
            <div className={clsx("kcVerifyEmailContainer")}>
                <div className={clsx("kcContentContainer")}>
                    <div>
                        {msg("emailVerify1")}
                        <div className={clsx("kcEmailVerify")}>{user?.email ?? ""}</div>
                    </div>
                    <div>{msg("emailVerify2")}</div>
                </div>

                <button
                    className={clsx(
                        kcClsx("kcButtonClass"),
                        kcClsx("kcButtonPrimaryClass"),
                        kcClsx("kcButtonBlockClass"),
                        kcClsx("kcButtonLargeClass")
                    )}
                    onClick={() => (window.location.href = url.loginRestartFlowUrl)}
                    type="submit"
                >
                    {msg("backToLogin")}
                </button>
            </div>
        </Template>
    );
}
