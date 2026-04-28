import { useInitialize } from "keycloakify/login/Template.useInitialize";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import { clsx } from "keycloakify/tools/clsx";
import { useSetClassName } from "keycloakify/tools/useSetClassName";
import { useEffect } from "react";
import type { KcContext } from "./KcContext";
import logoUrl from "../login/assets/logo.svg";
import { I18n } from "./i18n/i18n";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        documentTitle,
        bodyClassName,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes,
        children,
        displayInfo,
        infoNode
    } = props;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });

    const { msg, msgStr } = i18n;

    const { realm, auth, url } = kcContext;

    useEffect(() => {
        document.title = documentTitle ?? msgStr("emailVerifyTitle", realm.displayName);
    }, []);

    useSetClassName({
        qualifiedName: "html",
        className: kcClsx("kcHtmlClass")
    });

    useSetClassName({
        qualifiedName: "body",
        className: bodyClassName ?? kcClsx("kcBodyClass")
    });

    const { isReadyToRender } = useInitialize({ kcContext, doUseDefaultCss });

    if (!isReadyToRender) {
        return null;
    }

    return (
        <div className={kcClsx("kcLoginClass")}>
            <div className={kcClsx("kcFormCardClass")}>
                <header className={kcClsx("kcFormHeaderClass")}>
                    {(() => {
                        const node = !(
                            auth !== undefined &&
                            auth.showUsername &&
                            !auth.showResetCredentials
                        ) ? null : (
                            <div id="kc-username" className={kcClsx("kcFormGroupClass")}>
                                <label id="kc-attempted-username">
                                    {auth.attemptedUsername}
                                </label>
                                <a
                                    id="reset-login"
                                    href={url.loginRestartFlowUrl}
                                    aria-label={msgStr("restartLoginTooltip")}
                                >
                                    <div className="kc-login-tooltip">
                                        <i className={kcClsx("kcResetFlowIcon")}></i>
                                        <span className="kc-tooltip-text">
                                            {msg("restartLoginTooltip")}
                                        </span>
                                    </div>
                                </a>
                            </div>
                        );

                        return node;
                    })()}

                    <div id="kc-header" className={kcClsx("kcHeaderClass")}>
                        <div
                            id="kc-header-wrapper"
                            className={kcClsx("kcHeaderWrapperClass")}
                        >
                            <img src={logoUrl} alt="Logo" />
                        </div>
                    </div>

                    <div className={clsx("kcHeaderContainer")}>
                        <div className={clsx("kcHeaderTitle")}>
                            {msg("emailVerifyTitle")}
                        </div>
                    </div>
                </header>
                <div id="kc-content">
                    <div id="kc-content-wrapper">
                        {children}
                        {auth !== undefined && auth.showTryAnotherWayLink && (
                            <form
                                id="kc-select-try-another-way-form"
                                action={url.loginAction}
                                method="post"
                            >
                                <div className={kcClsx("kcFormGroupClass")}>
                                    <input
                                        type="hidden"
                                        name="tryAnotherWay"
                                        value="on"
                                    />
                                    <a
                                        href="#"
                                        id="try-another-way"
                                        onClick={() => {
                                            document.forms[
                                                "kc-select-try-another-way-form" as never
                                            ].requestSubmit();
                                            return false;
                                        }}
                                    >
                                        {msg("doTryAnotherWay")}
                                    </a>
                                </div>
                            </form>
                        )}
                    </div>
                </div>

                {displayInfo && (
                    <div id="kc-info">
                        <div id="kc-info-wrapper">{infoNode}</div>
                    </div>
                )}
            </div>
        </div>
    );
}
